/* eslint-disable no-useless-escape */
// 合法uri
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

// 小写字母
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

// 大写字母
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

// 大小写字母
export function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

// phone
export function validatePhone(phone) {
  const reg = /^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[0-9])[0-9]{8}$/;
  return reg.test(phone);
}

// 身份证
export function validateIDCard(phone) {
  const reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
  return reg.test(phone);
}

// 图片
export function validateImageFile(url) {
  const reg = /^.*?(gif|jpg|jpeg|png)$/;
  return reg.test(url);
}

// 音频
export function validateAudioFile(url) {
  const reg = /^.*?(mp3|wma)$/;
  return reg.test(url);
}

export function validateExcel(url) {
  const reg = /^.*?(xls|xlsx)$/;
  return reg.test(url);
}

export function validateWord(url) {
  const reg = /^.*?(doc|docx)$/;
  return reg.test(url);
}

export function validatePpt(url) {
  const reg = /^.*?(ppt|pptx)$/;
  return reg.test(url);
}

export function validateVideo(url) {
  const reg = /^.*?(avi|rmvb|rm|asf|divx|mpg|mpeg|mpe|wmv|mp4|mkv|vob)$/;
  return reg.test(url);
}

export function validateCad(url) {
  const reg = /^.*?(dwt|dwg|dws|dxf)$/;
  return reg.test(url);
}

export function validateZip(url) {
  const reg = /^.*?(rar|zip|arj|z|gz)$/;
  return reg.test(url);
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}
