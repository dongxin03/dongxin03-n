import React, { Component } from 'react';
import store from "../store";
import Nav from "../components/nav";
import actions from "../store/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import axios from "axios"
class che extends Component {
  constructor(){
    super();
    this.state={
      a:[],
      list:false,
    }
  }
  componentWillMount(){
    axios.get("http://localhost:444/").then(data=>{    
      this.setState({
        a:data.data.data
      })
    })
  }

  
  render() {
    
    let len=this.props.id.length;
    let len1=this.state.a.length;
    this.list=[];

    for(let i=0;i<len;i++){
    
      for(let j=0;j<len1;j++){
     
        if(this.state.a[j].id==this.props.id[i]){
          this.list.push(this.state.a[j]);
         
          break;
        } 
      }}

    let all=this.list.every(item=>item.isChecked)&&this.list.length>0
  
    return (
      <div>
        <Nav></Nav>
        <button onClick={()=>{
           this.props.changeText(4)
        }}>点击</button>
        <h1>{this.props.a}</h1>
        <button onClick={()=>{
          this.props.history.go(-1)
        }}>返回</button>
        <div>


          <input type="checkbox" checked={all} ref={x=>{this.inp=x}}  onClick={()=>{
            if(all){
              this.list.forEach(item=>{
                item.isChecked=false
              })
            }else{
              this.list.forEach(item=>{
                item.isChecked=true
              })
            }
           
            this.setState({
              list:!this.state.list
            })
          }}/>全选


          {/* <p>费用{all}</p> */}
          {
           this.list?this.list.map((item,index)=>{
            let arg="https://"+item.coverUrl.slice(7)
            return <div key={index}>

            <input checked={item.isChecked} type="checkbox" onClick={()=>{
              item.isChecked=!item.isChecked
              this.setState({
                list:!this.state.list
              })
            }}/>
            <p>姓名：{item.title}</p>
            <p>年龄：{item.publishOrg}</p>
            <p>{item.qian}元</p>
            <img src={arg} alt=""/>
          </div>
          }):""
          }
        </div>
      </div>
    )
  }
}
export default withRouter(connect(state=>({...state}),actions)(che))

