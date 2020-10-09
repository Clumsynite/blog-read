import React, { Component } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
class App extends Component {
  constructor() {
    super();

    this.state = {
      blogs: [],
      user: {},
      comments: [],
      authenticated: false,
    };
  }
  render() {
    const { authenticated, blogs, user, comments } = this.state;
    return (
      <div className="App Fade">
        <Navbar authenticated={authenticated} />
        <Body
          user={user}
          blogs={blogs}
          comments={comments}
          auth={authenticated}
        />
      </div>
    );
  }
}

export default App;
