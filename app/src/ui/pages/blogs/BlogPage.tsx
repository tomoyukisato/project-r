import * as React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import './BlogPage.css';

// import { Theme, IconButton, AppBar, Toolbar, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';
// import { makeStyles, createStyles, createTheme } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/styles";
// import { teal } from "@material-ui/core/colors";
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Layout, theme } from 'antd';

const { Header, Sider } = Layout;

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
  
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
  
        // children: new Array(4).fill(null).map((_, j) => {
        //   const subKey = index * 4 + j + 1;
        //   return {
        //     key: subKey,
        //     label: `option${subKey}`,
        //   };
        // }),
      };
    },
  );

export const BlogPage: React.FC = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
    <Layout className="layout">
        <Header>
          <div className="logo" />
        </Header>
        <Layout style={{ height: "calc(100vh - 64px)" }}>
            <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
            />
            </Sider>
            <Layout>
                <Outlet />
            </Layout>
        </Layout>
    </Layout>
  
    )
}