/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import { Layout, theme } from 'antd';
const { Header } = Layout;

export default function CustomHeader() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Fragment>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      />
    </Fragment>
  );
}
