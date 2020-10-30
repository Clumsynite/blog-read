import React, { useState, useEffect } from "react";
import BlogCard from "../Templates/BlogCard";
import { useLoading, Bars } from "@agney/react-loading";
import { myProfile } from "../scripts/api-calls";
import { getFullname, getRelativeTime } from "../scripts/helper";

const Profile = () => {
  const [loading, setloading] = useState(true);
  const { containerProps, indicatorEl } = useLoading({
    loading,
    indicator: <Bars width="100" />,
    loaderProps: {
      style: { color: "#17A2B8" },
    },
  });
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
        setloading(false);
      } catch (error) {
        console.error(error);
        setloading(false);
      }
    };
    getProfile();
  }, []);

  return (
    <div className="Profile">
      {loading && (
        <div className="text-center" {...containerProps}>
          {indicatorEl}
        </div>
      )}
      {profile.user && (
        <div className="card mb-3 mx-auto" style={{ width: "24rem" }}>
          <div className="card-header bg-dark text-white">
            Joined {getRelativeTime(user.added)}
          </div>
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
