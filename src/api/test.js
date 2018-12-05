import request from './request';
import axios from 'axios';
import qs from 'qs'
let base = '/apis/loan-market-cps/';

let headers = {headers: {"Content-Type": "multipart/form-data",'token':window.localStorage.token}}

let headers1 = {headers: {'Content-Type':'application/json; charset=utf-8','token':window.localStorage.token}}
let headers2 = {headers: {"Content-Type": "X-WWW-FORM-URLENCODED",'token':window.localStorage.token}}

//test
export function getCountPageload(params) {
  return request.post('h5/countPageload', params);
}
export function getCheckPhone(phone,code) {
  return request.post('user/checkPhone?phone='+phone+"&code="+code);
}
export const getCheckPhone2 = params =>{
  return axios.post(`${base}/user/checkPhone`, qs.stringify(params),headers1)
}
