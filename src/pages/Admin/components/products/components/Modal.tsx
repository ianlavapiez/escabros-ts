import React from "react";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Modal, { ModalProps } from "antd/es/modal";

import SubmitButton from "components/button/SubmitButton";
import { layout } from "utils/layout";

type ProductFieldType = {
  barcode: string;
  costPrice: string;
  productName: string;
  sellingPrice: string;
  size: string;
};

type ProductModalProps = ModalProps & {
  isEdit: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductModal: React.FC<ProductModalProps> = ({
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
      title="Manage Product Details"
    >
      <Form {...layout} preserve={false}>
        <Input type="hidden" readOnly name="id" className="id" />
        <Form.Item<ProductFieldType>
          label="Product Barcode"
          name="barcode"
          rules={[
            {
              required: true,
              message: "Please input product barcode!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<ProductFieldType>
          label="Product Name"
          name="productName"
          rules={[
            {
              required: true,
              message: "Please input product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<ProductFieldType>
          label="Size"
          name="size"
          rules={[
            {
              required: true,
              message: "Please input size!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<ProductFieldType>
          label="Cost Price"
          name="costPrice"
          rules={[
            {
              required: true,
              message: "Please input cost price!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item<ProductFieldType>
          label="Selling Price"
          name="sellingPrice"
          rules={[
            {
              required: true,
              message: "Please input selling price!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <SubmitButton type="primary" htmlType="submit">
            {isEdit ? "Update Product" : "Add Product"}
          </SubmitButton>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductModal;
