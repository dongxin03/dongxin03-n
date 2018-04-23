import React, { Component } from 'react'
import Nav from "../components/nav";
import "./login.less"

export class login extends Component {
  constructor(){
    super();
    this.state={
      inp:false,
      in:true,
      is:true
    }
  }
  render() {
    return (
      <div>
        <input ref={x=>{this.s=x}} type="text" defaultValue="请输入账号" 
        
        onFocus={()=>{
        if(this.state.is){
          this.s.value="";
          this.setState({
            is:false
        })
        }}}
        onBlur={()=>{
          if(this.s.value==""){
            this.s.value="请输入账号";
            this.setState({
              is:true
            })
          }
        }}/>

        <input ref={x=>{this.x=x}} type={this.state.inp?"password":"text"} defaultValue="请输入密码" 
        
        onFocus={()=>{
        if( this.state.in){
          this.x.value="";
          this.setState({
            in:false,
            inp:true
        })
        }}}
        onBlur={()=>{
          if(this.x.value==""){
            this.x.value="请输入账号";
            this.setState({
              in:false
            })
          }
        }}/>
        <input ref={x=>{this.b=x}} type="checkbox" onChange={()=>{
          if(this.b.checked){
            this.setState({
              inp:false
            })
          }else{
            this.setState({
              inp:true
            })
          }
        }}/>
        <button>登录</button>
        <Nav></Nav>
      </div>
    )
  }
}

export default login