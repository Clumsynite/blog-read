import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";

function Routes() {
  const [blogs, setblogs] = useState([]);
  const [user, setuser] = useState({});
  useEffect(() => {
    const token = user.token;
    return () => {
      localStorage.setItem("token", token);
    };
  }, [user, setuser]);
  const [comments, setcomments] = useState([]);
  const [authenticated, setauthenticated] = useState(false);

  return (
    <div className="Routes">
      <Router>
        <Navbar authenticated={authenticated} setAuth={setauthenticated} />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login">
              <Login
                authenticated={authenticated}
                setAuth={setauthenticated}
                setUser={setuser}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Routes;
