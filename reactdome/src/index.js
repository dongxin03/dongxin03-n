import React from 'react';
import ReactDOM from 'react-dom';
import './commit/css/reset.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {HashRouter as Router,Route,Switch} from "react-router-dom"
import Hamo  from './routers/hamo';
import che from './routers/che';
import shang  from './routers/shang';
import { login } from './routers/login';
import LoginItem from "./routers/login/loginitem";
import {Provider,connect} from "react-redux";
import store from "./store";
import getComponent from './getComponent';

const A=getComponent(()=>import('./routers/che'))






ReactDOM.render(<Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/" component={Hamo}/>
            <Route path="/hamo" component={Hamo}/>
            <Route path="/che" component={A}/>
            <Route path="/shang" component={shang}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/login/item" component={LoginItem}/>>
            <Route to="/" />
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));

// import './todos/todos'

