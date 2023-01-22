import React, { useEffect, useState } from "react";
import { List } from 'antd';
import { memoAPI } from "../../../features/apis/memoAPI";
import { Memo } from "../../../features/models/Memo";
import { FormOutlined } from "@ant-design/icons";

// interface Memo {
//     id: number;
//     title: string;
//     body: string;
// }

// interface MemoListProps {
//     memo: Memo[];
// }


function MemoList(){
    const [memos, setMemos] = useState<Memo[]>([]);
    const [currentPage] = useState(1);

    useEffect(() => {
        async function loadingMemo(){
            try{
                const data = await memoAPI.getList(currentPage);
                if(currentPage === 1){
                    console.log("T");
                    console.log(data);
                    setMemos(data);
                } else {
                    console.log("F");
                    setMemos((memos)=> [...memos, ...data])
                }
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
    }, [currentPage]);
    console.log("2");
    console.log(memos);
    // const items = ;
    return (
        <List
        itemLayout="horizontal"
        dataSource={memos}
        renderItem={(item) => (
        <List.Item
            actions={[<a key="list-loadmore-edit" href="https://ant.design"><FormOutlined /></a>, <a key="list-loadmore-more" href="https://ant.design">more</a>]}
        >
            <List.Item.Meta
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href={'./memo/'+ item.id }>{item.title}</a>}
            description={item.body}
            />
        </List.Item>
        )}
        />
    );
    // <div>{
    //     memos.map(m => (
    //         <div key={m.id} className="cols-sm">
    //             <div>{m.title}</div>
    //         </div>
    //     ))
    // }</div>
};

export default MemoList;