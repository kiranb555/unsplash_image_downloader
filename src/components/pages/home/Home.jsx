import React, { useState, useEffect } from "react";
import Axios from "axios";
import Keys from "../../../service/key.json";
import SearchBar from "../../searchBar";
import Card from "../../cards";
import "./Home.style.scss";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // initial reandom images to display
    Axios.get(
      `https://api.unsplash.com/photos?page=1&client_id=${Keys.acces_key}`
    )
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  const searchBarHandler = (e) => {
    let { value, key } = e.target;
    setSearchValue(value);
  };

  const onEnterHandler = (e) => {
    //fetching search images on pressing Enter key
    if (e.charCode === 13) {
      // &per_page=9
      Axios.get(
        `https://api.unsplash.com/search/photos?client_id=${Keys.acces_key}&query=${searchValue}`
      )
        .then((res) => setData(res.data.results))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="home">
      Home page
      <SearchBar
        handler={searchBarHandler}
        onEnterHandler={onEnterHandler}
        value={searchValue}
      />
      <div className="home_card_holder">
        {data.length > 0
          ? data.map((element, i) => <Card key={element.id} data={element} />)
          : null}
      </div>
    </div>
  );
};

export default Home;
