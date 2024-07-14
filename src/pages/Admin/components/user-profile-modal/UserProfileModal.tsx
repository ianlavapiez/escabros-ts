import React from "react";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Modal, { ModalProps } from "antd/es/modal";

import SubmitButton from "components/button/SubmitButton";
import { layout } from "utils/layout";

type UserProfileType = {
  email: string;
};

type UserProfileModalProps = ModalProps & {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserProfileModal: React.FC<UserProfileModalProps> = ({
  open,
  setOpen,
}) => {
  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal footer={null} title="Settings" onCancel={onCancel} open={open}>
      <Form {...layout}>
        <Form.Item<UserProfileType>
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Email field must not be blank.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <SubmitButton type="primary" htmlType="submit">
            Update Profile
          </SubmitButton>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserProfileModal;
