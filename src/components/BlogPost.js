import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLoading, Oval } from "@agney/react-loading";
import { viewBlog } from "../scripts/api-calls";
import Error from "./Error";

const BlogPost = () => {
  const { id } = useParams();
  const [loading, setloading] = useState(true);
  const { containerProps, indicatorEl } = useLoading({
    loading,
    indicator: <Oval width="100" />,
    loaderProps: {
      style: { color: "#007BFF" },
    },
  });
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchPost = async () => {
      try {
        const data = await viewBlog(id, token);
        if (data.error) {
          setloading(false);
          seterror(
            `Blog Post not found. There's a Problem fetching Post:${id}`
          );
          return;
        }
        setPost(data.blog);
        setComments(data.comment);
        setloading(false);
      } catch (error) {
        console.error(error);
        setloading(false);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div>
      <h3>ID: {id} </h3>
      {loading && (
        <div className="text-center my-5" {...containerProps}>
          {indicatorEl}
        </div>
      )}
      {error.length > 0 > 0 && (
        <div className="w-75 mx-auto">
          <Error error={error} />
        </div>
      )}
    </div>
  );
};

export default BlogPost;
