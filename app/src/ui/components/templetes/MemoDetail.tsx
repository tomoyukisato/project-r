// import { Pagination } from '@mui/material';
import React from 'react';
import MemoPreview from '../organisms/MemoPreview';

import { Button, Divider, Layout, Space, theme } from 'antd';
import { BreadcrumbComponent } from '../molecles/Breadcrumb';
import { useParams } from 'react-router-dom';
import { SearchOutlined, StepBackwardOutlined } from '@ant-design/icons';
const { Content } = Layout;

export const MemoDetail = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    const params = useParams<{memoId: string}>();
    console.log("params");
    console.log(params.memoId);
    return (
        <>
            <Content style={{ padding: '0 50px' }}>
                <BreadcrumbComponent  />
                <div className="site-layout-content" >
                    <MemoPreview id={params.memoId}/>
                </div>
                <Space.Compact block>
                    <Button icon={<StepBackwardOutlined />}>
                        Back
                    </Button>
                </Space.Compact>
            </Content>
        </>
    )
};