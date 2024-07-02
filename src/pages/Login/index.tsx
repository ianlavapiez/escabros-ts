import React from "react";
import { Button, Flex, Form, FormProps, Input } from "antd";

type LoginFieldType = {
  email: string;
  password: string;
};

interface Props {}

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
    <Flex>
      <Form
        autoComplete="on"
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item<LoginFieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<LoginFieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default Login;
