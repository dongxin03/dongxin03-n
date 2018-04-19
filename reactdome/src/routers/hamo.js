import React, { Component } from 'react';
import Nav from "../components/nav";
import {connect} from "react-redux";
import actions from "../store/actions";
import {withRouter} from "react-router-dom"
 class hamo extends Component {
  render() {
    console.log(this.props.a);
    return (
      <div>
        <Nav></Nav>
        <h1>{this.props.a}</h1>
        11111111111111111111111111111111
      </div>
    )
  }
}
export default withRouter(connect(state=>({...state}),actions)(hamo))
