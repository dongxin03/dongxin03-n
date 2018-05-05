import React, { Component } from 'react';
import { render } from 'react-dom';


import { Router, Route, Switch, Redirect } from 'react-router-dom';
import TabBar from 'src/components/TabBar/TabBar'
import 'src/common/index.less'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Provider } from 'react-redux';
import store from './store';

import Login from 'src/page/Login/Login.js';
import Reg from 'src/page/Reg/Reg.js';
import Detail from 'src/page/Detail/Detail.js';
// history是路由的历史管理 history.push
import history from './history';
import ProtectedRoute from './ProtectedRoute.js';

import Async from  './AsyncComponent';
//import Home from 'src/page/Home/Home.js';
//import Profile from 'src/page/Profile/Profile.js';
// import Lesson from 'src/page/Lesson/Lesson.js';
let Home = Async(() => import('src/page/Home/Home.js'));
let Profile = Async(() => import('src/page/Profile/Profile.js'));
let Lesson = Async(() => import('src/page/Lesson/Lesson.js'));

render(<Provider store={store}>
  <Router history={history}>
    <Route
      render={({ location }) => (
        <React.Fragment>
          <TransitionGroup className='full'>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <div location={location} className="full">
                <Switch>
                  <Route path="/home" component={Home} />
                  
                  <Route path="/profile" component={Profile} />
                  {/* 如果没有登录就不应该渲染 */}
                  <ProtectedRoute path="/lesson" component={Lesson} />
                  <Route path="/login" component={Login} />
                  <Route path="/reg" component={Reg} />
                  <Route path="/detail" component={Detail} />
                  <Redirect to="/home" />
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
          <TabBar></TabBar>
        </React.Fragment>
      )} />
  </Router >
</Provider>, window.app);
if (module.hot) {
  module.hot.accept();
}