import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { ref } from '../../database';

import './Main.css';
import '../Header/Header.css';

class Main extends Component {

  render() {
    return (
      <div>
        <div className="Header">
          <p className="HeaderCenter">투게더</p>
          <p className="HeaderRight">가계부 만들기</p>
        </div>
      </div>

    );
  }
}

export default Main;
/**
 * Created by O on 2017. 11. 10..
 */
