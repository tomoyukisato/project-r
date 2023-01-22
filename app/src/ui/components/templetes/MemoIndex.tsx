// import { Pagination } from '@mui/material';
import React from 'react';
import MemoList from '../organisms/MemoList';

import { Button, Col, Layout, Row, theme } from 'antd';
import { BreadcrumbComponent } from '../molecles/Breadcrumb';
import { PlusOutlined } from '@ant-design/icons';

const { Content } = Layout;

export const MemoIndex = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
    <Content style={{ padding: '0 50px' }}>
        <Row>
            <Col>
                <BreadcrumbComponent  />
            </Col>
            <Col className='new-button'>
                <Button type="primary" icon={<PlusOutlined />}>New</Button>
            </Col>
        </Row>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
            <MemoList/>
        </div>
    </Content>
    )
};