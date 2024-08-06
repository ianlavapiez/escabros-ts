import React, { useEffect, useState } from "react";

import {
  ContentContainer,
  LayoutContainer,
} from "components/layout/Layout.styles";
import AddButton from "components/button/AddButton";
import AdminTitle from "components/typography/AdminTitle";
import { useMedicinesSelector } from "features/medicines/medicinesSelector";
import { clearSuccessMessage } from "features/medicines/medicinesSlice";
import { useAppDispatch } from "hooks/useDispatchSelector";
import useModal from "hooks/useModal";
import useNotification from "hooks/useNotification";
import { Medicine } from "types/medicines";

import MedicineModal from "./components/Modal";
import MedicineTable from "./components/Table";

type MedicinesProps = object;

const Medicines: React.FC<MedicinesProps> = () => {
  const dispatch = useAppDispatch();
  const { isEdit, isOpen, setIsEdit, setIsOpen } = useModal();
  const { contextHolder, openNotification } = useNotification();
  const [error, , , successMessage] = useMedicinesSelector();
  const [data, setData] = useState<Medicine | null>(null);

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
        <AdminTitle level={2}>Manage Medicines</AdminTitle>
        <AddButton htmlType="button" onClick={onAddButtonClick} type="primary">
          Add Medicine
        </AddButton>
        <MedicineModal
          data={data}
          isEdit={isEdit}
          open={isOpen}
          setOpen={setIsOpen}
        />
        <MedicineTable onEditLinkClick={onEditLinkClick} setData={setData} />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Medicines;
