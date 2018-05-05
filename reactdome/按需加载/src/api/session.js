import axios from './index';
// {username,password} = userInfo
export function login(userInfo) {
  return axios.post('/login',userInfo);
}
export function reg(userInfo) {
  return axios.post('/reg', userInfo);
}
// 验证用户信息
export function validate() {
  return axios.get('/validate');
}