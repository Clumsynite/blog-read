import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLoading, Oval } from "@agney/react-loading";
import Error from "./Error";
import { viewBlog } from "../scripts/api-calls";
import { getRelativeTime, getFullname } from "../scripts/helper";

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
            `Blog Post not found. There's a Problem fetching Post: ${id}`
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
      {post.title && !loading && (
        <div className="card shadow rounded">
          <div className="card-body">
            <h1 className="card-title text-center">{post.title}</h1>
            <div className="card-subtitle mb-2 text-muted d-flex justify-content-between flex-wrap">
              <div className="d-flex align-items-center">
                <i className="material-icons mr-1">account_circle</i>
                {getFullname(post.author)}
                <strong>
                  <span className="badge badge-pill badge-dark mx-1">AKA</span>
                </strong>
                {post.author.username}
              </div>
              <div className="d-flex align-items-center">
                <i className="material-icons mr-1">access_time</i>
                {getRelativeTime(post.added)}
              </div>
            </div>
            <div className="card-text">{post.content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
