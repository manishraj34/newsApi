import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <span className="badge bg-success">{source}</span>
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://feeds.abplive.com/onecms/images/uploaded-images/2022/10/24/81808dc20572dd3939c864ec044ad3311666636051865375_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-primary">
                By {author ? author : "Unkoown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
