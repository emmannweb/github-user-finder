import React from "react";

const ListItem = props => {
  return (
    <div className="col-sm-3  cardbox">
      <div className="card">
        <div className="image_container">
          <img className="user_image" src={props.user.avatar_url} alt="" />
        </div>
        <div className="titleCard">
          <h4>{props.user.login}</h4>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Followers: <b> {"" + props.user.followers_url.length}</b>
          </li>
          <li className="list-group-item">
            {" "}
            Following: <b> {"" + props.user.following_url.length}</b>
          </li>
          <li className="list-group-item">
            <div className="social_icon">
              <span>
                <a
                  href={props.user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
              </span>

              {/* <span>
                <i className="fab fa-github">{props.user.repos_url.length}</i>
              </span> */}

              {/* <span>
                {props.user.repos_url.length}
                <i className="fa fa-folder-open" aria-hidden="true"></i>
              </span> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListItem;
