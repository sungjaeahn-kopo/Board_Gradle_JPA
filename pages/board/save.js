import PostBoard from "../../components/PostBoard";
import { Layout } from "antd";
import { NavBar } from "../../components/NavBar";
import { Sider } from "../../components/Sider";
import { BoardBreadcrumb } from "../../components/BoardBreadcrumb";
import { Content } from "antd/lib/layout/layout";
import { useRouter } from "next/router";

export default function SaveBoard() {
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
              <PostBoard />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
