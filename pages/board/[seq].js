import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";
import { BoardBreadcrumb } from "../../components/BoardBreadcrumb";
import BoardDetail from "../../components/BoardDetail";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { Sider } from "../../components/Sider";

const Detail = () => {
  const router = useRouter();
  console.log("router ::: ", router);
  const boardsJSON = JSON.parse(router.query.boards);
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
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <h4>Board Title</h4>
              {router.query.seq} 번 <br></br>
              게시물 제목 : {boardsJSON.title} <br></br>
              게시물 작성자 : {boardsJSON.writer} <br></br>
              게시물 내용 : {boardsJSON.content} <br></br>
              작성일 : {boardsJSON.createDate} <br></br>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Detail;
