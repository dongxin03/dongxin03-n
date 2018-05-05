import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {withRouter} from 'react-router-dom';
// withRouter == Route
class Header extends Component {
  back = () =>{
    this.props.history.go(-1);
  }
  render() {
    return (<div className="header">
      <i className="iconfont icon-fanhui" onClick={this.back}></i>
      {this.props.children}
    </div>)
  }
}
export default withRouter(Header);