import request from './request';

//test
export function getCountPageload(params) {
  return request.post('h5/countPageload', params);
}
