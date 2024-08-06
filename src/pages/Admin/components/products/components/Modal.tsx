import React from "react";
import Form, { FormProps } from "antd/es/form";
import Input from "antd/es/input";
import Modal, { ModalProps } from "antd/es/modal";

import SubmitButton from "components/button/SubmitButton";
import { useProductsSelector } from "features/products/productsSelector";
import { addProduct, updateProduct } from "features/products/productsThunks";
import { useAppDispatch } from "hooks/useDispatchSelector";
import { Product } from "types/products";
import { layout } from "utils/layout";

type ProductFieldType = Omit<Product, "id" | "quantity"> & {
  id?: Product["id"];
};

type ProductModalProps = ModalProps & {
  data: Product | null;
  isEdit: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductModal: React.FC<ProductModalProps> = ({
  data,
  isEdit,
  open,
  setOpen,
}) => {
  const dispatch = useAppDispatch();
  const [, loading] = useProductsSelector();

  const onCancel = () => {
    setOpen(false);
  };

  const onFinish: FormProps<ProductFieldType>["onFinish"] = async (product) => {
    if (!isEdit) {
      dispatch(addProduct({ quantity: 0, ...product }));
    } else {
      if (data) {
        dispatch(
          updateProduct({ id: data.id, quantity: data.quantity, ...product })
        );
      }
    }
  };

  return (
    <Modal
      destroyOnClose
      footer={null}
      onCancel={onCancel}
      open={open}
      title="Manage Product Details"
    >
      <Form {...layout} onFinish={onFinish} preserve={false}>
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
          <Input defaultValue={isEdit ? data?.barcode : ""} />
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
          <Input defaultValue={isEdit ? data?.productName : ""} />
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
          <Input defaultValue={isEdit ? data?.size : ""} />
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
          <Input defaultValue={isEdit ? data?.costPrice : ""} type="number" />
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
          <Input
            defaultValue={isEdit ? data?.sellingPrice : ""}
            type="number"
          />
        </Form.Item>
        <Form.Item>
          <SubmitButton htmlType="submit" loading={loading} type="primary">
            {isEdit ? "Update Product" : "Add Product"}
          </SubmitButton>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductModal;
