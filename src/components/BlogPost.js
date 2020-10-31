import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLoading, Oval } from "@agney/react-loading";
import { Editor } from "@tinymce/tinymce-react";
import { viewBlog } from "../scripts/api-calls";
import { getRelativeTime, getFullname } from "../scripts/helper";
import CommentCard from "../Templates/CommentCard";
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

  const [commentTitle, setCommentTitle] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const handleEditorChange = (content, editor) => {
    setCommentContent(content);
  };

  const addComment = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {loading && (
        <div className="text-center my-5" {...containerProps}>
          {indicatorEl}
        </div>
      )}
      {post.title && !loading && (
        <div className="card shadow rounded mb-5">
          <div className="card-body">
            <h1 className="card-title text-center">{post.title}</h1>
            <div className="card-subtitle my-3 text-muted d-flex justify-content-between flex-wrap">
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
      {error.length > 0 > 0 && (
        <div className="w-75 mx-auto">
          <Error error={error} />
        </div>
      )}
      {post.title && (
        <div className="mb-4 shadow">
          <input
            type="text"
            placeholder="Enter Comment Title"
            maxLength="40"
            onChange={(e) => {
              setCommentTitle(e.target.value);
            }}
            value={commentTitle}
            className="form-control"
          />
          <Editor
            apiKey="iegn84mumhivsy1it2lvc8qjfxkaav0snoxsx4u66dxlnz3g"
            initialValue="<p>Enter you comment here</p>"
            init={{
              height: 200,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help",
            }}
            onEditorChange={handleEditorChange}
          />
          <button
            className="btn btn-block btn-outline-secondary"
            onClick={addComment}
          >
            Post your Comment
          </button>
        </div>
      )}
      {comments.length > 0 &&
        comments.map((comment, index) => {
          return <CommentCard comment={comment} key={index} />;
        })}
    </div>
  );
};

export default BlogPost;
