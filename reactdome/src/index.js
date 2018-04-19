import React from 'react';
import ReactDOM from 'react-dom';
import './commit/css/reset.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router,Route,Switch} from "react-router-dom"
import Hamo  from './routers/hamo';
import che from './routers/che';
import { shang } from './routers/shang';
import { login } from './routers/login';
import {Provider,connect} from "react-redux";
import store from "./store"






ReactDOM.render(<Provider store={store}>
    <div>
    <Router>
        <Switch>
            <Route exact path="/" component={Hamo}/>
            <Route exact path="/hamo" component={Hamo}/>
            <Route exact path="/che" component={che}/>
            <Route exact path="/shang" component={shang}/>
            <Route exact path="/login" component={login}/>
            <Route to="/" />>
            
        </Switch>
    </Router>
</div>
</Provider>, document.getElementById('root'));

