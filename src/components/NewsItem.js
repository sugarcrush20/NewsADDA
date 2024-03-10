import React from "react";

const NewsItem = (props) => {
  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div className="my-3 mx-4">
      <div className="card">
        {/* <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              position: "absolute",
              right: "1",
            }}
          > */}
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-success"
          style={{ left: "15%", zIndex: "1" }}
        >
          {source}
        </span>
        {/* </div> */}
        <img src={imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text text-secondary">
            <small className="etxt-muted">
              By {author} on {new Date(date).toGMTString()}
            </small>{" "}
          </p>
          <a
            href={newsurl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
