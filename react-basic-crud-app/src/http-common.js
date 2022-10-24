// used AXIOS for API calls
import axios from "axios";

export const BASE_URL = 'http://localhost:3001/api/v1';
const headers = {
  "Content-type": "application/json"
};
// for POST API call
export const _post = (payload, url) => {
  return axios.post(`${BASE_URL}/${url}`, payload, headers)
}
// for GET API call
export const _get = (url) => {
  return axios.get(`${BASE_URL}/${url}`)
}
// for PUT/UPDATE API call
export const _put = (payload, url) => {
  return axios.put(`${BASE_URL}/${url}`, payload, headers)
}
// for DELETE API call
export const _delete = (url) => {
  return axios.delete(`${BASE_URL}/${url}`)
}
