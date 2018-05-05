import React, { Component } from 'react';
import Nav from "../components/nav";
import Fang from '../commit/js/fang';
import Yuan from '../commit/js/yuan';
import action from '../store/actions'
import {connect} from 'react-redux';

 class shang extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render() {
    console.log(this.props.init);
    
    return (
      <div>
        <Nav></Nav>
        <Fang />
        <Yuan />
        <p>{this.props.init?"对":"错"}</p>
      </div>
    )
  }
}

export default connect((state)=>({...state}),action)(shang)