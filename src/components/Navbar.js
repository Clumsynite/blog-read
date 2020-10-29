import { NavLink, useHistory } from "react-router-dom";
import { userLogout } from "../Api/api";
import { useLoading, Puff } from "@agney/react-loading";

const Navbar = (props) => {
  const history = useHistory();
  const { containerProps, indicatorEl } = useLoading({
    loading: !props.server,
    indicator: <Puff width="28" />,
    loaderProps: {
      style: { color: "#00ffff" },
    },
  });

  const handleLogout = async () => {
    await userLogout();
    props.setAuth(false);
    localStorage.clear();
    props.clearUser();
    history.push("/login");
  };

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <div className="d-flex justify-content-center align-items-center">
          <NavLink className="navbar-brand mr-2" to="/">
            Clumsyknight's Blog
          </NavLink>
          {!props.server && (
            <div
              style={{
                color: "#00ff80",
                cursor: "pointer",
              }}
              title="Connecting"
              {...containerProps}
            >
              {indicatorEl}
            </div>
          )}
          {props.server && (
            <i
              className="material-icons"
              style={{
                color: "#00ff80",
                cursor: "pointer",
              }}
              title="Connected"
            >
              radio_button_unchecked
            </i>
          )}
        </div>
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
        <div className="container">
          {!props.authenticated && (
            <div className="collapse navbar-collapse" id="navbarNav">
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
            <div className="collapse navbar-collapse" id="navbarNav">
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
                    title={`${props.user.firstname} ${props.user.lastname}`}
                    to="/profile"
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
      </nav>
    </div>
  );
};

export default Navbar;
