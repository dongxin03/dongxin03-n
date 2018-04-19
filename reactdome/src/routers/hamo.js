import React, { Component } from 'react';
import Nav from "../components/nav";
import store from "../store";



export class hamo extends Component {
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
        {this.state.a}
        11111111111111111111111111111111
      </div>
    )
  }
}

export default hamo
