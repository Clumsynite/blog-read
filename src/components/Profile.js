import React, { useState, useEffect } from "react";
import { myProfile } from "../scripts/api-calls";

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
      <button className="btn btn-block btn-primary" onClick={() => {console.log(profile)}}>
        {" "}
        Get Profile
      </button>
      {profile.length > 0 && (
        <div className="card">

        </div>
      )}
    </div>
  );
};

export default Profile;
