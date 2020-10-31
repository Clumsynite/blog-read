import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { viewBlog } from "../scripts/api-calls";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchPost = async () => {
      try {
        const data = await viewBlog(id, token);
        console.log(data);
        setPost(data.blog);
        setComments(data.comment);
      } catch (error) {
        console.error(error);
        seterror(error);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div>
      <h3>ID: {id} </h3>
    </div>
  );
};

export default BlogPost;
