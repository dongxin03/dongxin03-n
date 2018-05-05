import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let allChecked =
            this.props.todos.length > 0 &&
            this.props.todos.every(item => item.completed);
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                checked={allChecked}
                                onChange={e =>
                                    this.props.toggleAll(e.target.checked)
                                }
                            />
                            {allChecked ? '全消' : '全选'}
                        </label>
                    </div>
                </li>
                {this.props.todos.map((item, index) => (
                    <li key={index} className="list-group-item">
                        <div className="checkbox">
                            <label>
                                <input
                                    onChange={() => this.props.toggle(item.id)}
                                    type="checkbox"
                                    checked={item.completed}
                                />
                                <span
                                    style={{
                                        textDecoration: item.completed
                                            ? 'line-through'
                                            : ''
                                    }}
                                >
                                    {item.text}
                                </span>
                            </label>
                            <button
                                className="btn btn-xs btn-danger pull-right"
                                onClick={() => this.props.delTodo(item.id)}
                            >
                                删除
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}
