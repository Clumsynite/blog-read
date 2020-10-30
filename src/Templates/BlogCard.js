import {
  getRelativeTime,
  getContentPreview,
  getFullname,
} from "../scripts/helper";

const Card = (props) => {
  const { author, title, content, added } = props.blog;
  return (
    <div className="card text-white bg-primary shadow mb-4 bg-white rounded">
      <div className="card-header text-center bg-dark">{title}</div>
      <div className="card-body bg-light text-dark">
        <div className="card-text ">{getContentPreview(content)}</div>
      </div>
      <div className="card-footer text-white bg-primary text-right d-flex justify-content-between flex-wrap">
        <div className="d-flex align-items-center">
          By {getFullname(author)}
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
