import React, { Component } from 'react';
import store from "../store";
import Nav from "../components/nav";
import action from "../store/action"

export class che extends Component {
  constructor(){
    super();
    this.state={
      a:store.getState().a
    }
  }
  componentDidMount(){
    this.a=store.subscribe(()=>{
      this.setState({
        a:store.getState().a
      })
    })
  }
  componentWillUnmount(){
    this.a()
  }
  render() {
    return (
      <div>
        <Nav></Nav>
        <button onClick={()=>{
            store.dispatch(action.changeText(5))
        }}>点击</button>
        {this.state.a}
        33333333333333333333333333333
      </div>
    )
  }
}

export default che