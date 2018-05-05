import React, { Component } from 'react';
import * as filters from '../constants/filters';
export default class TodoFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let unCompleted = this.props.todos.filter(
            item => item.completed === false
        );
        return (
            <div className="row">
                <div className="col-xs-3" style={{ lineHeight: '30px' }}>
                    {unCompleted.length > 0
                        ? `有${unCompleted.length}件未完成`
                        : void 0}
                </div>
                <div className="col-xs-7">
                    <button
                        onClick={() => this.props.changeFilter(filters.ALL)}
                        className={
                            'btn btn-sm filter-button' +
                            (this.props.filter === filters.ALL
                                ? ' btn-primary'
                                : ' btn-default')
                        }
                    >
                        全部
                    </button>
                    <button
                        onClick={() =>
                            this.props.changeFilter(filters.UN_COMPLETED)
                        }
                        className={
                            'btn btn-sm filter-button' +
                            (this.props.filter === filters.UN_COMPLETED
                                ? ' btn-primary'
                                : ' btn-default')
                        }
                    >
                        未完成
                    </button>
                    <button
                        onClick={() =>
                            this.props.changeFilter(filters.COMPLETED)
                        }
                        className={
                            'btn btn-sm filter-button' +
                            (this.props.filter === filters.COMPLETED
                                ? ' btn-primary'
                                : ' btn-default')
                        }
                    >
                        已完成
                    </button>
                </div>
                <div className="col-xs-2">
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={this.props.delAllCompleted}
                    >
                        删除已完成
                    </button>
                </div>
            </div>
        );
    }
}
