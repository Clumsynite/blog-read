import React, { useState, useEffect } from "react";
import { useLoading, Bars } from "@agney/react-loading";

import { getAllBlogs } from "../Api/api";
import Error from "./Error";

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
    return blogs;
  }, [blogs, setblogs]);

  const [error, seterror] = useState("");

  const blogsMap = blogs.map((blog, index) => {
    const { author, title, content, added } = blog;
    const fullname = `${author.firstname} ${author.lastname}`;
    const previewContent = `${content.substr(0, 150)}...`;
    return (
      <div key={index}>
        <div>{title}</div>
        <div>
          {fullname} AKA {author.username}
        </div>
        <div>{previewContent}</div>
        <div>{added}</div>
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
