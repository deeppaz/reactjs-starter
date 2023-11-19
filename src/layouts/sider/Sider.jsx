/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { Avatar, Flex, Layout, Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Menus from '../../helpers/menu/Menus';
const { Sider } = Layout;
import AvatarExample from '../../assets/avatar.png';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  {
    type: 'divider',
  },
  getItem('Logout', 'logout', <LogoutOutlined />),
];
export default function CustomSider() {
  return (
    <Fragment>
      <Sider
        width={250}
        className="shadow-xl"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="flex flex-row justify-center">
          <Avatar
            size={{ xs: 65, sm: 65, md: 65, lg: 64, xl: 65, xxl: 100 }}
            icon={<img src={AvatarExample} />}
            className="m-3 basis-1/4"
          />
          <span className="basis-1/2 text-custom-white self-center font-semibold">
            Aria Arias Durak
          </span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          items={Menus.map((e) => ({
            key: e.key,
            label: <Link to={e.path}>{e.title}</Link>,
            icon: e.icon,
          }))}
        />
        <div className="place-content-end h-96">
          <Menu
            className="pb-3"
            theme="dark"
            mode="inline"
            items={items}
            style={{
              position: 'absolute',
              bottom: 0,
              zIndex: 1,
              transition: 'all 0.2s',
            }}
          />
        </div>
      </Sider>
    </Fragment>
  );
}
