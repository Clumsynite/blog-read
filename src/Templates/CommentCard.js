import { Link } from "react-router-dom";
import { getRelativeTime, getFullname } from "../scripts/helper";
import "../styles/BlogCard.css";

const Card = (props) => {
  const { author, title, content, added, blog } = props.comment;
  return (
    <div className="card shadow rounder mb-5">
      <Link to={`/blog/${blog._id}/view`} className="link">
        <div className="card-header text-center bg-dark text-light align-items-center">
          You commented on <code>{blog.title}</code>
        </div>
        <div className="card-body bg-light text-dark">
          <h4 className="card-title">{title}</h4>
          <div className="card-text ">{content}</div>
        </div>
      </Link>
      <div className="card-footer text-white bg-secondary text-right d-flex justify-content-between flex-wrap">
        <div className="d-flex align-items-center">
          <i className="material-icons mr-1">account_circle</i>
          {getFullname(author)}
          <strong>
            <span className="badge badge-pill badge-dark mx-1"> AKA </span>
          </strong>
          {author.username}
        </div>
        <div className="d-flex align-items-center">
          <i className="material-icons mr-1">access_time</i>
          {getRelativeTime(added)}
        </div>
      </div>
    </div>
  );
};

export default Card;
