import React from "react";
import "./Pagination.style.scss";

const Pagination = ({ imagesPerPage, totalImages, paginationHandler }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((el) => (
          <li key={el} className="page-item">
            <a href="#!" onClick={() => paginationHandler(el)}>
              {el}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
