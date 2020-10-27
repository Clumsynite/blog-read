import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function Routes() {
  const [blogs, setblogs] = useState([]);
  const [user, setuser] = useState({});
  const [comments, setcomments] = useState([]);
  const [authenticated, setauthenticated] = useState(false);

  return (
    <div className="Routes">
      <Router>
        <Navbar authenticated={authenticated} setAuth={setauthenticated} />
        <div className="container">
          <Switch>
            <Route path="/login">
              <Login authenticated={authenticated} setAuth={setauthenticated} setUser={setuser}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Routes;
