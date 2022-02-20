import Link from 'next/link';
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Breadcrumb, Layout, Menu } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons/lib/icons';

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
    
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//             >
//                 {value === index && (
//                     <Box sx={{ p : 3 }}>
//                         <Typography>{children}</Typography>
//                     </Box>
//                 )}
//             </div>
//     );
// }

// TabPanel.propTypes = {
//     children : PropTypes.node,
//     index : PropTypes.number.isRequired,
//     value : PropTypes.number.isRequired
// };

// function a11yProps(index) {
//     return {
//         id : `simple-tab-${index}`,
//         'aria-controls' : `simple-tabpanel-${index}`
//     };
// }

export const Header = () => {
    // const [value, setValue] = useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    // layout by antd
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;

    return (
        <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">BoardList</Menu.Item>
                        <Menu.Item key="3">BoardPost</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height : '100%', borderRight : 0 }}
                            >
                               <SubMenu key="sub1" icon={<UserOutlined />} title="SubHome">
                                   <Menu.Item key="1">SubHome1</Menu.Item>
                                   <Menu.Item key="2">SubHome2</Menu.Item>
                                   <Menu.Item key="3">SubHome3</Menu.Item>
                                   <Menu.Item key="4">SubHome4</Menu.Item>
                                </SubMenu> 
                               <SubMenu key="sub2" icon={<LaptopOutlined />} title="SubHome2">
                                   <Menu.Item key="5">SubHome5</Menu.Item>
                                   <Menu.Item key="6">SubHome6</Menu.Item>
                                   <Menu.Item key="7">SubHome7</Menu.Item>
                                   <Menu.Item key="8">SubHome8</Menu.Item>
                                </SubMenu> 
                               <SubMenu key="sub3" icon={<NotificationOutlined />} title="SubHome3">
                                   <Menu.Item key="9">SubHome9</Menu.Item>
                                   <Menu.Item key="10">SubHome10</Menu.Item>
                                   <Menu.Item key="11">SubHome11</Menu.Item>
                                   <Menu.Item key="12">SubHome12</Menu.Item>
                                </SubMenu> 
                            </Menu> 
                    </Sider>
                    <Layout style={{ padding : '0 24px 24px' }}>
                        <Breadcrumb style={{ margin : '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding : 24,
                                margin : 0,
                                minHeight : 280,
                            }}
                        >
                            content
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
}