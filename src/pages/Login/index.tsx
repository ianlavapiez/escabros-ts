import React, { useCallback, useEffect } from "react";
import Form, { FormProps } from "antd/es/form";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import MainLogo from "assets/logo.png";
import Button from "components/button/Button";
import { signIn } from "features/auth/authThunks";
import { useAuthSelector } from "features/auth/authSelector";
import { useAppDispatch } from "hooks/useDispatchSelector";
import useNotification from "hooks/useNotification";
import { Login as LoginType } from "types/auth";

import {
  ButtonWrapper,
  FormWrapper,
  HeaderText,
  Image,
  InputWrapper,
  LoginContainer,
  LoginWrapper,
} from "./Login.styles";
import { clearSuccessMessage } from "features/auth/authSlice";

type LoginFieldType = LoginType;

type LoginProps = object;

const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, loading, successMessage, user] = useAuthSelector();
  const { contextHolder, openNotification } = useNotification();

  const navigateUser = useCallback(() => {
    if (user) {
      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    }
  }, [navigate, user]);

  const onFinish: FormProps<LoginFieldType>["onFinish"] = async ({
    email,
    password,
  }) => {
    dispatch(signIn({ email, password }));
  };

  useEffect(() => {
    if (error) {
      openNotification(error, "Something went wrong!", "error");
    }
  }, [error, openNotification]);

  useEffect(() => {
    if (successMessage) {
      openNotification(successMessage, "Success!", "success");
      dispatch(clearSuccessMessage());
      navigateUser();
    }
  }, [dispatch, navigateUser, openNotification, successMessage]);

  return (
    <LoginContainer>
      {contextHolder}
      <LoginWrapper>
        <Image alt="Escabros Logo" src={MainLogo} />
        <HeaderText>Welcome, please login your account!</HeaderText>
        <FormWrapper>
          <Form name="login" onFinish={onFinish}>
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
                <Button htmlType="submit" loading={loading} type="primary">
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
