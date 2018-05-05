import React, { Component } from 'react';
import { connect } from 'react-redux';
import todos_actions from '../store/actions/todos';
import filter_actions from '../store/actions/filter';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import * as filters from '../constants/filters';
class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log(this.props);
        return (
            <div className="container" style={{ marginTop: '20px' }}>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader addTodo={this.props.addTodo} />
                            </div>
                            <div className="panel-body">
                                <TodoList
                                    todos={this.props.todos}
                                    delTodo={this.props.delTodo}
                                    toggle={this.props.toggleTodo}
                                    toggleAll={this.props.toggleAll}
                                />
                            </div>
                            <div className="panel-footer">
                                <TodoFooter
                                    todos={this.props.todos}
                                    delAllCompleted={this.props.delAllCompleted}
                                    changeFilter={this.props.changeFilter}
                                    filter={this.props.filter}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    state => ({
        todos: state.todos.todos.filter(todo => {
            switch (state.filter.filter) {
                case filters.COMPLETED:
                    return todo.completed;
                case filters.UN_COMPLETED:
                    return !todo.completed;
                default:
                    return true;
            }
        }),
        filter: state.filter.filter
    }),
    { ...todos_actions, ...filter_actions }
)(Todos);
