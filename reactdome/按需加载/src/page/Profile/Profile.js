import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import bg from  'src/common/images/login_bg.png';
import './index.less';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import actions from '../../store/actions/session'
class Profile extends Component {
    componentDidMount(){
      this.props.setValidate();
    }
    render() {
        return (<div className="profile full">
        <div>
            <img src={bg} alt="" />
            {this.props.user ? <a>{this.props.user}</a> : <Link to="/login">登录</Link>}
        </div>
     </div>)
    }
}
export default connect(state => state.session, actions)(Profile)