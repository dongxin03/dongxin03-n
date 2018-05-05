import React, { Component } from 'react'
import Nav from "../components/nav";
import "./login.less";
import {Link} from "react-router-dom"

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
     <div style={{boxSizing:"border-box"}}>
        <div className="login_box">
        <input className="inp1" ref={x=>{this.s=x}} type="text" defaultValue="请输入账号" 
        
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

        <input className="inp2" ref={x=>{this.x=x}} type={this.state.inp?"password":"text"} defaultValue="请输入密码" 
        
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
              in:true,
              inp:false
            })
          }
        }}/>
        <input className="inp3" ref={x=>{this.b=x}} type="checkbox" onChange={()=>{
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
        <button onClick={()=>{
          window.sessionStorage.setItem("name",this.x.value);
          window.sessionStorage.setItem("age",this.s.value);
          
          console.log(this.s.value);
          console.log(this.x.value);
        }}><Link to="/login/item">下一步</Link></button>
      </div>
      <Nav></Nav>
     </div>
    )
  }
}

export default login