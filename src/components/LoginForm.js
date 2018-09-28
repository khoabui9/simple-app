import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onRequestLogin(this.state.username, this.state.password);
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return (
      <div className="App full center">
        <form className="login-form">
          <label htmlFor="username" className="label custom-font">Username</label>
          <div>
            <input type="text" id="username" className="form-input" value={this.state.username} onChange={this.onUsernameChange} required />
          </div>
          <label htmlFor="password" className="label custom-font">Password</label>
          <div className="field">
            <input type="password" id="password" className="form-input" value={this.state.password} onChange={this.onPasswordChange} required />
          </div>
          <div className="form_footer">
            <button className="btn custom-font" onClick={this.onSubmit}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}



export default LoginForm;
