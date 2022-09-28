import React from "react";
import styles from "./Pagination.module.css";
import { useState } from "react";
const { actualPage, nonActualPage, list, pagination, next, prev } = styles;

const Pagination = ({ props }) => {
  const pageNumbers = [];
  const { itemsPerPage, totalItems, paginate, currentPage } = props;

  for (let i = 0; i < Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  function prevButtonHandler() {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  }

  function nextButtonHandler() {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  }
  function pageHandler(e, number) {
    paginate(number);
    //USar CurrentO
  }

  return (
    <div className={pagination}>
      <ul className={list}>
        <span>
          <button
            id={prev}
            className={nonActualPage}
            onClick={prevButtonHandler}
          >
            {"<"}
          </button>
        </span>
        {pageNumbers.map((number) => (
          <span key={number}>
            <button
              id={number}
              className={`${
                currentPage === number ? actualPage : nonActualPage
              }`}
              onClick={(e) => pageHandler(e, number)}
            >
              {number}
            </button>
          </span>
        ))}
        <span>
          <button
            id={next}
            className={nonActualPage}
            onClick={nextButtonHandler}
          >
            {">"}
          </button>
        </span>
      </ul>
    </div>
  );
};

export default Pagination;
