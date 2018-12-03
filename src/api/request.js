import axios from 'axios';
import https from 'https';
// api root
export const apiRoot = `/apis/loan-market-cps/`;//cxwap


var newRquest = axios.create({
  baseURL: apiRoot,
  httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false }),
  transformRequest(params) {

    return JSON.stringify(params);
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
      console.log('msg', msg);
    }

    return res;
  },
  error => Promise.reject(error),
);
newRquest.defaults.headers.post['Content-Type'] = 'application/json';

export default newRquest;
