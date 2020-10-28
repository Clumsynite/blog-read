import React, { useState, useEffect } from "react";
import axios from "axios";

const AllBlogs = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {});
  return (
    <div className="Blog">
      <h1 className="text-center">Blog</h1>
    </div>
  );
};

export default AllBlogs;
