import React from "react";
import Form, { FormProps } from "antd/es/form";
import Input from "antd/es/input";
import Modal, { ModalProps } from "antd/es/modal";

import SubmitButton from "components/button/SubmitButton";
import { useMedicinesSelector } from "features/medicines/medicinesSelector";
import {
  addMedicine,
  updateMedicine,
} from "features/medicines/medicinesThunks";
import { useAppDispatch } from "hooks/useDispatchSelector";
import { Medicine } from "types/medicines";
import { layout } from "utils/layout";

type MedicineFieldType = Omit<Medicine, "id" | "quantity"> & {
  id?: Medicine["id"];
};

type MedicineModalProps = Partial<ModalProps> & {
  data: Medicine | null;
  isEdit: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MedicineModal: React.FC<MedicineModalProps> = ({
  data,
  isEdit,
  open,
  setOpen,
}) => {
  const dispatch = useAppDispatch();
  const [, loading] = useMedicinesSelector();

  const onFinish: FormProps<MedicineFieldType>["onFinish"] = async (
    medicine
  ) => {
    if (!isEdit) {
      dispatch(addMedicine({ quantity: 0, ...medicine }));
    } else {
      if (data) {
        dispatch(
          updateMedicine({ id: data.id, quantity: data.quantity, ...medicine })
        );
      }
    }
  };

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      destroyOnClose
      footer={null}
      title="Manage Medicine Details"
      open={open}
      onCancel={onCancel}
    >
      <Form {...layout} onFinish={onFinish} preserve={false}>
        <Form.Item<MedicineFieldType>
          label="Generic Name"
          name="genericName"
          rules={[
            {
              required: true,
              message: "Please input generic name!",
            },
          ]}
        >
          <Input defaultValue={isEdit ? data?.genericName : ""} />
        </Form.Item>
        <Form.Item<MedicineFieldType>
          label="Brand Name"
          name="brandName"
          rules={[
            {
              required: true,
              message: "Please input brand name!",
            },
          ]}
        >
          <Input defaultValue={isEdit ? data?.brandName : ""} />
        </Form.Item>
        <Form.Item<MedicineFieldType>
          label="Dose"
          name="dose"
          rules={[
            {
              required: true,
              message: "Please input dose!",
            },
          ]}
        >
          <Input defaultValue={isEdit ? data?.dose : ""} />
        </Form.Item>
        <Form.Item<MedicineFieldType>
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
        <Form.Item<MedicineFieldType>
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
            {isEdit ? "Update Medicine" : "Add Medicine"}
          </SubmitButton>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MedicineModal;
