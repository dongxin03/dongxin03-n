import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { NavLink } from 'react-router-dom'
export default class TabBar extends Component {
    constructor() {
        super();
    }
    render() {
        return (<div className="tab-bar">
            <li>
                <NavLink to="/home" >
                    <i className="iconfont icon-xingqiu"></i>  
                    首页
                </NavLink>
            </li>
            <li>
                <NavLink to="/lesson">
                    <i className="iconfont icon-react"></i>我的课程
                </NavLink>
            </li>
            <li>
                <NavLink to="/profile">
                    <i className="iconfont icon-xiaolian"></i>
                    个人中心
                </NavLink>
            </li>
        </div>)
    }
}