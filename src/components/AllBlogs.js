import React, { useState, useEffect } from "react";
import { useLoading, Bars } from "@agney/react-loading";
import { getAllBlogs } from "../scripts/api-calls";
import BlogCard from "../Templates/BlogCard";
import Error from "./Error";

const AllBlogs = () => {
  const [loading, setloading] = useState(true);
  const { containerProps, indicatorEl } = useLoading({
    loading,
    indicator: <Bars width="100" />,
    loaderProps: {
      style: { color: "#007BFF" },
    },
  });
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const token = localStorage.getItem("token");
        const blogs = await getAllBlogs(token);
        setblogs(blogs.reverse());
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
    return <BlogCard blog={blog} key={index} />;
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
