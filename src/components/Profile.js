import React, { useState, useEffect } from "react";
import BlogCard from "../Templates/BlogCard";
import { myProfile } from "../scripts/api-calls";
import { getFullname, getRelativeTime } from "../scripts/helper";

/*
// Blog - Array

added: "2020-10-07T17:29:38.710Z"
author: {_id: "5f7ddee74a0a7737982b2df7", firstname: "Testing", lastname: "API", username: "testac", password: "$2a$10$R8QdDs0TxPxnJwoGfjPOc.JR05Cj2qP0UE7doKHb3STj7ZjWIgye2", …}
content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget dui est. Phasellus ut risus velit. Pellentesque sapien diam, ultrices eget turpis at, ultrices tincidunt est. Duis ac ligula rutrum, commodo enim sed, laoreet diam. Fusce gravida eros vel diam faucibus, vitae pretium velit sagittis. Suspendisse quis lorem risus. Pellentesque sit amet cursus erat. Integer ac ligula quis leo tempor mattis. Sed aliquam dolor libero, sed ultricies odio luctus a. Aenean molestie cursus nisi id fringilla. Nunc mi lacus, gravida eu sapien sed, consequat cursus velit."
draft: false
title: "Third Blog Title"
__v: 0
_id: "5f7dfb0248fa3c29ac

// Comments - Array

added: "2020-10-07T18:33:22.704Z"
author: {_id: "5f7ddee74a0a7737982b2df7", firstname: "Testing", lastname: "API", username: "testac", password: "$2a$10$R8QdDs0TxPxnJwoGfjPOc.JR05Cj2qP0UE7doKHb3STj7ZjWIgye2", …}
blog: null
content: "Testing whether comment's author can update the comment"
title: "Testing Comment Update"
__v: 0
_id: "5f7e09f21a773b25e

// User - Object

user:
added: "2020-10-08T11:23:09.439Z"
firstname: "Testing"
lastname: "API"
password: "$2a$10$R8QdDs0TxPxnJwoGfjPOc.JR05Cj2qP0UE7doKHb3STj7ZjWIgye2"
username: "testac"
__v: 0
_id: "5f7ddee74a0a7737982b

*/

const Profile = () => {
  const [profile, setprofile] = useState([]);
  const [render, setRender] = useState();
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");

    const getProfile = async () => {
      try {
        const data = await myProfile(token);
        setprofile(data);
        setUser(data.user);
        setRender("blogs");
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();
  }, []);

  return (
    <div className="Profile">
      {profile.user && (
        <div className="card mb-3 mx-auto" style={{ width: "24rem" }}>
          <div className="card-header bg-dark text-white">Joined {getRelativeTime(user.added)}</div>
          <div className="card-body bg-light">
            {getFullname(user)}{" "}
            <strong>
              <span className="badge badge-pill badge-dark mx-1"> AKA </span>
            </strong>
            {user.username}
          </div>
          <div className="card-footer text-white bg-info text-right d-flex justify-content-between flex-wrap">
            <div
              className="d-flex align-items-center"
              title="Number of Posts"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setRender("blogs");
              }}
            >
              Post Count: {profile.blogs.length}
            </div>
            <div
              className="d-flex align-items-center"
              title="Number of Comments"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setRender("comments");
              }}
            >
              <i className="material-icons mr-1">comment</i>
              {profile.comments.length}
            </div>
          </div>
        </div>
      )}
      {render === "blogs" &&
        profile.blogs.map((blog, index) => {
          return <BlogCard blog={blog} key={index} />;
        })}

      {render === "comments" && <h1>Comments</h1>}
    </div>
  );
};

export default Profile;
