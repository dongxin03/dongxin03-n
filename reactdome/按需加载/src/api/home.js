import axios from  './index.js';

// 获取轮播图的方法
export function getSlider() {
  return axios.get('/slider');
}

export function getLesson(offset,limit,type) {
  return axios.get(`/list?offset=${offset}&limit=${limit}&type=${type}`);
}