/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Card,
  Typography,
  Flex,
  Col,
  Row,
} from 'antd';
import {
  UserOutlined,
  LockOutlined,
  ArrowRightOutlined,
  RightOutlined,
} from '@ant-design/icons';
import ReactLogo from '../../assets/react.svg';

export default function Login() {
  return (
    <Fragment>
      <div className="min-h-screen w-full bg-custom-red flex">
        <div className="container flex justify-center justify-items-center content-center items-center">
          <Card style={{ width: 500 }} bordered={false}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={ReactLogo}
                alt="Logo"
                className="flex items-center w-48 pb-8"
              />
            </div>
            <Form name="normal_login">
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
                style={{ borderBottom: '1px solid white' }}
              >
                <Input
                  prefix={
                    <UserOutlined className="text-custom-white placeholder-custom-white" />
                  }
                  placeholder="Username"
                  bordered={false}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
                style={{ borderBottom: '1px solid white' }}
              >
                <Input
                  prefix={<LockOutlined className="text-custom-white" />}
                  type="password"
                  placeholder="Password"
                  bordered={false}
                />
              </Form.Item>
              <Form.Item>
                <p className="text-left pb-8 text-custom-white">
                  Şifrenizi hatırlamıyor musunuz?
                </p>

                <Button
                  type="text"
                  htmlType="submit"
                  className="text-custom-white"
                  block
                  size="large"
                >
                  <Flex gap="small" align="center" justify="center">
                    <Row>
                      <Col>
                        <span className="text-lg">GİRİŞ YAP</span>
                      </Col>
                      <Col>
                        <RightOutlined
                          className="pt-1 pl-1"
                          style={{ fontSize: '150%' }}
                        />
                      </Col>
                    </Row>
                  </Flex>
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}
