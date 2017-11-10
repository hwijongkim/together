import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <p className="HeaderLeft">{ this.props.left }</p>
        <p className="HeaderCenter">{ this.props.title }</p>
        <p className="HeaderRight">{ this.props.right }</p>
      </div>
    );
  }
}

export default Header;
