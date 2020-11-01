import React, { useState, useEffect } from "react";
import { useLoading, TailSpin } from "@agney/react-loading";
import Error from "../Templates/Error";
import { userSignup } from "../scripts/api-calls";

const Signup = () => {
  const [loading, setloading] = useState(false);
  const { containerProps, indicatorEl } = useLoading({
    loading: loading,
    indicator: <TailSpin width="24" />,
  });
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setsuccess] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    return setTimeout(() => {
      setError("");
    }, 5000);
  }, [error, setError]);

  const submitForm = async (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      setError("Username can't be Empty");
    } else if (password.trim() === "") {
      setError("Password can't be Empty");
    } else {
      setloading(true);
      try {
        const data = await userLogin({ username, password });
        setloading(false);
        if (!data.user) {
          return setError("Username or Password is wrong");
        }
      } catch (error) {
        setloading(false);
        console.error(error);
      }
    }
  };

  return (
    <div className="Signup">
      <div
        className="card shadow mx-auto text-center"
        style={{ width: "18rem" }}
      >
        <h3 className="card-header">Please Login</h3>
        <div className="card-body mx-auto">
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
              className="btn btn-outline-primary btn-block btn-lg "
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

export default Signup;
