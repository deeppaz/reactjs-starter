/* eslint-disable no-unused-vars */
import React from 'react';
import {
  EnvironmentOutlined,
  UserOutlined,
  DeploymentUnitOutlined,
  TeamOutlined,
  LogoutOutlined,
  DashboardOutlined,
  BorderOutlined,
  ExportOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import {
  DEVICE_REPORTS_PATH,
  DEVICE_SETTINGS_PATH,
  ROOT_PATH,
  USER_SETTINGS_PATH,
} from '../../router/Slugs';

const Menus = [
  {
    key: 'dashboard',
    title: 'Dashboard',
    path: ROOT_PATH,
    icon: <DashboardOutlined />,
    subMenu: null,
  },
  {
    key: 'deviceReports',
    title: 'Device Reports',
    path: 'deviceReports',
    icon: <ExportOutlined />,
    subMenu: null,
  },
  {
    key: 'deviceSettings',
    title: 'Device Settings',
    path: 'deviceSettings',
    icon: <BorderOutlined />,
    subMenu: null,
  },
  {
    key: 'userSettings',
    title: 'User Settings',
    path: 'userSettings',
    icon: <SettingOutlined />,
    subMenu: null,
  },
];

export default Menus;
