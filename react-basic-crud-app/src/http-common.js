import axios from "axios";

export const BASE_URL = 'http://localhost:3001/api/v1';
const headers = {
  "Content-type": "application/json"
};

export const _post = (payload, url) => {
  return axios.post(`${BASE_URL}/${url}`, payload, headers)
}

export const _get = (url) => {
  return axios.get(`${BASE_URL}/${url}`)
}

export const _put = (payload, url) => {
  return axios.put(`${BASE_URL}/${url}`, payload, headers)
}

export const _delete = (url) => {
  return axios.put(`${BASE_URL}/${url}`)
}
