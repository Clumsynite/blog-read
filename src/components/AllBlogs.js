import React, { useState, useEffect } from "react";
import axios from "axios";

const AllBlogs = () => {
  const allBlogsUrl = "https://clumsy-blog.herokuapp.com/blog/all";
  const [blogs, setblogs] = useState([]);

  const getAllBlogs = async () => {
    try {
      const response = await axios.get(allBlogsUrl);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response);
      return error;
    }
  };
  const handleClick = async () => {
    const blogs = await getAllBlogs();
    console.log(blogs);
  };
  return (
    <div className="Blog">
      <h1 className="text-center">Blog</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Get All Blogs
      </button>
    </div>
  );
};

export default AllBlogs;
