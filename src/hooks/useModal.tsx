import { useState } from "react";

const useModal = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return {
    isEdit,
    isOpen,
    setIsEdit,
    setIsOpen,
  };
};

export default useModal;
