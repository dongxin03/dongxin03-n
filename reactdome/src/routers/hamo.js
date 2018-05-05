import React, { Component } from 'react';
import Nav from "../components/nav";
import {connect} from "react-redux";
import actions from "../store/actions";
import {withRouter} from "react-router-dom";
import axios from "axios";
// import data from '../commit/js/api'
 class hamo extends Component {
   constructor(){
     super();
     this.state={
       a:[]
     }
   }
   componentDidMount(){
     axios.get("http://localhost:444/").then(data=>{
        this.setState({
          a:data.data.data
        })
      })
     
   }
   shouldComponentUpdate(nextProps, nextState){
   
      return true
      
   }
  render() {
  
    
    let b=this.state.a
    return (
      <div>
        <Nav></Nav>
        <h1 style={{margin:"0"}}>{this.props.a}</h1>
        {
          b.map((item,index)=>{
            let arg="https://"+item.coverUrl.slice(7)
            return <div key={index}>
              <p>姓名：{item.title}</p>
              <p>年龄：{item.publishOrg}</p>
              <img src={arg} alt=""/>
              <button onClick={()=>{
                this.props.add(item.id)
              }}>加入购物车</button>
            </div>
          })
        }
      </div>
    )
  }
}
export default withRouter(connect(state=>({...state}),actions)(hamo))
