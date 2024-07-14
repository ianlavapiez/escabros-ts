import React from "react";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Modal, { ModalProps } from "antd/es/modal";

import SubmitButton from "components/button/SubmitButton";
import { layout } from "utils/layout";

type PasswordFieldType = {
  confirmPassword: string;
  newPassword: string;
  oldPassword: string;
};

type PasswordModalProps = ModalProps & {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PasswordModal: React.FC<PasswordModalProps> = ({ open, setOpen }) => {
  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      destroyOnClose
      title="Change Password"
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      <Form {...layout}>
        <Form.Item<PasswordFieldType>
          label="Old Password"
          name="oldPassword"
          rules={[
            {
              required: true,
              message: "Please input your old password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item<PasswordFieldType>
          label="New Password"
          name="newPassword"
          rules={[
            {
              required: true,
              message: "Please input your new password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item<PasswordFieldType>
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <SubmitButton type="primary" htmlType="submit">
            Change Password
          </SubmitButton>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PasswordModal;
