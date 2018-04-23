import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import { isAbsolute } from 'path';

export class nav extends Component {
  render() {
    let style={
        width:"24.5%",
        "boxSizing":"borderBox",
        float:"left",
        
    }
    return (
     <div style={{bottom:"0",position:"absolute",width:"100%",zIndex:"999"}} className="navBox">
        <ul style={{borderTop:"1px solid #666"}} className="nav nav-pills nav-justified">
            <li style={style} role="presentation" className="disabled">
                <NavLink to="/hamo">
                    首页
                </NavLink>
            </li>
            <li style={style} role="presentation" className="disabled">
                <NavLink to="/shang">
                    商城
                </NavLink>
            </li>
            <li style={style} role="presentation" className="disabled">
                <NavLink to="/che">
                    购物车
                </NavLink>
            </li>
            <li style={style} role="presentation" className="disabled">
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