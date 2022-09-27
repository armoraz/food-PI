import React from "react";
import styles from "./Pagination.module.css";
import { useState } from "react";
const { actualPage, nonActualPage } = styles;

const Pagination = ({ props }) => {
  const [classColor, setClassColor] = useState();
  const pageNumbers = [];
  const { itemsPerPage, totalItems, paginate, currentPage } = props;

  for (let i = 0; i < Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  const classColors = [];

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
    <div>
      <ul>
        <span>
          <button className={nonActualPage} onClick={prevButtonHandler}>
            ANTERIOR
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
          <button className={nonActualPage} onClick={nextButtonHandler}>
            SIGUIENTE
          </button>
        </span>
      </ul>
    </div>
  );
};

export default Pagination;
