import React from 'react';
// import MemoPreview from '../organisms/MemoPreview';

import { Button, Divider, Layout, Space, theme } from 'antd';
import { BreadcrumbComponent } from '../molecles/Breadcrumb';
import { useParams } from 'react-router-dom';
import { SearchOutlined, StepBackwardOutlined } from '@ant-design/icons';
import RegisterForm from '../organisms/RegisterForm';
const { Content } = Layout;

export const MemoRegister = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

    return (
        <>
            <Content style={{ padding: '0 50px' }}>
                <BreadcrumbComponent  />
                <div className="site-layout-content" >
                    <RegisterForm />
                </div>
            </Content>
        </>
    )
};