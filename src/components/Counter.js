import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header'
import { connect } from 'react-redux';
import * as UserAction from '../actions/user';
import {Redirect} from "react-router-dom"

class Counter extends Component {
  render() {
    // if (user)
      return (
            <div className="full center">
              <div className="minus center">
                <p className="minus-btn" onClick={() => this.props.onDecrement(1)}>-</p>
              </div>
              <div className="number center">
                <p className="app-number">{this.props.number}</p>
              </div>
              <div className="plus center">
                <p className="plus-btn" onClick={() => this.props.onIncrement(1)}>+</p>
              </div>
            </div>
      );
    // else 
    //   return <Redirect to="/"/>
  }
}


export default Counter;
