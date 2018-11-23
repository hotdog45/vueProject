import axios from 'axios';
import https from 'https';
import querystring from 'querystring';
import { Message } from 'element-ui';
import router from '@/router';

// api root
export const API_VERSION = '2.0';
export const apiRoot = `/apis/dfcapi/api/${API_VERSION}`;

const newRquest = axios.create({
  baseURL: apiRoot,
  httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false }),
  transformRequest(params) {
    return querystring.stringify({ data: JSON.stringify(params) });
  },
});

// request interceptor
newRquest.interceptors.request.use(
  (config) => {
    // access token
    const { method } = config;
    // const token = getToken();

    if (method === 'get') {
      config.params = {
        ...config.params,
      };
    } else {
      config.data = {
        ...config.data,
      };
    }

    return config;
  },
  (error) => {
    // Do something with request error
    Promise.reject(error);
  },
);

// respone interceptor
newRquest.interceptors.response.use(
  (response) => {
    const res = response.data;
    const { msg, status } = res;

    if (status !== 0) {
      Message.error(msg);

      // 未登录
      if (status === 122) {
        router.replace('/login');
      } else {
        return Promise.reject(res);
      }
    }

    return res;
  },
  error => Promise.reject(error),
);

newRquest.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default newRquest;
