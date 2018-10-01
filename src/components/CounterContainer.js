import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header'
import Counter from './Counter'
import { connect } from 'react-redux';
import * as UserAction from '../actions/user';
import {Redirect} from "react-router-dom"

class CounterContainer extends Component {
  render() {
    var user = sessionStorage.getItem("user")
    var {number} = this.props
    
    if (user)
      return (
        <div className="App full">
          <div className="app-counter full">
            <Header username={user} onLogout={this.props.onLogout}/>
            <Counter 
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                number = {number}
            />
          </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
