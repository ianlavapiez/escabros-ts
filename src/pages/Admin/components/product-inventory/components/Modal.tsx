import React from "react";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Modal, { ModalProps } from "antd/es/modal";

import SubmitButton from "components/button/SubmitButton";
import ExpirationDatePicker from "components/date-picker/ExpirationDatePicker";
import { layout } from "utils/layout";

type ProductInventoryFieldType = {
  expirationDate: string;
  productId: string;
  quantity: string;
};

type ProductInventoryModalProps = ModalProps & {
  isEdit: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductInventoryModal: React.FC<ProductInventoryModalProps> = ({
  isEdit,
  open,
  setOpen,
}) => {
  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      destroyOnClose
      footer={null}
      onCancel={onCancel}
      open={open}
      title="Manage Product Inventory Details"
    >
      <Form {...layout} preserve={false}>
        <Input type="hidden" readOnly name="id" className="id" />
        <Form.Item<ProductInventoryFieldType>
          label="Product"
          name="productId"
          rules={[
            {
              required: true,
              message: "Please select product!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<ProductInventoryFieldType>
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
        <Form.Item<ProductInventoryFieldType>
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
            {isEdit ? "Update Product Stock" : "Add Product Stock"}
          </SubmitButton>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductInventoryModal;
