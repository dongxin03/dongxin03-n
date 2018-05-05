import * as Types from '../action-types';
import { getSlider, getLesson } from '../../api/home';
let actions = {
  setLesson(lesson) { // 设置课程数据
    return (dispatch,getState)=>{
      // 先更改课程类型
      dispatch({ type: Types.SET_CURRENT_LESSON, lesson });
      // 刷新课程
      actions.refresh()(dispatch,getState);
    }
  },
  setSlider() {
    return (dispatch) => {
      // 是用来改变loading状态的
      dispatch({ type: Types.SET_SLIDERS });
      // 真正请求
      dispatch({ type: Types.SET_SLIDERS_SUCCESS, payload: getSlider() });
    }
  },
  refresh(){ //刷新
    return (dispatch, getState)=>{
      dispatch({type:Types.CLEAR_LESSON});
      // 设置最新的课程
      actions.setLessonList()(dispatch,getState);
    }
  },
  setLessonList() {
    return ((dispatch, getState) => {
      let { 
        currentLesson, 
        lesson: {
          hasMore, loading, limit, offset
        } 
      } = getState().home
      // 调用这个动作的时候 要先检查有没有更多数据
      if(!hasMore || loading){
         return;
      }
      dispatch({ type: Types.SET_LESSON });
      // {hasMore,lists}
      dispatch({ type: Types.SET_LESSON_SUCCESS, payload: getLesson(offset, limit, currentLesson)});
      // 调用api方法
    })
  }
}
export default actions;




// 点击个人中心页面 -> profile 默认显示登录按钮 -> 点击登录-> 去登录-> 没有账号去注册 -> 注册完回登录 -> 再去登录->登录成功回到个人中心