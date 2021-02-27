import React, { useState } from "react";
import { Table, Space, Modal, Button } from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { deleteUser, editUser } from "../redux/actions/userAction";
import PropTypes from "prop-types";

const ListOfUsers = (props) => {
  console.log("conponent props : ", props);

  // delete modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (record) => {
    props.deleteUser(record.id);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //columns
  const columns = [
    {
      title: "UNIQUE ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
      render: (text) => <a href>{text}</a>,
    },
    {
      title: "Phone Number",
      dataIndex: "phonenumber",
      key: "phonenumber",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },

    {
      title: "Edit",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <a
            href
            onClick={() => {
              props.editUser(record.id);
            }}
          >
            Edit
          </a>
        </Space>
      ),
    },
    {
      title: "Delete",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <a
            href
            // onClick={() => {
            //   props.deleteUser(record.id);
            // }}
          >
            <Button type="primary" onClick={showModal} danger={true}>
              delete
            </Button>
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              onOk={() => handleOk(record)}
              onCancel={handleCancel}
            >
              <p>are you sure to delete this user</p>
            </Modal>
          </a>
        </Space>
      ),
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <Table columns={columns} dataSource={props.users} onChange={onChange} />
  );
};

//redux

ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
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
    deleteUser: (userId) => dispatch(deleteUser(userId)),
    editUser: (userId) => dispatch(editUser(userId)),
  };
}

//connect this component to redux
//connect automatically passes dispatch in if we omit map DispatchtoProps
export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);
