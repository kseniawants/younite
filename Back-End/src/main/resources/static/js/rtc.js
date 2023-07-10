window.onload = function () {
    // rtc.js
    let user = Math.round(Math.random() * 1000) + "";
    let room = sessionStorage.getItem('room');
    let socket = null;
    let socketRead = false;
    let videoEnabled = true;


    let localVideo = document.getElementById("local-video");
    let remoteVideo = document.getElementById("remote-video");
    let localStream = null;
    let peerConnection = null;
    let peerStarted = false;
    let mediaConstraints = {
        mandatory: {
            OfferToReceiveAudio: false,
            OfferToReceiveVideo: true,
        },
    };
    $("#hangUp").on('click',()=>{hangUp();})
    $("#videoIO").on('click',()=>{toggleVideo();})
    $("#getRoom").on("click",  () => {
        // startLocal();
    });
    startVideo()
        .then(() => {
            startLocal(); // startVideo 完成後執行 startLocal
        })
        .catch((error) => {
            console.error(error);
        });
     function  startLocal(){
        // room = $("#room").val();
        let socketUrl = "ws://localhost:8080/msgServer2/" + user + "/" + room;
        // let socketUrl = "ws://10.0.104.120:8080/msgServer2/" + user + "/" + room;

        socket = new WebSocket(socketUrl);
        socket.onopen = function () {
            console.log("connecting...");
            socketRead = true;
        };
        socket.onclose = function (e) {
            console.log("close: " + e.code);
            socketRead = false;
        };

        socket.onmessage = function (res) {
            let evt = JSON.parse(res.data);
            // console.log(evt);
            let intervalId;
            if (evt.type === "offer") {
                console.log(evt,"sdp")
                intervalId = setInterval(function() {
                    if (localStream !== null) {
                        console.log("connect offer");
                        onOffer(evt);
                        clearInterval(intervalId);
                    } else {
                        console.log("localStream is null");
                    }
                }, 100);
                console.log("get offer send ans");
            }

            else if (evt.type === "answer" && peerStarted) {
                console.log("get ans send sdp");
                        console.log("connect ans")
                        onAnswer(evt);
            } else if (evt.type === "candidate" && peerStarted) {
                        console.log("connect candidate")
                        onCandidate(evt);
                console.log("accept ice..");
            } else if (evt.type === "bye" && peerStarted) {
                console.log("WebRTC disconnect");
                stop();
            }else if(evt.type==="connectNow"){
                let timer = setTimeout(function() {
                    if (localStream!=null) {
                        connect();
                        console.log("i send offer")
                        clearTimeout(timer);
                    }}, 1000);
            }
        };

    }
    function onOffer(evt) {
        console.log("get offer...");
        console.log(evt);
        setOffer(evt);
        sendAnswer(evt);
        peerStarted = true;
    }

    function onAnswer(evt) {
        console.log("get ans...");
        console.log(evt);
        setAnswer(evt);
    }

    function onCandidate(evt) {
        let candidate = new RTCIceCandidate({
            sdpMLineIndex: evt.sdpMLineIndex,
            sdpMid: evt.sdpMid,
            candidate: evt.candidate,
        });
        console.log("get candidate...");
        console.log(candidate);
        peerConnection.addIceCandidate(candidate);

    }

    function sendSDP(sdp) {
        let text = JSON.stringify(sdp);
        console.log("send sdp.....");
        console.log(text);
        socket.send(text);
    }

    function sendCandidate(candidate) {
        let text = JSON.stringify(candidate);
        socket.send(text);
    }

    function startVideo() {
        return new Promise((resolve, reject) => {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices
                    .getUserMedia({
                        video: true,
                        audio: true,
                    })
                    .then(function(stream) {
                        localStream = stream;
                        localVideo.srcObject = stream;
                        localVideo.play();
                        localVideo.volume = 0;
                        resolve(); // 完成時呼叫 resolve()
                    })
                    .catch(function(error) {
                        console.error("error: [error：" + error.code + "]");
                        reject(error); // 發生錯誤時呼叫 reject()
                    });
            } else {
                navigator.webkitGetUserMedia(
                    {
                        video: true,
                        audio: true,
                    },
                    function(stream) {
                        localStream = stream;
                        localVideo.src = window.webkitURL.createObjectURL(stream);
                        localVideo.play();
                        localVideo.volume = 0;
                        resolve(); // 完成時呼叫 resolve()
                    },
                    function(error) {
                        console.error("error: [error code：" + error.code + "]");
                        reject(error); // 發生錯誤時呼叫 reject()
                    }
                );
            }
        });
    }

    function prepareNewConnection() {
        console.log('lol',localStream)
        let pc_config = {
            iceServers: [],
        };
        let peer = null;
        try {
            peer = new RTCPeerConnection(pc_config);
        } catch (e) {
            console.log("error establish，error：" + e.message);
        }

        peer.onicecandidate = function (evt) {
            if (evt.candidate) {
                console.log(evt.candidate);
                sendCandidate({
                    type: "candidate",
                    sdpMLineIndex: evt.candidate.sdpMLineIndex,
                    sdpMid: evt.candidate.sdpMid,
                    candidate: evt.candidate.candidate,
                });
            }
        };
        // peer.addStream(localStream);
        localStream.getTracks().forEach(track => {
            peer.addTrack(track, localStream);
        });
        // peer.addEventListener("addstream", onRemoteStreamAdded, false);
        // peer.addEventListener("removestream", onRemoteStreamRemoved, false);
        peer.addEventListener("track", onRemoteTrackAdded);
        peer.addEventListener("removetrack", onRemoteTrackRemoved);

        // function onRemoteStreamAdded(event) {
        //     remoteVideo.srcObject = event.stream;
        // }
        //
        // function onRemoteStreamRemoved(event) {
        //     console.log("remove remote");
        //     remoteVideo.src = "";
        // }




        return peer;
    }
    function onRemoteTrackRemoved(event) {
        console.log("remove remote track");
        const stream = remoteVideo.srcObject;
        const tracks = event.streams[0].getTracks();

        tracks.forEach(track => {
            stream.removeTrack(track);
        });
    }
    function onRemoteTrackAdded(event) {
        remoteVideo.srcObject = event.streams[0];
    }
    function sendOffer() {
        peerConnection = prepareNewConnection();
        peerConnection.createOffer(
            function (sessionDescription) {
                peerConnection.setLocalDescription(sessionDescription);
                // console.log("send: SDP");
                console.log(sessionDescription);
                sendSDP(sessionDescription);
            },
            function (err) {
                console.log("offer failed");
            },
            mediaConstraints
        );
    }

    function setOffer(evt) {
        if (peerConnection) {
            console.error("peerConnection already exists!");
            return;
        }
        peerConnection = prepareNewConnection();
        peerConnection.setRemoteDescription(new RTCSessionDescription(evt));
    }

    function sendAnswer(evt) {
        console.log("send ans, create...");
        if (!peerConnection) {
            console.error("peerConnection does not exist!");
            return;
        }

        peerConnection.createAnswer(
            function (sessionDescription) {
                peerConnection.setLocalDescription(sessionDescription);
                console.log("send: SDP");
                console.log(sessionDescription);
                sendSDP(sessionDescription);
            },
            function () {
                console.log("create ans failed");
            },
            mediaConstraints
        );
    }

    function setAnswer(evt) {
        if (!peerConnection) {
            console.error("peerConnection does not exist!");
            return;
        }
        peerConnection.setRemoteDescription(new RTCSessionDescription(evt));
    }

    function connect() {
        if (!localStream) {
            alert("Failed to get local stream.");
        } else if (peerStarted || !socketRead) {
            alert("Please refresh the page and try again.");
        } else {
            sendOffer();
            peerStarted = true;
        }
    }

    function hangUp() {
        sendBye();
        stop();
    }

    function stop() {
        peerConnection.close();
        peerConnection = null;
        peerStarted = false;
    }

    function sendBye() {
        let byeMessage = {
            type: "bye",
        };
        let byeMessageStr = JSON.stringify(byeMessage);
        socket.send(byeMessageStr);
    }
    function toggleVideo() {
        videoEnabled = !videoEnabled; // Toggle video enable state
        let videoio = document.getElementById("videoIO");
        if (localStream) {
            const videoTracks = localStream.getVideoTracks();
            if (videoTracks.length > 0) {
                videoTracks[0].enabled = videoEnabled; // Enable or disable video track
                if (videoEnabled === false) {
                    videoio.textContent = "open";
                } else {
                    videoio.textContent = "close";
                }
            }
        }
    }
};



