import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: [],
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  submitForm(e) {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    if(username.trim()==='' ){
      this.setState({errors: [] })
    }
  }
  render() {
    const { errors } = this.state;
    const errorlist = errors.map((error, index) => {
      return (
        <li key={index}>
          <div className="alert alert-danger">error.msg</div>
        </li>
      );
    });
    return (
      <div className="Login">
        <div className="card text-white bg-dark mx-auto text-center mx-auto">
          <h3 className="card-header">Please Login</h3>
          <div className="card-body  mx-auto">
            <form method="POST" action="">
              {/* https://clumsy-blog.herokuapp.com/auth/login */}
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  required
                  className="form-control form-control-lg text-center"
                  onChange={this.handleUsernameChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                  className="form-control form-control-lg text-center"
                  onChange={this.handlePasswordChange}
                />
              </div>
              <button
                className="btn btn-primary btn-block btn-lg"
                type="submit"
                onSubmit={this.submitForm}
              >
                Login
              </button>
            </form>
          </div>
          {errors.length > 0 && errorlist}
        </div>
      </div>
    );
  }
}
