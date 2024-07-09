import React from "react";
import { ButtonProps } from "antd/es/button";

import { AddButtonContainer } from "./Button.styles";

const AddButton: React.FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return <AddButtonContainer {...buttonProps}>{children}</AddButtonContainer>;
};

export default AddButton;
