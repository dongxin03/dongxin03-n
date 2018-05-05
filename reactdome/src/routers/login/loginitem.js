import React, { Component } from 'react';
import "./loginitem.less";
import {Link} from 'react-router-dom';
import axios from "axios";

export default class loginitem extends Component {
  constructor(){
    super();
    this.state={
      in:true,
      blu:false
    }
  }
  render() {
    let obj={};
    let a=window.sessionStorage.getItem("name");
    let b=window.sessionStorage.getItem("age");
    // obj.name=a;obj.age=b;
    obj.name=a;obj.age=b;
    console.log(this.xingming);
    
    return (
      <div className="itembox">
       <div className="input-group a">
            <input type="text" 
             className="form-control" ref={x=>this.age=x} placeholder="确认密码" aria-describedby="basic-addon2"
             onBlur={()=>{
               console.log(this.age.value);
               
               if(this.age.value==b){
               this.setState({
                 in:true
               })
             }else{
              this.setState({
                in:false
              })
             }
             }}
             />
            <span className="input-group-addon" id="basic-addon2">{this.state.in?"密码正确":"密码错误"}</span>
        </div>
        <div className="input-group b">
            <input ref={x=>{this.xingming=x}} type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2"/>
            <span className="input-group-addon" id="basic-addon2">姓名</span>
        </div>
        <div className="input-group c">
            <input ref={x=>{this.nianling=x}} type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2"/>
            <span className="input-group-addon" id="basic-addon2"></span>
        </div>
        <button onClick={
          ()=>{
            let c=this.xingming.value.toString();
            let d=this.nianling.value.toString();
            obj.xingming=c?c:"";obj.nianling=d?d:"";
            axios.post("http://localhost:444/item",{obj}).then((data)=>{console.log(data)})
            this.setState({
              in:!this.state.in,
              blu:true
            })
          }
        }>提交</button>
        <button onClick={()=>{
         this.props.history.go(-1)
        }}>上一页</button>
        <div className="chenggong" style={{display:this.state.blu?"block":"none"}}>
          <div>
            <p>注册成功</p>
            <button onClick={()=>{
              this.setState({
                blu:false
              })
            }}>ok</button>
          </div>
        </div>
      </div>
    )
  }}
