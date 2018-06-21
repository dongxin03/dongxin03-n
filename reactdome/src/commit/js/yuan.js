import React, { Component } from 'react';
import './yuan.less';
import {connect} from 'react-redux';
import action from '../../store/actions'

class yuan extends Component {
    constructor(){
        super();
        this.state={
            a:200,
            b:200,
            ios:false
        }
    }
    componentDidMount(){
        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
           this.setState({
               ios:true
           })
        }
    };
    down=(e)=>{      
        let es=!this.state.ios?e:e.touches[0];
        window.addEventListener(!this.state.ios?"mousemove":"touchmove",this.move,false);
        this.a=es.screenX-es.clientX;//鼠标到盒子边
        this.b=es.screenY-es.clientY;
        this.aa=document.documentElement.clientWidth;
        this.bb=document.documentElement.clientHeight-50;         
        };
    move=(e)=>{
        let es=!this.state.ios?e:e.touches[0];  
        let a=es.screenX-this.a-50,b=es.screenY-this.b-50;
        if(a<0){
            a=0
        }else if(a>this.aa-100){
            a=this.aa-100
        }
        if(b<0){
            b=0
        }else if(b>this.bb-100){
            b=this.bb-100
        }
        this.setState({
            a:a,
            b:b
        })

      };


    up= (e)=>{
        window.removeEventListener("mousemove",this.move,false);
        this.props.changeClient(this.state.a,this.state.b)
    };
  
  render() { 
      let style={
          left:this.state.a,
          top:this.state.b
      }     
    return <div>
        {
            !this.state.ios?<div className="yuan" style={style}
            onMouseDown={this.down}
            onMouseUp={this.up}>
            </div>: <div className="yuan" style={style}
            onTouchStart={this.down}
            onTouchEnd={this.up}
            > </div>
        }
    </div>
  };
}

export default connect((state)=>({...state}),action)(yuan)