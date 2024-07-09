import React from "react";
import { TitleProps } from "antd/es/typography/Title";
import { AdminTitleContainer } from "./Typography.styles";

const AdminTitle: React.FC<TitleProps> = ({ children, ...titleProps }) => {
  return <AdminTitleContainer {...titleProps}>{children}</AdminTitleContainer>;
};

export default AdminTitle;
