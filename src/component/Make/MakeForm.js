import React, { Component } from 'react';
import './Make.css';

class Make1 extends Component {
  render() {
    return (
      <div className="MakeForm">
        <label>
          <p>{this.props.title}</p>
          <input type={this.props.type} />
        </label>
      </div>
    );
  }
}

export default Make1;
