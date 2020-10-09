import React, { Component } from "react";

export default class Errors extends Component {
  constructor() {
    super();
  }
  render() {
    const errorlist = this.props.errors.map((error, index) => {
      return (
        <div className="alert alert-danger" key={index}>
          {error.msg}
        </div>
      );
    });

    return <div className="Errors mx-auto">{errorlist}</div>;
  }
}
