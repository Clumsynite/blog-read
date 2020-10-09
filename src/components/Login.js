import React, { Component } from "react";
import Errors from './Errors'
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: [],
      user: {},
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.clearErrors = this.clearErrors.bind(this)
    this.submitForm = this.submitForm.bind(this);
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  async loginUser(url, data) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    });
    return response.json()
  }
  clearErrors() {
    this.setState({errors: []})
  }
async  submitForm(e) {
    e.preventDefault();
    const url = " https://clumsy-blog.herokuapp.com/auth/login";
    const username = this.state.username;
    const password = this.state.password;
    await this.clearErrors()
    if (username.trim() === "") {
      this.setState({
        errors: this.state.errors.concat({ msg: "Username can't be Empty" }),
      });
    }
    if (password.trim() === "") {
      this.setState({
        errors: this.state.errors.concat({ msg: "Password can't be Empty" }),
      });
    }
    const data = { username, password };
    await this.loginUser(url, data)
    .then(data => {
      if(!data.user){
      return this.setState({errors: this.state.errors.concat({msg: "User not found\nTry a different Username"})})
      }
      this.setState({ user: data });
    })
    .catch(error => {
      this.setState({errors: error})
    })
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="Login">
        <div className="card text-white bg-dark mx-auto text-center mx-auto">
          <h3 className="card-header">Please Login</h3>
          <div className="card-body  mx-auto">
            <form method="" action="">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  required
                  minLength="6"
                  autoFocus
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
                  minLength="8"
                  className="form-control form-control-lg text-center"
                  onChange={this.handlePasswordChange}
                />
              </div>
              <button
                className="btn btn-primary btn-block btn-lg"
                type="submit"
                onClick={this.submitForm}
              >
                Login
              </button>
            </form>
          </div>
          {errors.length > 0 && <Errors errors={errors}/>}
        </div>
      </div>
    );
  }
}
