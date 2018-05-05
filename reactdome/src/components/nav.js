import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import { isAbsolute } from 'path';
import "./nav.less"
export class nav extends Component {
  render() {
 
    return (
     <div  className="navBox">
        <ul className="nav">
            <li>
                <NavLink to="/hamo">
                    首页
                </NavLink>
            </li>
            <li>
                <NavLink  to="/shang">
                    商城
                </NavLink>
            </li>
            <li>
                <NavLink to="/che">
                    购物车
                </NavLink>
            </li>
            <li>
                <NavLink to="/login">
                    个人
                </NavLink>
            </li>
        </ul>
     </div>
    )
  }
}

export default nav