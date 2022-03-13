import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useRouter, withRouter } from "next/router";
import { BoardBreadcrumb } from "../../components/BoardBreadcrumb";
import { NavBar } from "../../components/NavBar";
import { Sider } from "../../components/Sider";

const Detail = () => {
  const router = useRouter();
  console.log("router ::: ", router);
  const boardsJSON = JSON.parse(router.query.boards);
  const { Meta } = Card;
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
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                action={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipisis" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={boardsJSON.title}
                  description={boardsJSON.content}
                />
              </Card>
              {/* <h4>Board Title</h4>
              {router.query.seq} 번 <br></br>
              게시물 제목 : {boardsJSON.title} <br></br>
              게시물 작성자 : {boardsJSON.writer} <br></br>
              게시물 내용 : {boardsJSON.content} <br></br>
              작성일 : {boardsJSON.createDate} <br></br> */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Detail;
