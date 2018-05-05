import * as Types from '../action-types';
import history from '../../history'
import { login, reg, validate } from '../../api/session';
let actions = {
  setLogin(userInfo) {
    // 登录 dispatch(SET_USER_INFO)
    return (dispatch) => {
      login(userInfo).then(data => {
        dispatch({ type: Types.SET_USER_INFO, ...data });
        if (data.error == 0) {
          history.push('/profile');
        }
      })
    }
  },
  setValidate() {
    return dispatch => {
      // 用户调用会返回用户信息
      validate().then(data => {
        dispatch({ type: Types.SET_USER_INFO, ...data });
      })
    }
  },
  setReg(userInfo) {
    // 注册成功跳转页面
    return (dispatch) => {
      reg(userInfo).then(data => {
        // 回来数据了 error msg user
        dispatch({ type: Types.SET_USER_INFO, ...data });
        if (data.error === 0) {
          history.push('/login');
        }
      });


      // react-router-redux push
      // history 
      // 再组件中把history传递过来
    }
  }
}
export default actions;