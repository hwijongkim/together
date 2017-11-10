import React, { Component } from 'react';
import { ref } from '../../database';
import MakeForm from './MakeForm';

import '../Header/Header.css';
import './Make.css';

class Make3 extends Component {
  render() {
    return (
      <div className="Make3">
        <form className="Form">
          <MakeForm title="공유 코드" type="text" />
        </form>
      </div>
    );
  }
}

export default Make3;
