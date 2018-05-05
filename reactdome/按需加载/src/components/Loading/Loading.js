import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.less'
export default class App extends Component{
    constructor(){
        super();
   }
   render(){
     return (<div className="loading">
       <span></span>
       <span></span>
       <span></span>
       <span></span>
       <span></span>
     </div>)
 }
}