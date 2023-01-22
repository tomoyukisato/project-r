import { Descriptions, theme } from "antd";
import React, { useEffect, useState } from "react";
import { memoAPI } from "../../../features/apis/memoAPI";
import { Memo } from "../../../features/models/Memo";
import MarkdownPreview from '@uiw/react-markdown-preview';
import Title from "antd/es/typography/Title";


type MemoParamsProps = { id: string | undefined};

export default function MemoPreview(params: MemoParamsProps) {
    const [memo, setMemo] = useState<Memo>();
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      
    useEffect(() => {
        async function loadingMemo(){
            try{
                const data = await memoAPI.get(Number(params.id));
                setMemo(data);
            }
            catch(e){
                if(e instanceof Error){
                    // setError(e.message);
                }
            }
            finally {
            }
        }
        console.log("memos");
        loadingMemo();
    }, [params.id]);
    console.log(memo);
    return (
        <>
            <Title level={3}>Title</Title>
            <div className="site-layout-content" style={{ background: colorBgContainer, padding: "8px" }}>
                <Descriptions layout="horizontal">
                    <Descriptions.Item>
                        <MarkdownPreview source={memo?.title} />
                    </Descriptions.Item>
                </Descriptions>
            </div>
            <Title level={3}>Body</Title>
            <div className="site-layout-content" style={{ background: colorBgContainer, padding: "8px", margin: "0 0 14px 0" }}>
                <Descriptions layout="horizontal">
                    <Descriptions.Item>
                        <MarkdownPreview source={memo?.body} />
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </>
    );
};