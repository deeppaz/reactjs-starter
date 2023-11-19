/* eslint-disable no-unused-vars */
import React, { Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Layout, theme } from 'antd';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../../pages/dashboard/Dashboard';
import Pages from '../../router/index';
const { Content } = Layout;

export default function CustomContent({ content }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Fragment>
      <Content
        style={{
          margin: '24px 16px 0',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
          }}
        >
          <Routes>
            {Pages.map(({ path, component: Component = Fragment }) => (
              <Route key={path} path={path} element={<Component />} exact />
            ))}
          </Routes>
        </div>
      </Content>
    </Fragment>
  );
}

CustomContent.propTypes = {
  content: PropTypes.array,
};
