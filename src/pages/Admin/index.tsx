import React, { useState } from "react";
import {
  CodeSandboxOutlined,
  HeartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Dropdown from "antd/es/dropdown";
import Layout from "antd/es/layout";
import Menu, { MenuProps } from "antd/es/menu";
import Title from "antd/es/typography/Title";

import { medicineCategories, productCategories } from "./constants";

import MedicineInventory from "./components/medicine-inventory/MedicineInventory";
import Medicines from "./components/medicines/Medicines";
import PasswordModal from "./components/password-modal/PasswordModal";
import ProductInventory from "./components/product-inventory/ProductInventory";
import Products from "./components/products/Products";
import UserProfileModal from "./components/user-profile-modal/UserProfileModal";

import {
  HeaderContainer,
  LayoutContainer,
  UserButtonContainer,
} from "./AdminPage.styles";

const { Sider } = Layout;

type AdminProps = object;

const Admin: React.FC<AdminProps> = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [isManagePasswordOpen, setIsManagePasswordOpen] = useState(false);
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

  //   <Menu>
  //   <Menu.Item onClick={() => setIsUserProfileVisible(true)}>
  //     Profile Settings
  //   </Menu.Item>
  //   <Menu.Item onClick={() => setIsManagePasswordVisible(true)}>
  //     Change Password
  //   </Menu.Item>
  //   <Menu.Item onClick={() => {}}>Sign Out</Menu.Item>
  // </Menu>

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <p>Profile Settings</p>,
    },
    {
      key: "2",
      label: <p>Change Password</p>,
    },
    {
      key: "3",
      label: <p>Sign Out</p>,
    },
  ];

  return (
    <LayoutContainer>
      <HeaderContainer className="header">
        <Title
          style={{
            color: "white",
          }}
          level={3}
        >
          Escabros Pharmacy
        </Title>
        <Dropdown menu={{ items }}>
          <UserButtonContainer
            style={{
              backgroundColor: "#0ab99d",
              color: "white",
              width: 150,
            }}
            icon={<SettingOutlined />}
          >
            Admin
          </UserButtonContainer>
        </Dropdown>
      </HeaderContainer>
      <Layout>
        <Sider width={230}>
          <Menu
            defaultSelectedKeys={["medicines"]}
            defaultOpenKeys={["medicines"]}
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.SubMenu
              key="medicines"
              icon={<HeartOutlined />}
              title="Medicines"
            >
              {medicineCategories.map((medicine) => (
                <Menu.Item
                  key={medicine}
                  onClick={() => setSelectedKey(medicine)}
                >
                  {medicine}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
            <Menu.SubMenu
              key="products"
              icon={<CodeSandboxOutlined />}
              title="Products"
            >
              {productCategories.map((product) => (
                <Menu.Item
                  key={product}
                  onClick={() => setSelectedKey(product)}
                >
                  {product}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          </Menu>
        </Sider>
        {selectedKey === "Manage Medicines" && <Medicines />}
        {selectedKey === "Medicine Inventory" && <MedicineInventory />}
        {selectedKey === "Manage Products" && <Products />}
        {selectedKey === "Product Inventory" && <ProductInventory />}
        <UserProfileModal
          open={isUserProfileOpen}
          setOpen={setIsUserProfileOpen}
        />
        <PasswordModal
          open={isManagePasswordOpen}
          setOpen={setIsManagePasswordOpen}
        />
      </Layout>
    </LayoutContainer>
  );
};

export default Admin;
