import axios from 'axios';
import Constants from '../constants';
import endpoints from '../constants/endpoints';
import { getHeaders } from '../utilities';

export async function getAll(endpoint, headers) {
  try {
    if (headers) {
      const { data: { data } } = await axios.get(`${Constants.DEFAULT_API}${endpoint}`, headers);
      return data;
    }
    const { data: { data } } = await axios.get(`${Constants.DEFAULT_API}${endpoint}`);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getOneBlog(endpoint, id) {
  try {
    const { data: { data, comments, likes } } = await axios.get(`${Constants.DEFAULT_API}${endpoint}/${id}`);
    return { ...data, comments, likes };
  } catch (error) {
    console.error(error);
    return {};
  }
}
export async function add(endpoints_, dataToAdd, headers) {
  if (headers) {
    const { data: { data } } = await axios.post(`${Constants.DEFAULT_API}${endpoints_}`, dataToAdd, headers);
    return data;
  }
  const { data: { data } } = await axios.post(`${Constants.DEFAULT_API}${endpoints_}`, dataToAdd);
  return data;
}
export async function update(endpoints_, dataToAdd, headers) {
  const { data: { data } } = await axios.patch(`${Constants.DEFAULT_API}${endpoints_}`, dataToAdd, headers);
  return data;
}
export async function deleteItem(endpoints_, headers) {
  const { data: { data } } = await axios.delete(`${Constants.DEFAULT_API}${endpoints_}`, headers);
  return data;
}
export async function logout() {
  const { data } = await axios.post(`${Constants.DEFAULT_API}${endpoints.LOGOUT}`, {}, getHeaders());
  return data;
}
