import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from './HomeHeader'
import './index.less';
import { connect } from 'react-redux';
import actions from '../../store/actions/home';
import HomeSwiper from './HomeSwiper';
import {loadMore,pullRefresh} from '../../common/util';
import Loading from 'src/components/Loading/Loading';
import {Link} from 'react-router-dom'
class Home extends Component {
  constructor(){
    super();
    this.content = React.createRef();
  }
  chooseLesson = (val) => {
    // 将当前的课程存入到redux中
    this.props.setLesson(val);
  }
  componentDidMount() {
    // 获取轮播图 如果有数据了 就不要再获取了
    if (this.props.slider.lists.length === 0){
      this.props.setSlider();
    }
    if (this.props.lesson.lists.length === 0){
      this.props.setLessonList();
    }
    // 给context元素绑定scroll时间
    loadMore(this.content.current,this.loadMore);
    // 下拉刷新
    pullRefresh(this.content.current,this.props.refresh);
  }
  loadMore = () =>{
    this.props.setLessonList();
  }
  render() {
    return (<div className="full home">
      <HomeHeader chooseLesson={this.chooseLesson} />
      <div className="content" ref={this.content}>
        {this.props.slider.lists.length > 0 ?
          <HomeSwiper lists={this.props.slider.lists} /> : <Loading></Loading>}
        <div className="home-list">
          {this.props.lesson.lists.length > 0 ?
            this.props.lesson.lists.map((item, index) => (
              <li key={index}>
                <Link to={{
                  pathname: "/detail",
                  state: item
                }} >
                  <img src={item.url} alt="" />
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </Link>
              </li>
            )) : <Loading></Loading>
          }
        </div>
        {this.props.lesson.lists.length>0&&this.props.lesson.loading ? <Loading></Loading>:null}
        {/* <button onClick={this.loadMore}>获取更多数据</button> */}
      </div>
    </div>)
  }
}
export default connect(
  state => state.home,
  actions
)(Home)