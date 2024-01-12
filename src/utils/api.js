import axios from "axios";
import _ from "lodash";

let API_URL = 'https://restcountries.com/v3.1'

const url = (path, params) => {
  const sections = path.split(":");
  const sectionsWithParams = sections.map((section) =>
    _.startsWith(section, "/") ? section : params[section]
  );
  const pathWithParams = sectionsWithParams.join("");
  return API_URL + pathWithParams;
};

const apiService = axios.create({});

export const get = (path, params = {}) =>
  apiService.get(url(path, params), { params });

export const post = (path, params = {}) =>
  apiService.post(url(path, params), params);

export const put = (path, params = {}) =>
  apiService.put(url(path, params), params);

export const deleteRequest = (path, params = {}) =>
  apiService.delete(url(path, params), { params });

apiService.interceptors.request.use((request) => {
  return request;
});

apiService.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error, "Error in API");
    return Promise.reject(error);
  }
);
