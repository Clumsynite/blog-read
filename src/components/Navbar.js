import { NavLink } from "react-router-dom";
import axios from "axios";

const Navbar = (props) => {
  const handleLogout = async () => {
    const url = "https://clumsy-blog.herokuapp.com/auth/logout";
    await axios.post(url);
    props.setAuth(false);
  };

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Clumsyknight's Blog
          </NavLink>
          <button
            className="navbar-toggler ml-auto custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {!props.authenticated && (
              <div>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
            {props.authenticated && (
              <div>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/blogs"
                    >
                      Blogs
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/me"
                    >
                      My Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={handleLogout}
                      style={{ cursor: "pointer" }}
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
