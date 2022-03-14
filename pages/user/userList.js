import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { BoardBreadcrumb } from "../../components/BoardBreadcrumb";
import { NavBar } from "../../components/NavBar";
import { Sider } from "../../components/Sider";
import User from "../../components/User";
import { useRouter } from "next/router";

const UserList = () => {
  const router = useRouter();
  return (
    <>
      <Layout>
        <NavBar routerPath={[router.pathname]} />
        <Layout>
          <Sider />
          <Layout style={{ padding: "0 24px 24px" }}>
            <BoardBreadcrumb />
            <Content
              className="site-layout-background"
              style={{
                padding: 30,
                margin: 0,
                minHeight: 280,
              }}
            >
              <User />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default UserList;
