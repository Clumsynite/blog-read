import React, { useState, useEffect } from "react";
// import axios from "axios";
import Error from "./Error";

const AllBlogs = () => {
  const allBlogsUrl = "https://clumsy-blog.herokuapp.com/blog/all";

  const [blogs, setblogs] = useState([]);
  const [error, seterror] = useState("");
  const token = localStorage.getItem('token')
  const getAllBlogs = async () => {
    try {
      const response = await fetch(allBlogsUrl, {
        mode: "cors",
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      // console.log(response)
      console.log(data);
      setblogs(data);
      return response;
    } catch (error) {
      console.log(error);
      seterror(error);
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
      {error.length > 0 && <Error error={error} />}
    </div>
  );
};

export default AllBlogs;
