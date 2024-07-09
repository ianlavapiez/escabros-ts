import React from "react";
import AddButton from "@components/button/AddButton";
import {
  ContentContainer,
  LayoutContainer,
} from "@components/layout/Layout.styles";
import AdminTitle from "@components/typography/AdminTitle";
import useModal from "@hooks/useModal";

import ProductInventoryModal from "./components/Modal";
import ProductInventoryTable from "./components/Table";

type ProductInventoryProps = object;

const ProductInventory: React.FC<ProductInventoryProps> = () => {
  const { isEdit, isOpen, setIsOpen } = useModal();

  const onAddButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <LayoutContainer>
      <ContentContainer>
        <AdminTitle level={2}>Manage Product Inventory</AdminTitle>
        <AddButton htmlType="button" onClick={onAddButtonClick} type="primary">
          Add Product Stock
        </AddButton>
        <ProductInventoryModal
          isEdit={isEdit}
          open={isOpen}
          setOpen={setIsOpen}
        />
        <ProductInventoryTable />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default ProductInventory;
