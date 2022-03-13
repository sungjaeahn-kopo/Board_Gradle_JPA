import { Layout, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavBar = ({ routerPath }) => {
  const { SubMenu } = Menu;
  const { Header } = Layout;
  const router = useRouter;
  return (
    <>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={["1"]}
          // selectedKeys={[router.pathname]}
          selectedKeys={routerPath}
          // onClick={ChangeMenu}
        >
          <Menu.Item key="/">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/board/list">
            <Link href="/board/list">BoardList</Link>
          </Menu.Item>
          <Menu.Item key="/board/save">
            <Link href="/board/save">BoardPost</Link>
          </Menu.Item>
          <Menu.Item key="/user/userList">
            <Link href="/user/userList">UserList</Link>
          </Menu.Item>
          <Menu.Item key="/user/signIn">
            <Link href="/user/signIn">SignIn</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};
