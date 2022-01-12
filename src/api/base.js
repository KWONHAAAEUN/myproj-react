import Axios from 'axios';
import { makeUseAxios } from 'axios-hooks';
import { API_HOST } from 'Constants';

const axiosInstance = Axios.create({
  baseURL: API_HOST,
});

const useApiAxios = makeUseAxios({
  axios: axiosInstance,
});

export { axiosInstance, useApiAxios };
