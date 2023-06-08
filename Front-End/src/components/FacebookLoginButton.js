import React from "react";
import { FacebookProvider, LoginButton } from "react-facebook";

function FacebookLoginButton() {
  return (
    <FacebookProvider appId="YOUR_APP_ID">
      <LoginButton
        scope="email"
        onCompleted={(response) => console.log(response)}
        onError={(error) => console.log(error)}
        style={{ width: "400px", height: "48px", marginTop: "12px" }}
      >
        以facebook註冊
      </LoginButton>
    </FacebookProvider>
  );
}

export default FacebookLoginButton;
