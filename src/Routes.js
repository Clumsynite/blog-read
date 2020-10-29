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
import AllBlogs from "./components/AllBlogs";
import Profile from "./components/Profile";
import { ping } from "./Api/api";

const Routes = () => {
  const [user, setuser] = useState({});
  const [authenticated, setauthenticated] = useState(false);
  const [server, setserver] = useState(false);
  useEffect(() => {
    const getStatus = async () => {
      if (!server) {
        const status = await ping();
        if (!status.error) {
          setserver(true);
        } else {
          console.error("Unknown error. Reconnecting in 10sec");
          setserver(false);
          setTimeout(getStatus, 10000);
        }
      }
    };
    getStatus();
    return server;
  }, []);

  return (
    <div className="Routes">
      <Router>
        <Navbar
          authenticated={authenticated}
          setAuth={setauthenticated}
          user={user}
          clearUser={() => setuser({})}
          server={server}
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
            <AuthenticatedRoute exact path="/profile" component={Profile} />
            <AuthenticatedRoute exact path="/blogs" component={AllBlogs} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routes;
