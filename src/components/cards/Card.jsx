import React from "react";
import { Link } from "react-router-dom";
import "./Card.style.scss";

const Card = ({ data }) => {
  const { id } = data;
  return (
    <Link
      to={{
        pathname: `/view:${id}`,
        state: {
          data,
        },
      }}
    >
      <div
        className="card"
        style={{
          backgroundImage: `url(${data.urls.regular})`,
          backgroundColor: `${data.color}`,
        }}
      >
        <div className="card_content">
          <div
            className="card_content_img"
            style={{
              backgroundImage: `url(${data.user.profile_image.medium})`,
            }}
          ></div>
          <div className="card_content_txt">
            Image by <b>{data.user.name}</b>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
