import React, { Component } from "react";
import Navbar from "./components/Navbar";
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
    const { authenticated, blog, user, comments } = this.state;
    return (
      <div className="App">
        <Navbar authenticated={authenticated} />
      </div>
    );
  }
}

export default App;
