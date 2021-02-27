import React from "react";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import "./landingPage.css";
import { Layout, Menu } from "antd";

const { Header } = Layout;
class LandingPage extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/ListOfUsers">users</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/ModifyUses">modify user</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}

export default LandingPage;
//<Link to="/ListOfUsers">users</Link>
// <Link to="/ModifyUses">modify user</Link>
