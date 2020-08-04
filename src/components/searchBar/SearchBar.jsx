import React from "react";
import "./SearchBar.style.scss";

const SearchBar = ({ handler, onEnterHandler, value }) => {
  return (
    <div className="search_bar">
      <input
        type="text"
        value={value}
        onKeyPress={(e) => onEnterHandler(e)}
        onChange={(e) => handler(e)}
        placeholder="search for more images here..."
      />
    </div>
  );
};

export default SearchBar;
