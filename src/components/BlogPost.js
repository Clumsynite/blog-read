import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>ID: {id} </h3>
    </div>
  );
};

export default BlogPost;
