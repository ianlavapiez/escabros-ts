import React from "react";
import { ButtonProps } from "antd/es/button";

import { SubmitButtonContainer } from "./Button.styles";

const SubmitButton: React.FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <SubmitButtonContainer {...buttonProps}>{children}</SubmitButtonContainer>
  );
};

export default SubmitButton;
