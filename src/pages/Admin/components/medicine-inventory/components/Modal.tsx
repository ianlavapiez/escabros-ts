import React from "react";
import SubmitButton from "@components/button/SubmitButton";
import ExpirationDatePicker from "@components/date-picker/ExpirationDatePicker";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Modal, { ModalProps } from "antd/es/modal";
import { layout } from "@utils/layout";

type MedicineInventoryModalFieldType = {
  expirationDate: string;
  medicineId: string;
  quantity: string;
};

type MedicineInventoryModalProps = ModalProps & {
  isEdit: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MedicineInventoryModal: React.FC<MedicineInventoryModalProps> = ({
  isEdit,
  open,
  setOpen,
}) => {
  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal onCancel={onCancel} open={open} title="Manage Medicine Inventory">
      <Form {...layout} preserve={false}>
        <Input type="hidden" readOnly name="id" className="id" />
        <Form.Item<MedicineInventoryModalFieldType>
          label="Medicine"
          name="medicineId"
          rules={[
            {
              required: true,
              message: "Please select medicine!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<MedicineInventoryModalFieldType>
          label="Quantity"
          name="quantity"
          rules={[
            {
              required: true,
              message: "Please input quantity!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item<MedicineInventoryModalFieldType>
          label="Expiration Date"
          name="expirationDate"
          rules={[
            {
              required: true,
              message: "Please select expiration date!",
            },
          ]}
        >
          <ExpirationDatePicker />
        </Form.Item>
        <Form.Item>
          <SubmitButton type="primary" htmlType="submit">
            {isEdit ? "Update Medicine Stock" : "Add Medicine Stock"}
          </SubmitButton>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MedicineInventoryModal;
