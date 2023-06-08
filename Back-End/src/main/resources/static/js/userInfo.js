let apiUrl = {
    userInfoUrl: "/users/userInfo",
    userInfoBuildSuccess: "/index.html",
    userInfoBuildError: "/error"
}

window.onload = function () {
    let buildUserInfoBtn = document.getElementById("buildUserInfoBtn");
    buildUserInfoBtn.addEventListener("click", function (event) {
        event.preventDefault();
        let fullName = document.getElementById("fullName").value;
        let birthday = document.getElementById("birthday").value;
        let gender = document.getElementById("gender").value;
        let sexualOrientation = document.getElementById("sexualOrientation").value;
        let location = document.getElementById("location").value;
        let self_intro = document.getElementById("self_intro").value;
        $.post({
            url: apiUrl.userInfoUrl,
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "fullName": fullName,
                "birthday": birthday,
                "gender": gender,
                "sexualOrientation": sexualOrientation,
                "location": location,
                "self_intro": self_intro
            }),
            dataType: "JSON",
            success: function (json) {
                if (json.state == 200) {
                    alert("用戶資料建立成功!");
                    window.location.href = apiUrl.userInfoBuildSuccess;
                } else if (json.state == 4001) {
                    alert("暱稱重複，請重新輸入!")
                    window.location.href = apiUrl.userInfoBuildError;
                } else if (json.state == 5002) {
                    alert("伺服器異常，無法新增個人資料，請稍後再嘗試!")
                    window.location.href = apiUrl.userInfoBuildError;
                }
            },
            error: function (xhr) {
                alert("建立帳號時產生未知的異常: " + xhr.status);
            }
        });
    })
}


