import React from "react";
import {
  ContentContainer,
  LayoutContainer,
} from "@components/layout/Layout.styles";
import AddButton from "@components/button/AddButton";
import AdminTitle from "@components/typography/AdminTitle";
import useModal from "@hooks/useModal";

import MedicineModal from "./components/Modal";
import MedicineTable from "./components/Table";

type MedicinesProps = object;

const Medicines: React.FC<MedicinesProps> = () => {
  const { isEdit, isOpen, setIsOpen } = useModal();

  const onAddButtonClick = () => setIsOpen(true);

  return (
    <LayoutContainer>
      <ContentContainer>
        <AdminTitle level={2}>Manage Medicines</AdminTitle>
        <AddButton htmlType="button" onClick={onAddButtonClick} type="primary">
          Add Medicine
        </AddButton>
        <MedicineModal isEdit={isEdit} open={isOpen} setOpen={setIsOpen} />
        <MedicineTable />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Medicines;
