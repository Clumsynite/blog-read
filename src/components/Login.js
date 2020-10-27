import React, { useState, useEffect } from "react";
import Error from "./Error";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    return setTimeout(() => {
      setError("");
    }, 5000);
  }, [error, setError]);

  const [user, setUser] = useState({});

  const loginUser = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    });
    return response.json();
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const url = " https://clumsy-blog.herokuapp.com/auth/login";

    if (username.trim() === "") {
      setError("Username can't be Empty");
    }
    if (password.trim() === "") {
      setError("Password can't be Empty");
    }
    const data = { username, password };
    await this.loginUser(url, data)
      .then((data) => {
        if (!data.user) {
          return setError("User not found\nTry a different Username");
        }
        setUser(data);
      })
      .catch((error) => {
        setError(error);
      });
  };

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
                onChange={() => setUsername(e.target.value)}
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
                onChange={() => setPassword(e.target.value)}
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
        {error.length > 0 && <Error error={error} />}
      </div>
    </div>
  );
};

export default Login;
