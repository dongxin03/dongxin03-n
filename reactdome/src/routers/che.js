import React, { Component } from 'react';
import store from "../store";
import Nav from "../components/nav";
import actions from "../store/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
class che extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <button onClick={()=>{
           this.props.changeText(4)
           console.log(this.props);
           
        }}>点击</button>
        <h1>{this.props.a}</h1>
        33333333333333333333333333333
        <button onClick={()=>{
          this.props.history.go(-1)
        }}>返回</button>
      </div>
    )
  }
}
export default withRouter(connect(state=>({...state}),actions)(che))

