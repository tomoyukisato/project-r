import React from "react";
import { Breadcrumb } from "antd";
import useBreadcrumbs from 'use-react-router-breadcrumbs'

export const BreadcrumbComponent = () => {
    const breadcrumbs = useBreadcrumbs();
    console.log(breadcrumbs);
    return (
    <Breadcrumb style={{ margin: '8px 0' }}>
            {breadcrumbs.map(({match, breadcrumb}, index) =>{
                return (
                    <Breadcrumb.Item key={index} href={match.pathname}>
                        {index > 0 }{breadcrumb}
                    </Breadcrumb.Item>
                )
            })}
    </Breadcrumb>
    );
};