import React, { Component } from 'react';

export default class TodoHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleKeyUp = e => {
        if (e.keyCode === 13 && e.target.value.trim() !== '') {
            this.props.addTodo(e.target.value);
            e.target.value = '';
        }
    };
    render() {
        return (
            <input
                type="text"
                className="form-control"
                onKeyUp={this.handleKeyUp}
            />
        );
    }
}
