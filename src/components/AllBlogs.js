import React, { useState, useEffect } from "react";
import { getAllBlogs } from "../Api/api";
import Error from "./Error";

const AllBlogs = () => {
  const [blogs, setblogs] = useState([]);
  const [error, seterror] = useState("");

  const handleClick = async () => {
    try {
      const token = localStorage.getItem("token");
      const blogs = await getAllBlogs(token);
      console.log(blogs);
      setblogs(blogs);
    } catch (error) {
      seterror(error);
    }
  };
  return (
    <div className="Blog">
      <h1 className="text-center">Blog</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Get All Blogs
      </button>
      {error.length > 0 && <Error error={error} />}
    </div>
  );
};

export default AllBlogs;
