import React, { Component, useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import Boards from "./Boards";
import PostBoard from "./PostBoard";
import { useRouter } from "next/router";
import Item from "antd/lib/list/Item";
import User from "./User";
import SignIn from "./SignIn";
import BoardDetail from "./BoardDetail";
import { NavBar } from "./NavBar";
import { Sider } from "./Sider";
import { BoardBreadcrumb } from "./BoardBreadcrumb";
import { Home } from "./Home";

export const Header = () => {
  // layout by antd
  const { SubMenu } = Menu;
  const { Content } = Layout;
  const router = useRouter();

  const showComponent = () => {
    console.log("show Component", router.pathname);
    if (router.pathname === "/board/list") return <Boards />;
    else if (router.pathname === "/board/save") return <PostBoard />;
    else if (router.pathname === "/user/userList") return <User />;
    else if (router.pathname === "/user/signIn") return <SignIn />;
    else if (router.pathname === "/board/") return <BoardDetail />;
    else return <Home />;
  };

  return (
    <Layout>
      <NavBar routerPath={[router.pathname]} />
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
            {showComponent()}
          </Content>
        </Layout>
      </Layout>
    </Layout>
    // mountNode,
    // <div className='header'>
    //     <h1>Next.js with NodeJS</h1>
    //     <div>
    //         <Box sx={{ width : '100%' }}>
    //             <Box sx={{ borderBottom : 1, borderColor : 'divider' }}>
    //                 <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    //                     <Tab label="Home" {...a11yProps(0)} />
    //                     <Tab label="BoardList" {...a11yProps(1)} />
    //                     <Tab label="BoardPost" {...a11yProps(2)} />
    //                 </Tabs>
    //             </Box>
    //             <TabPanel value={value} index={0}>
    //                 Home
    //             </TabPanel>
    //             <TabPanel value={value} index={1} onChange={<Link href="/board/list"></Link>}>
    //                 BoardList
    //             </TabPanel>
    //             <TabPanel value={value} index={2}>
    //                 BoardPost
    //             </TabPanel>
    //         </Box>

    //         <ul>
    //             <li><Link href="/">Home</Link></li>
    //             <li><Link href="/board/list">BoardList</Link></li>
    //             <li><Link href="/board/save">BoardPost</Link></li>
    //         </ul>
    //     </div>
    // </div>
  );
};
