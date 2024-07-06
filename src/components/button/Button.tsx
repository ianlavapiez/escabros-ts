import React from "react";
import { ButtonProps } from "antd";
import clsx from "clsx";

import { ButtonContainer } from "./Button.styles";

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  htmlType,
  loading,
  onClick,
  type,
}) => {
  return (
    <ButtonContainer
      className={clsx(className)}
      disabled={disabled}
      htmlType={htmlType}
      onClick={onClick}
      loading={loading}
      type={type}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
