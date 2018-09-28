import React, { Component } from 'react';
import LoginForm from './LoginForm'
import Counter from './Counter'
import '../App.css';
import { connect } from 'react-redux';
import * as UserAction from '../actions/user';


class Main extends Component {
  render() {
    const { user, number, isAuthenticated } = this.props;
    return (
      <div className="full">
        {!isAuthenticated ? (
          <LoginForm onRequestLogin={this.props.onRequestLogin} />
        ) : (
            <Counter
              username={user}
              number={number}
            />
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    number: state.number,
    isAuthenticated: state.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestLogin: (user, password) => dispatch(UserAction.loginRequesting(user, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
