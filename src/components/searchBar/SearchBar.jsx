import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.style.scss";

const SearchBar = ({ handler, onEnterHandler, value }) => {
  return (
    <div className="search_bar">
      <input
        type="text"
        value={value}
        onKeyPress={(e) => onEnterHandler(e)}
        onChange={(e) => handler(e)}
        placeholder="type & enter to search images"
      />
      <span>
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </div>
  );
};

export default SearchBar;
