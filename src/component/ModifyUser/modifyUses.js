import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Form, Input, Button, Layout, Select, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Item from "antd/lib/list/Item";

const { Header, Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

// for layout
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const ModifyUses = () => {
  //
  // getting countries by  axois
  //
  const [data, setsata] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => setsata(res.data));
  }, []);

  //--------------------------------------------------------
  // upload file
  const [fileList, updateFileList] = useState([]);
  const props = {
    fileList,
    beforeUpload: (file) => {
      if (file.type !== "image/JPG" || file.type !== "image/jpg") {
        message.error(`${file.name} is not a png or jpg file`);
      }
      return file.type === "image/png";
    },
    onChange: (info) => {
      console.log(info.fileList);
      // file.status is empty when beforeUpload return false
      updateFileList(info.fileList.filter((file) => !!file.status));
    },
  };
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  //--------------------------------------------------------

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              {/*------------------------------------------------------------------ */}

              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              {/*------------------------------------------------------------------ */}

              <Form.Item
                label="Phone Number"
                name="phonenumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone Number!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
              {/*------------------------------------------------------------------ */}

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email",
                  },
                ]}
              >
                <Input type="email" />
              </Form.Item>
              {/*------------------------------------------------------------------ */}

              <Form.Item
                name="select"
                label="Select"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please select your country!",
                  },
                ]}
              >
                <Select placeholder="Please select a country">
                  {data &&
                    data.map((item) => (
                      <Option key={item.name} value={item.name}>
                        {item.name}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
              {/*------------------------------------------------------------------ */}

              <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="longgggggggggggggggggggggggggggggggggg"
              >
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Upload png only</Button>
                </Upload>
              </Form.Item>

              {/*------------------------------------------------------------------ */}
              <Form.Item label="brief" name="brief">
                <TextArea showCount={true} maxLength={100} minLength={10} />
              </Form.Item>

              {/*------------------------------------------------------------------ */}

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
              {/*------------------------------------------------------------------ */}
            </Form>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default ModifyUses;
