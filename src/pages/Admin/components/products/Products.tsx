import React from "react";
import AddButton from "@components/button/AddButton";
import {
  ContentContainer,
  LayoutContainer,
} from "@components/layout/Layout.styles";
import AdminTitle from "@components/typography/AdminTitle";
import useModal from "@hooks/useModal";

import ProductsModal from "./components/Modal";
import ProductsTable from "./components/Table";

type ProductsProps = object;

const Products: React.FC<ProductsProps> = () => {
  const { isEdit, isOpen, setIsOpen } = useModal();

  const onAddButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <LayoutContainer>
      <ContentContainer>
        <AdminTitle level={2}>Manage Products</AdminTitle>
        <AddButton htmlType="button" onClick={onAddButtonClick} type="primary">
          Add Product
        </AddButton>
        <ProductsModal isEdit={isEdit} open={isOpen} setOpen={setIsOpen} />
        <ProductsTable />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Products;
