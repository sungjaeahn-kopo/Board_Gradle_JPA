import { Layout } from "antd";
import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";
import BoardDetail from "../../components/BoardDetail";
import { Header } from "../../components/Header";

const Detail = () => {
  const router = useRouter();
  console.log("router ::: ", router);
  const boardsJSON = JSON.parse(router.query.boards);
  return (
    <>
      <h4>Board Title</h4>
      {router.query.seq} 번 <br></br>
      게시물 제목 : {boardsJSON.title} <br></br>
      게시물 작성자 : {boardsJSON.writer} <br></br>
      게시물 내용 : {boardsJSON.content} <br></br>
      작성일 : {boardsJSON.createDate} <br></br>
    </>
  );
};

export default Detail;
