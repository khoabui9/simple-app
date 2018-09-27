import React, { Component } from 'react';
import LoginForm from './LoginForm'
import '../App.css';
import { connect } from 'react-redux';
import * as UserAction from '../actions/user';


class Main extends Component {
  render() {
    return (
     <LoginForm onRequestLogin = {this.props.onRequestLogin}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    number: state.number,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestLogin: (user, password) => dispatch(UserAction.login(user, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
