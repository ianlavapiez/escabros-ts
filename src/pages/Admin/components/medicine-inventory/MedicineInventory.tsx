import React from "react";
import AddButton from "@components/button/AddButton";
import {
  ContentContainer,
  LayoutContainer,
} from "@components/layout/Layout.styles";
import AdminTitle from "@components/typography/AdminTitle";
import useModal from "@hooks/useModal";

import MedicineInventoryModal from "./components/Modal";
import MedicineInventoryTable from "./components/Table";

type MedicineInventoryProps = object;

const MedicineInventory: React.FC<MedicineInventoryProps> = () => {
  const { isOpen, isEdit, setIsOpen } = useModal();

  const onAddButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <LayoutContainer>
      <ContentContainer>
        <AdminTitle level={2}>Manage Medicine Inventory</AdminTitle>
        <AddButton htmlType="button" onClick={onAddButtonClick} type="primary">
          Add Medicine Stock
        </AddButton>
        <MedicineInventoryModal
          isEdit={isEdit}
          open={isOpen}
          setOpen={setIsOpen}
        />
        <MedicineInventoryTable />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default MedicineInventory;
