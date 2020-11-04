import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BlogCard from "../Templates/BlogCard";
import CommentCard from "../Templates/CommentCard";
import { useLoading, Bars } from "@agney/react-loading";
import { viewUser } from "../scripts/api-calls";
import { getFullname, getRelativeTime } from "../scripts/helper";

const ViewUser = () => {
  const { id } = useParams();
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
        const data = await viewUser(id, token);
        setprofile({
          user: data.user,
          blogs: data.blogs.reverse(),
          comments: data.comments.reverse(),
        });
        setUser(data.user);
        setRender("blogs");
        setloading(false);
      } catch (error) {
        console.error(error);
        setloading(false);
      }
    };
    getProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="User">
      {loading && (
        <div className="text-center" {...containerProps}>
          {indicatorEl}
        </div>
      )}
      {profile.user && (
        <div
          className="card mb-4 mx-auto shadow rounded"
          style={{ width: "19rem" }}
        >
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
      {render === "blogs" && profile.blogs.length === 0 && (
        <div className="alert alert-info mx-auto w-75">
          You haven't Posted anything yet
        </div>
      )}
      {render === "blogs" &&
        profile.blogs.length > 0 &&
        profile.blogs.map((blog, index) => {
          blog.author = user;
          return <BlogCard blog={blog} key={index} />;
        })}

      {render === "comments" && profile.comments.length === 0 && (
        <div className="alert alert-info mx-auto w-75">
          You haven't made any comments yet
        </div>
      )}
      {render === "comments" &&
        profile.comments.length > 0 &&
        profile.comments.map((comment, index) => {
          const { blog } = comment;
          comment.author = user;
          return (
            <div className="shadow" key={index}>
              <Link to={`/blog/${blog._id}/view`} className="link-white ">
                <div className="card-header text-center bg-dark text-light align-items-center">
                  You commented on <code>{blog.title}</code>
                </div>
              </Link>
              <CommentCard comment={comment} />
            </div>
          );
        })}
    </div>
  );
};

export default ViewUser;
