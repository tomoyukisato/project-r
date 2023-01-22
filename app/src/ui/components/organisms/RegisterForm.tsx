import { Button, Descriptions, Form, Input, Space, theme } from "antd";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { RequiredMark } from "antd/es/form/Form";
import { CheckCircleOutlined, PlayCircleOutlined, StepBackwardOutlined } from "@ant-design/icons";

type FormInput = {
    title: string;
    body: string;
};  

export default function RegisterForm() {
    const [form] = Form.useForm();
    // const { register, handleSubmit } = useForm<FormInput>();

    const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {id, value} = e.target;
        if (id === "title") {
            setTitle(value);
        }
        if (id === "body") {
            setBody(value);
        }

    }
    const handleSubmit = () => {
        console.log(title + body);
    }
    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={{ requiredMarkValue: requiredMark }}
            requiredMark={requiredMark}
            >
            <Form.Item label="Title" required tooltip="This is a required field">
                <Input value={title} id="title" onChange={(e) => handleInputChange(e)} placeholder="please input title" />
            </Form.Item>
            <Form.Item label="Body" required tooltip="マークダウン形式で入力してください。">
                <Input.TextArea value={body} id="body" onChange={(e) => handleInputChange(e)} />
            </Form.Item>
            <div className="control-button-container" style={{ textAlign: 'center' }}>
                <div className="background"></div>
                <Space className="control-button" wrap>
                    <Button icon={<StepBackwardOutlined />}>Back</Button>
                    <Button type="dashed" icon={<PlayCircleOutlined />}>Preview</Button>
                    <Button type="primary" onClick={()=>handleSubmit()} icon={<CheckCircleOutlined />}>OK</Button>
                </Space>
            </div>
                
        </Form>
    );
};