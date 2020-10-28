import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AuthenticatedRoute from "./Routes/AuthenticatedRoute";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";

const Routes = () => {
  const [blogs, setblogs] = useState([]);
  const [user, setuser] = useState({});
  const [comments, setcomments] = useState([]);
  const [authenticated, setauthenticated] = useState(false);

  return (
    <div className="Routes">
      <Router>
        <Navbar
          authenticated={authenticated}
          setAuth={setauthenticated}
          clearUser={() => setuser({})}
        />
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
            <AuthenticatedRoute exact path="/profile" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routes;
