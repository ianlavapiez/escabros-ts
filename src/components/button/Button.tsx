import React from "react";
import { ButtonProps } from "antd/es/button";
import clsx from "clsx";

import { ButtonContainer } from "./Button.styles";

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <ButtonContainer className={clsx(className)} {...buttonProps}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
