/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default function CustomFooter() {
  return (
    <Fragment>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Fragment>
  );
}
