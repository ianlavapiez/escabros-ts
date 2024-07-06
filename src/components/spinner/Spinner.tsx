import React from "react";
import Spin, { SpinProps } from "antd/es/spin";
import { SpinnerContainer } from "./Spinner.styles";

const Spinner: React.FC<SpinProps> = () => {
  return (
    <SpinnerContainer>
      <Spin size="large" />
    </SpinnerContainer>
  );
};

export default Spinner;
