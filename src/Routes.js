import React, { useState } from "react";
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

const Routes = () => {
  const [user, setuser] = useState({});
  const [authenticated, setauthenticated] = useState(false);

  return (
    <div className="Routes">
      <Router>
        <Navbar
          authenticated={authenticated}
          setAuth={setauthenticated}
          user={user.user}
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
