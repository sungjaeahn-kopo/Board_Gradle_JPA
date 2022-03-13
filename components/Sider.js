import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

export const Sider = () => {
  const { SubMenu } = Menu;
  const { Sider } = Layout;
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="1">SubHome1</Menu.Item>
          <Menu.Item key="2">SubHome2</Menu.Item>
          <Menu.Item key="3">SubHome3</Menu.Item>
          <Menu.Item key="4">SubHome4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="DashBoard">
          <Menu.Item key="5">SubHome5</Menu.Item>
          <Menu.Item key="6">SubHome6</Menu.Item>
          <Menu.Item key="7">SubHome7</Menu.Item>
          <Menu.Item key="8">SubHome8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Notice">
          <Menu.Item key="9">SubHome9</Menu.Item>
          <Menu.Item key="10">SubHome10</Menu.Item>
          <Menu.Item key="11">SubHome11</Menu.Item>
          <Menu.Item key="12">SubHome12</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};
