import React, { useState, useEffect } from "react";
import axios from "axios";
import shortid from "shortid";

//import Item from "antd/lib/list/Item";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/userAction";

import "antd/dist/antd.css";
import { Form, Input, Button, Layout, Select, Upload, message } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;
const { Dragger } = Upload;

// for layout
const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 5,
  },
};

const ModifyUses = (props) => {
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
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  //--------------------------------------------------------

  const onFinish = ({ username, phonenumber, country, email }) => {
    props.addUser({
      id: shortid.generate(),
      username,
      phonenumber,
      country,
      email,
    });
    //console.log("Success:", username, phonenumber, country, email);
    //console.log("props :", props);
    //console.log(props.users);
    localStorage.setItem("users", JSON.stringify(props.users));
    let users = localStorage.getItem("users");
    console.log(JSON.parse(users));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Layout className="site-layout">
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
                  {
                    min: 8,
                    message: "min character 12",
                  },
                  {
                    max: 16,
                    message: "max character 16",
                  },
                  {
                    whitespace: true,
                    message: "whitespace is not allaowed",
                  },
                ]}
              >
                <Input placeholder="user name" />
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
                <Input type="number" placeholder="phone number" />
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
                <Input type="email" placeholder="email" />
              </Form.Item>
              {/*------------------------------------------------------------------ */}

              <Form.Item
                name="country"
                label="country"
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
              <Form.Item label="Dragger">
                <Form.Item
                  name="dragger"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                >
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
              {/*------------------------------------------------------------------ */}
              <Form.Item label="brief" name="brief">
                <TextArea
                  showCount={true}
                  maxLength={100}
                  minLength={10}
                  placeholder="brief"
                />
              </Form.Item>

              {/*------------------------------------------------------------------ */}

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  save
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

//redux

ModifyUses.propTypes = {
  users: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired,
};

//what part of space we expose to our component
function mapStateToProps(state) {
  return {
    users: state.user,
  };
}
function mapDispatchToProps(dispatch) {
  //console.log(props);
  return {
    addUser: (data) => dispatch(addUser(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyUses);
