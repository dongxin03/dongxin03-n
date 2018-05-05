import React, { Component } from 'react';
import './fang.less';
import {connect} from 'react-redux';
import action from '../../store/actions'

 class fang extends Component {
    constructor(){
        super();
        this.state={
            a:0,
            b:0
        }
    }
    componentDidMount(){
        this.left=this.x.offsetLeft;
        this.right=this.x.offsetLeft+this.x.offsetWidth;
        this.top=this.x.offsetTop;
        this.bottom=this.x.offsetTop+this.x.offsetHeight;
        console.log(this.bottom);
     
        
    }
  render() {
      console.log(this.props.inclient,this.left);
      if(this.props.inclient.x>this.left&&
        this.props.inclient.x<this.right-100&&
        this.props.inclient.y>this.top&&
        this.props.inclient.y<this.bottom-100){
          
        this.props.itmeDate(true)
        console.log(this.props);
        
            
    } else{
        this.props.itmeSet(false)
    }
    return (
      <div className="fang" ref={x=>{this.x=x}}>
        
      </div>
    )
  }
}
export default connect((state)=>({...state}),action)(fang)