import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { Layout, Spin, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider, Content } = Layout;
import qs from 'qs';

import Header from './layouts/header'
// import Footer from './layouts/footer'
import Markdown from "./components/markdown"

import style from './style.scss'

class Routes extends Component {

  render() {
    return (
      <Layout style={{"height": "100vh"}}>
        <Header />
          <layout style={{"display": "flex", "height": "100%", "background": "#ffffff"}}>
              <Sider>
                  <Menu
                      mode="inline"
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      style={{ height: '100%', borderRight: 0}}
                  >
                      <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                          <Menu.Item key="1">option1</Menu.Item>
                          <Menu.Item key="2">option2</Menu.Item>
                          <Menu.Item key="3">option3</Menu.Item>
                          <Menu.Item key="4">option4</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                          <Menu.Item key="5">option5</Menu.Item>
                          <Menu.Item key="6">option6</Menu.Item>
                          <Menu.Item key="7">option7</Menu.Item>
                          <Menu.Item key="8">option8</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                          <Menu.Item key="9">option9</Menu.Item>
                          <Menu.Item key="10">option10</Menu.Item>
                          <Menu.Item key="11">option11</Menu.Item>
                          <Menu.Item key="12">option12</Menu.Item>
                      </SubMenu>
                  </Menu>
              </Sider>
              <Content style={{"padding": "20px"}}>
                  <Switch>
                      <Route exact path="/" component={Markdown} />
                  </Switch>
              </Content>
          </layout>
        {/*<Footer/>*/}
      </Layout>
    )
  }
}

export default Routes;