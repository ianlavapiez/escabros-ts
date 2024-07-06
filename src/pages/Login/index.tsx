import React from "react";
import Form, { FormProps } from "antd/es/form";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import {
  ButtonContainer,
  Container,
  HeaderText,
  InputContainer,
  Image,
  LoginContainer,
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
    <Container>
      <LoginContainer>
        <Image alt="Escabros Logo" src={MainLogo} />
        <HeaderText>Welcome, please login your account!</HeaderText>
        <Form
          style={{ width: "100%", padding: "2rem" }}
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
            <InputContainer
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
            <InputContainer
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <ButtonContainer>
              <Button
                htmlType="submit"
                //   loading={loading}
                type="primary"
              >
                Log In
              </Button>
            </ButtonContainer>
          </Form.Item>
        </Form>
      </LoginContainer>
    </Container>
  );
};

export default Login;
