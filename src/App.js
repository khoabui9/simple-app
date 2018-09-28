import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>{routes}</Router>
    );
  }
}

export default App;
