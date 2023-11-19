/* eslint-disable no-unused-vars */
import React from 'react';
import { Layout } from 'antd';
import CustomSider from './sider/Sider';
import CustomHeader from './header/Header';
import CustomContent from './content/Content';
import CustomFooter from './footer/Footer';

export default function Index() {
  return (
    <Layout className="min-h-screen w-full bg-custom-red flex">
      {/* layout sider */}
      <CustomSider />
      {/* content layout */}
      <Layout>
        <CustomHeader />
        <CustomContent />
        <CustomFooter />
      </Layout>
    </Layout>
  );
}
