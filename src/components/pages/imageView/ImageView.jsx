import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";
import "./ImageView.style.scss";

const ImageView = () => {
  const location = useLocation();
  const { id } = useParams();

  let { data } = location.state;

  console.log(id, data);
  return <div>image view page</div>;
};

export default ImageView;
