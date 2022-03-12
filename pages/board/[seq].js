import { Layout } from "antd";
import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";
import BoardDetail from "../../components/BoardDetail";
import { Header } from "../../components/Header";

const Detail = () => {
  const router = useRouter();
  console.log("router ::: ", router);
  return <>{router.query.seq} 번 게시물</>;
};

export default Detail;
