import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AuthenticatedRoute from "./Routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./Routes/UnauthenticatedRoute";
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AllBlogs from "./components/AllBlogs";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ViewUser from "./components/ViewUser";
import Footer from "./components/Footer";
import { ping, userLogout } from "./scripts/api-calls";

const Routes = () => {
  const [user, setuser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );
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
    const logoutWhenNoCookie = async () => {
      if (document.cookie === "") {
        try {
          const data = await userLogout();
          if (data.message === "Logged out successfully") {
            localStorage.clear();
            setuser({});
            setauthenticated(false);
          } else {
            console.error(data);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    setTimeout(logoutWhenNoCookie, 2000);
    getStatus();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Routes">
      <Particles />
      <Router>
        <Navbar
          authenticated={authenticated}
          setAuth={setauthenticated}
          user={user}
          clearUser={() => setuser({})}
          server={server}
        />
        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <UnauthenticatedRoute
              path="/login"
              component={Login}
              appProps={{ setAuth: setauthenticated, setUser: setuser }}
            />
            <UnauthenticatedRoute path="/signup" component={Signup} />
            <AuthenticatedRoute exact path="/profile" component={Profile} />
            <AuthenticatedRoute exact path="/blogs" component={AllBlogs} />
            <AuthenticatedRoute
              exact
              path="/blog/:id/view"
              component={BlogPost}
            />
            <AuthenticatedRoute
              exact
              path="/user/:id/view"
              component={ViewUser}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
      <div style={{ marginTop: 80 }}>
        <Footer />
      </div>
    </div>
  );
};

export default Routes;
