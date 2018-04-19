import React from 'react';
import ReactDOM from 'react-dom';
import './commit/css/reset.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router,Route,Switch} from "react-router-dom"
import { hamo } from './routers/hamo';
import { che } from './routers/che';
import { shang } from './routers/shang';
import { login } from './routers/login';






ReactDOM.render(<div>
    <Router>
        <Switch>
            <Route exact path="/" component={hamo}/>
            <Route exact path="/hamo" component={hamo}/>
            <Route exact path="/che" component={che}/>
            <Route exact path="/shang" component={shang}/>
            <Route exact path="/login" component={login}/>
            <Route to="/" />>
            
        </Switch>
    </Router>
</div>, document.getElementById('root'));

