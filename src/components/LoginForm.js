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
      <div className="App center">
        <form>
            <div>
                <label htmlFor="username" className="label">Username</label>
                <input type="text" id="username" className="input" value={this.state.username} onChange={this.onUsernameChange} required/>
            </div>
            <div className="field">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" id="password" className="input" value={this.state.password} onChange={this.onPasswordChange} required/>
            </div>
            <div className="form_footer">
                <button className="btn" onClick={this.onSubmit}>Login</button>
            </div>
        </form>
      </div>
    );
  }
}



export default LoginForm;
