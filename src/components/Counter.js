import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header'

class Counter extends Component {
  render() {
    return (
      <div className="App full">
        <header className="app-header full">
          <Header username={this.props.username} />
          <div className="full center">
            <div className="minus center">
              <p className="minus-btn">-</p>
            </div>
            <div className="number center">
              <p className="app-number">{this.props.number}</p>
            </div>
            <div className="plus center">
              <p className="plus-btn">+</p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Counter;
