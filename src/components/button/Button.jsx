import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./Button.style.scss";

const Button = ({ text, handler, spinner }) => {
  return (
    <button className="button" onClick={() => handler()}>
      {text} &nbsp;
      <>{spinner && <FontAwesomeIcon icon={faSpinner} spin />}</>
    </button>
  );
};

export default Button;
