import client from './common/HTTP';
import { Endpoints } from './Endpoints';

const getListUsers = (page) => {
  return client.get(`${Endpoints.ListUsers}?page=${page}`);
};

const getListSingleUser = (user) => {
  return client.get(`${Endpoints.ListUsers}${user}`);
};

const createUser = (body) => {
  return client.post(`${Endpoints.Users}`, body);
};
const updateUser = (body) => {
  return client.put(`${Endpoints.Users}`, body);
};

const deleteUser = (id) => {
  return client.delete(`${URL.DeleteCampaign}/${id}`);
};

const services = {
  getListUsers,
  getListSingleUser,
  createUser,
  updateUser,
  deleteUser,
};

export default services;
