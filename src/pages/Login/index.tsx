import React from "react";
import Form, { FormProps } from "antd/es/form";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import {
  ButtonWrapper,
  FormWrapper,
  HeaderText,
  Image,
  InputWrapper,
  LoginContainer,
  LoginWrapper,
} from "./Login.styles";

import MainLogo from "../../assets/logo.png";
import { Button } from "../../components";

type LoginFieldType = {
  email: string;
  password: string;
};

type Props = object;

const Login: React.FC<Props> = () => {
  const onFinish: FormProps<LoginFieldType>["onFinish"] = (values) => {
    console.log(values);
  };

  const onFinishFailed: FormProps<LoginFieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <Image alt="Escabros Logo" src={MainLogo} />
        <HeaderText>Welcome, please login your account!</HeaderText>
        <FormWrapper>
          <Form
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item<LoginFieldType>
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <InputWrapper
                prefix={<UserOutlined />}
                placeholder="Email"
                type="email"
              />
            </Form.Item>
            <Form.Item<LoginFieldType>
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <InputWrapper
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <ButtonWrapper>
                <Button
                  htmlType="submit"
                  //   loading={loading}
                  type="primary"
                >
                  Log In
                </Button>
              </ButtonWrapper>
            </Form.Item>
          </Form>
        </FormWrapper>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
