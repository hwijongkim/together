import React, { Component } from 'react';
import { ref } from '../../database';
import MakeForm from './MakeForm';

import '../Header/Header.css';
import './Make.css';

class Make2 extends Component {
  render() {
    return (
      <div className="Make2">
        <form className="Form">
          <MakeForm title="이름" type="text" />
          <MakeForm title="종류" type="text" />
          <MakeForm title="잔액" type="text" />
        </form>
      </div>
    );
  }
}

export default Make2;
