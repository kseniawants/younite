import React, { useEffect, } from "react";
import registerImage from "../assets/images/register.png";
import Gradient from "../assets/images/bgc.png";
import Form from "../component/LoginForm";

function Login () {
    useEffect(() => {
        document.body.classList.add("loginBody");
        return () => {
          document.body.classList.remove("loginBody");
        };
      }, []);
    
    return (
        <main className="container-fluid">
            <div className="loginMain d-flex row overflow-hidden bg-white flex-row ">
            <div className="imageArea d-flex position-relative col">
                <img src={registerImage} alt="registerImage" className="registerImage position-absolute t-50 start-0" />
            </div>
            <div className="registerFormArea position-relative d-flex justify-content-center align-items-center w-50% col">
                <Form />
                <img src={Gradient} alt="bgGradient" className=" d-flex position-absolute top-100 start-5 translate-middle" />
                <img src={Gradient} alt="bgGradient" className=" d-flex position-absolute top-0 start-100 translate-middle" />
            </div>
            </div>
        </main>
    );
}

export default Login
