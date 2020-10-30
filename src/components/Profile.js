import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    const token = localStorage.getItem("token");

    const getProfile = async () => {
      try {
        const data = await myProfile(token);
        console.log(data);
        setprofile(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();
  }, []);

  return (
    <div className="Profile">
      <h1 className="text-center">Profile</h1>
      <button
        className="btn btn-block btn-primary"
        onClick={() => {
          console.log(profile);
        }}
      >
        Get Profile
      </button>
      {profile.length > 0 && <div className="card"></div>}
    </div>
  );
};

export default Profile;
