import React, { Component } from 'react';
import { ref } from '../../database';
import MakeForm from './MakeForm';
import Make2 from './Make2';

import '../Header/Header.css';
import './Make.css';

class Make1 extends Component {
  render() {
    return (
      <div className="Make1">
        <form className="Form">
          <MakeForm title="이름" type="text" />
          <MakeForm title="목적" type="text" />
          <MakeForm title="통화" type="text" />
          <MakeForm title="시작 날짜" type="text" />
          <MakeForm title="잔액이월" type="checkbox" />
        </form>
      </div>
    );
  }
}

export default Make1;
