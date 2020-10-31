import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLoading, Oval, TailSpin } from "@agney/react-loading";
import { Editor } from "@tinymce/tinymce-react";
import { Markup } from "interweave";
import { viewBlog, addComment } from "../scripts/api-calls";
import { getRelativeTime, getFullname } from "../scripts/helper";
import CommentCard from "../Templates/CommentCard";
import Error from "./Error";

const BlogPost = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [loading, setloading] = useState(true);
  const { containerProps, indicatorEl } = useLoading({
    loading,
    indicator: <Oval width="100" />,
    loaderProps: {
      style: { color: "#007BFF" },
    },
  });
  const [error, seterror] = useState("");
  useEffect(() => {
    return setTimeout(() => {
      seterror("");
    }, 5000);
  }, [error, seterror]);

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [commentTitle, setCommentTitle] = useState("");
  const [commentContent, setCommentContent] = useState(
    "<p>Enter you comment here</p>"
  );
  useEffect(() => {
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
        setComments(data.comment.reverse());
        setloading(false);
      } catch (error) {
        console.error(error);
        setloading(false);
      }
    };
    fetchPost();
  }, [id, token, commentTitle, setCommentTitle]);

  const handleEditorChange = (content, editor) => {
    setCommentContent(content);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (commentTitle.trim().length === 0) {
      seterror("Comment title can't be empty");
      return;
    } else if (commentContent.trim().length === 0) {
      seterror("Comment content can't be empty. Template text isn't accepted");
      return;
    } else {
      setPosting(true);
      newComment();
    }
  };

  const [posting, setPosting] = useState(false);
  const newComment = async () => {
    try {
      const data = await addComment(
        id,
        { title: commentTitle, content: commentContent },
        token
      );
      setPosting(false);
      if (!data.error) {
        setCommentTitle("");
        setCommentContent("<p>Enter you comment here</p>");
      }
    } catch (error) {
      setPosting(false);
      console.error(error);
    }
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
            <div className="card-text">
              <Markup content={post.content} />
            </div>
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
                "undo redo | formatselect | bold italic backcolor | " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist outdent indent | removeformat | help",
            }}
            onEditorChange={handleEditorChange}
            value={commentContent}
          />
          <button
            className={`btn btn-block ${
              posting ? "btn-secondary" : "btn-outline-secondary"
            }`}
            onClick={handleClick}
            disabled={posting}
          >
            {!posting && "Post your Comment"}
            {posting && <TailSpin width="20" />}
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
