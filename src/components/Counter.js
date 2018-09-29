import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header'
import { connect } from 'react-redux';
import * as UserAction from '../actions/user';
import {Redirect} from "react-router-dom"

class Counter extends Component {
  render() {
    var user = sessionStorage.getItem("user")
    var {number} = this.props
    
    if (user)
      return (
        <div className="App full">
          <header className="app-header full">
            <Header username={user} onLogout={this.props.onLogout}/>
            <div className="full center">
              <div className="minus center">
                <p className="minus-btn" onClick={() => this.props.onDecrement(1)}>-</p>
              </div>
              <div className="number center">
                <p className="app-number">{number}</p>
              </div>
              <div className="plus center">
                <p className="plus-btn" onClick={() => this.props.onIncrement(1)}>+</p>
              </div>
            </div>
          </header>
        </div>
      );
    else 
      return <Redirect to="/"/>
  }
}

const mapStateToProps = state => {
  return {
    number: state.number,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: (number) => dispatch(UserAction.updateIncrement(number)),
    onDecrement: (number) => dispatch(UserAction.updateDecrement(number)),
    onLogout: () => dispatch(UserAction.logoutRequesting())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
