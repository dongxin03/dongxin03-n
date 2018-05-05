import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
export default class HomeSwiper extends Component {
  state = {
    index:0 // 焦点对应的索引
  }
  render() {
    let opts = {
      continuous: true, auto: 1000, callback: (index) => {
        this.setState({index});
      }
    }
    return (<div className="home-swiper">
      <ReactSwipe className="carousel" swipeOptions={opts}>
        {this.props.lists.map((item, index) => (
          <div key={index}>
            <img src={item} alt=""/>
          </div>
        ))}
      </ReactSwipe>
      <div className="dots">
        {this.props.lists.map((item, index) => (
          <span key={index} className={index===this.state.index?'active':''}></span>
        ))}
      </div>
    </div>)
  }
}