import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import Todos from './components/Todos';
import 'bootstrap/dist/css/bootstrap.css';
import './components/Todos.css';

render(
    <Provider store={store}>
        <Todos />
    </Provider>,
    document.querySelector('#root')
);
