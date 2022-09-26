import React from "react";
import styles from "./Pagination.module.css";
import { useState } from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const [classColor, setClassColor] = useState(styles.nonActualPage);
  const pageNumbers = [];

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
    if (e.tar) e.target.className = `${styles.actualPage}`;
    setClassColor(styles.nonActualPage);
    paginate(number);
  }

  return (
    <div>
      <ul>
        <span>
          <button onClick={prevButtonHandler}>ANTERIOR</button>
        </span>
        {pageNumbers.map((number) => (
          <span key={number}>
            <button
              id={number}
              className={classColor}
              onClick={(e) => pageHandler(e, number)}
            >
              {number}
            </button>
          </span>
        ))}
        <span>
          <button onClick={nextButtonHandler}>SIGUIENTE</button>
        </span>
      </ul>
    </div>
  );
};

export default Pagination;
