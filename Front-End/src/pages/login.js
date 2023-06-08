import React, { useEffect, useState } from "react";
import Loginimage from "../pages/imgpages/login.png";
import Gradient from "./imgpages/bgc.png";
import { Input, Form, Button, Divider } from "antd";
import GoogleSignIn from "../components/GoogleSignIn";
import FacebookLoginButton from "../components/FacebookLoginButton";

function Login() {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 40,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 10,
      },
    },
  };

  useEffect(() => {
    document.body.classList.add("loginBody");
    return () => {
      document.body.classList.remove("loginBody");
    };
  }, []);

  return (
    <main className="loginMain">
      <div className="imageArea">
        <img src={Loginimage} alt="loginImage" className="loginImage" />
      </div>
      <div className="loginFormArea">
        <img src={Gradient} alt="bgGradient" className="bgGradient" />
        <img src={Gradient} alt="bgGradient" className="bgGradient2" />
        <div className="loginForm">
          <h1>註冊</h1>
          <div className="loginFormContent">
            <Form
              form={form}
              layout="vertical"
              initialValues={{
                requiredMarkValue: requiredMark,
              }}
              onValuesChange={onRequiredTypeChange}
              requiredMark={requiredMark}
            >
              <Form.Item label="帳號名稱" required>
                <Input placeholder="輸入帳號名稱" name="userAccount" />
                <p>*必填</p>
              </Form.Item>

              <Form.Item name={["user", "email"]} label="信箱" required>
                <Input placeholder="輸入信箱" />
                <p>*必填</p>
              </Form.Item>

              <Form.Item
                name="phone"
                label="電話號碼"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
                required
              >
                <Input
                  // addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                  placeholder="輸入電話號碼"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="密碼"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
                required
              >
                <Input.Password placeholder="輸入密碼" />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="確認密碼"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
                required
              >
                <Input.Password placeholder="再次輸入密碼" />
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: "#FA6B6B" }}
                >
                  註冊
                </Button>
              </Form.Item>
            </Form>
            <div className="orDivider">
              <p>or</p>
              <Divider />
            </div>
            <div>
              <GoogleSignIn />
              <FacebookLoginButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
