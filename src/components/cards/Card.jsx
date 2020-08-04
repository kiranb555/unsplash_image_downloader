import React from "react";
import { Link } from "react-router-dom";
import "./Card.style.scss";

const Card = ({ data }) => {
  console.log(data);

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
        card goes here
      </div>
    </Link>
  );
};

export default Card;
