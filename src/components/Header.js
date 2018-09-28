import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <p className="user-title">{this.props.username}</p>
        <p className="logout" onClick={this.props.onLogout}>logout</p>
      </div>
    );
  }
}

export default Header;
