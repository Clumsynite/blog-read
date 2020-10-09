import React, { Component } from 'react'
import  Login from './Login'
export default class Body extends Component {
  constructor(){
    super()
  }
  render(){
    const {auth, blogs, comments, user} = this.props
    return(
      <div className="Body">
        {!auth && <Login user={user}/>}
      </div>
    )
  }
};
