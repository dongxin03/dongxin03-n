import React, { Component } from 'react';
import Nav from "../components/nav";
import {connect} from "react-redux";
import actions from "../store/actions"
class hamo extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Nav></Nav>
        11111111111111111111111111111111
      </div>
    )
  }
}

export default connect(state=>({...state}),actions)(hamo)