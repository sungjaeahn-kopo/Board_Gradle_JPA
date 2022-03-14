import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { BoardBreadcrumb } from "../../components/BoardBreadcrumb";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { Sider } from "../../components/Sider";
import UserSignIn from "../../components/UserSignIn";

export default function SignIn() {
  return (
    <>
      <Layout>
        <NavBar />
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
              <UserSignIn />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
