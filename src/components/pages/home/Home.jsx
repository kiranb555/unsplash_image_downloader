import React, { useState, useEffect } from "react";
import Axios from "axios";
import Keys from "../../../service/key.json";
import SearchBar from "../../searchBar";
import Card from "../../cards";
import Pagination from "../../pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./Home.style.scss";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setimagesPerPage] = useState(9);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const res = await Axios.get(
        `https://api.unsplash.com/photos?per_page=100&client_id=${Keys.acces_key}`
      );
      setData(res.data);
      setLoading(false);
    };
    fetchImages();
  }, []);

  const searchBarHandler = (e) => {
    let { value } = e.target;
    setSearchValue(value);
  };

  const onEnterHandler = (e) => {
    //fetching search images on pressing Enter key

    // &per_page=9

    const fetchImages = async () => {
      setLoading(true);
      const res = await Axios.get(
        `https://api.unsplash.com/search/photos?client_id=${Keys.acces_key}&query=${searchValue}`
      );
      setData(res.data.results);
      setLoading(false);
    };
    if (e.charCode === 13) {
      fetchImages();
    }
  };

  const indexOfLastPost = currentPage * imagesPerPage;
  const indexOfFirstPost = indexOfLastPost - imagesPerPage;
  const currentImages = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="home">
      <SearchBar
        handler={searchBarHandler}
        onEnterHandler={onEnterHandler}
        value={searchValue}
      />

      {loading && (
        <div className="home_spinner">
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      )}

      <div className="home_card_holder">
        {currentImages.length > 0 ? (
          currentImages.map((element, i) => (
            <Card key={element.id} data={element} />
          ))
        ) : loading === false ? (
          <div>No data to display</div>
        ) : null}
      </div>

      <Pagination
        imagesPerPage={imagesPerPage}
        totalImages={data.length}
        paginationHandler={(e) => setCurrentPage(e)}
      />
    </div>
  );
};

export default Home;
