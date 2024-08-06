import React, { useEffect, useState } from "react";

import AddButton from "components/button/AddButton";
import {
  ContentContainer,
  LayoutContainer,
} from "components/layout/Layout.styles";
import AdminTitle from "components/typography/AdminTitle";
import { useProductsSelector } from "features/products/productsSelector";
import { clearSuccessMessage } from "features/products/productsSlice";
import { useAppDispatch } from "hooks/useDispatchSelector";
import useModal from "hooks/useModal";
import useNotification from "hooks/useNotification";
import { Product } from "types/products";

import ProductsModal from "./components/Modal";
import ProductsTable from "./components/Table";

type ProductsProps = object;

const Products: React.FC<ProductsProps> = () => {
  const dispatch = useAppDispatch();
  const { isEdit, isOpen, setIsEdit, setIsOpen } = useModal();

  const { contextHolder, openNotification } = useNotification();
  const [error, , , successMessage] = useProductsSelector();
  const [data, setData] = useState<Product | null>(null);

  const onAddButtonClick = () => setIsOpen(true);

  const onEditLinkClick = () => {
    setIsEdit(true);
    setIsOpen(true);
  };

  useEffect(() => {
    if (error) {
      openNotification(error, "Something went wrong!", "error");
    }
  }, [error, openNotification]);

  useEffect(() => {
    if (successMessage) {
      openNotification(successMessage, "Success!", "success");
      dispatch(clearSuccessMessage());
      setIsOpen(false);
    }

    // eslint-disable-next-line
  }, [successMessage]);

  return (
    <LayoutContainer>
      {contextHolder}
      <ContentContainer>
        <AdminTitle level={2}>Manage Products</AdminTitle>
        <AddButton htmlType="button" onClick={onAddButtonClick} type="primary">
          Add Product
        </AddButton>
        <ProductsModal
          data={data}
          isEdit={isEdit}
          open={isOpen}
          setOpen={setIsOpen}
        />
        <ProductsTable onEditLinkClick={onEditLinkClick} setData={setData} />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Products;
