import React, { useState, useEffect } from "react";
import { useLoading, Bars } from "@agney/react-loading";
import { getAllBlogs } from "../scripts/api-calls";
import Error from "./Error";
import { getRelativeTime, getContentPreview, getFullname } from "../scripts/helper";

const AllBlogs = () => {
  const [loading, setloading] = useState(true);
  const { containerProps, indicatorEl } = useLoading({
    loading,
    indicator: <Bars width="100" />,
    loaderProps: {
      style: { color: "#00ffbf" },
    },
  });
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const token = localStorage.getItem("token");
        const blogs = await getAllBlogs(token);
        setblogs(blogs);
        setloading(false);
      } catch (error) {
        setloading(false);
        seterror(error);
      }
    };
    getBlogs();
  }, []);

  const [error, seterror] = useState("");

  const blogsMap = blogs.map((blog, index) => {
    const { author, title, content, added } = blog;
    return (
      <div
        key={index}
        className="card text-white bg-primary shadow mb-4 bg-white rounded"
      >
        <div className="card-header text-center bg-dark">{title}</div>
        <div className="card-body bg-light text-dark">
          <div className="card-text ">{getContentPreview(content)}</div>
        </div>
        <div className="card-footer text-white bg-primary text-right d-flex justify-content-between flex-wrap">
          <div className="d-flex align-items-center">
            By {getFullname(author)}
            <strong>
              <span className="badge badge-pill badge-dark mx-1"> AKA </span>
            </strong>
            {author.username}
          </div>
          <div className="d-flex align-items-center">
            <i className="material-icons mr-1">access_time</i>
            {getRelativeTime(added)}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="Blog">
      {loading && (
        <div className="text-center" {...containerProps}>
          {indicatorEl}
        </div>
      )}
      {blogs.length > 0 && blogsMap}
      {error.length > 0 && <Error error={error} />}
    </div>
  );
};

export default AllBlogs;
