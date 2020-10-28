import React, { useState, useEffect } from "react";
import Error from "./Error";
import axios from "axios";
import { useLoading, TailSpin } from "@agney/react-loading";

const Login = (props) => {
  const [loading, setloading] = useState(false);
  const { containerProps, indicatorEl } = useLoading({
    loading: loading,
    indicator: <TailSpin width="50" />,
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    return setTimeout(() => {
      setError("");
    }, 5000);
  }, [error, setError]);

  const submitForm = async (e) => {
    e.preventDefault();
    const url = " https://clumsy-blog.herokuapp.com/auth/login";

    if (username.trim() === "") {
      setError("Username can't be Empty");
    } else if (password.trim() === "") {
      setError("Password can't be Empty");
    } else {
      setloading(true);
      axios
        .post(url, {
          username: username,
          password: password,
        })
        .then((data) => {
          setloading(false);
          if (!data.data.user) {
            return setError("User not found\nTry a different Username");
          }
          props.setUser(data.data);
          props.setAuth(true);
          const token = data.data.token;
          const user = data.data.user;
          localStorage.setItem("token", token);
          localStorage.setItem("user", user);
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  return (
    <div className="Login" {...containerProps}>
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
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary btn-block btn-lg "
              type="submit"
              onClick={submitForm}
              disabled={loading}
            >
              {!loading && "Login"}

              {indicatorEl}
            </button>
          </form>
        </div>
        {error.length > 0 && <Error error={error} />}
      </div>
    </div>
  );
};

export default Login;
