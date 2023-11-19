/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react';
import services from '../../services/Services';

const Dashboard = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    listUsers();
  }, []);

  const listUsers = () => {
    services.getListUsers(2).then((res) => {
      setUsers(res.data.data);
    });
  };

  return (
    <Fragment>
      <h1>Dashboard</h1>
    </Fragment>
  );
};
export default Dashboard;
