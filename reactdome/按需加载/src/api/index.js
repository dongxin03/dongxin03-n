import axios from 'axios';
// 配置环境 是上线还是开发 webpack.DefinePlugin
axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.response.use(function (response) {
  return response.data;
});
axios.defaults.withCredentials = true;

export default axios;
