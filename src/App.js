import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import routes from './routes';
import './App.css';

class App extends Component {
  // checkAuth() {
  //   var isAuth = this.props.isAuthenticated;
  //   if (isAuth) {
  //     <Redirect to='/'/>;
  //   } else {
  //     <Redirect to='/counter'/>;
  //   }
  // }

  render() {
    return (
      <Router>{routes}</Router>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.isAuthenticated
//   };
// };

export default App;
