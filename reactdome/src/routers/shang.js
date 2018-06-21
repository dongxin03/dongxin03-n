import React, { Component } from 'react';
import Nav from "../components/nav";
import Fang from '../commit/js/fang';
import Yuan from '../commit/js/yuan';
import action from '../store/actions'
import {connect} from 'react-redux';
import './shang.less'

 class shang extends Component {
  constructor(){
    super();
    this.state={
      list:[]
    }
  }
  home=()=>{
    let b=this.state.list;
    b.push("2")
    this.setState({
      list:b
    })
  }
  componentDidUpdate(){
    console.log(this.state.list);
    
  }
  render() {
    console.log(this.state.list);
    return (
      <div className="box">
        <Nav></Nav>
        <div className="boxlist">
        <ul className="list">
          <li>
            11111
          </li> <li>
            11111
          </li> <li>
            11111
          </li> <li>
            11111
          </li> <li>
            11111
          </li> <li>
            11111
          </li>
        </ul>
        </div>
        <button onClick={this.home}>111</button>
        <Fang />
        <Yuan />
        <p>{this.props.init?"对":"错"}</p>
      </div>
    )
  }
}

export default connect((state)=>({...state}),action)(shang)