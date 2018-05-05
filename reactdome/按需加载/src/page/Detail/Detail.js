import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from 'src/components/Header/Header'
export default class Detail extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props)
    return (<div className="full profile">
      <Header>详情页</Header>
      <video
        style={{ width: '100%' }}
        controls={true}
        src={this.props.location.state.video}
      ></video>
      {this.props.location.state.price}
    </div>)
  }
}