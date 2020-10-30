import React, { useState, useEffect } from "react";
import { myProfile } from "../Api/api";

const Profile = () => {
  const [profile, setprofile] = useState([]);
  const token = localStorage.getItem("token");
  // useEffect(() => {
  //   const getProfile = async () => {
  //     try {
  //       const data = await myProfile(token);
  //       console.log(data);
  //       setprofile(data);
  //     } catch (error) {}
  //   };
  //   // getProfile();
  //   return profile;
  // }, []);
  const getProfile = async () => {
    try {
      const data = await myProfile(token);
      console.log(data);
      setprofile(data);
    } catch (error) {
      console.error(error)
    }
  };
  return (
    <div className="Profile">
      <h1 className="text-center">Profile</h1>
      <button className="btn btn-block btn-primary" onClick={getProfile}>
        {" "}
        Get Profile
      </button>
    </div>
  );
};

export default Profile;
