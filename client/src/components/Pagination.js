import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <span key={number} className="page-item">
            <button onClick={() => paginate(number)}>{number}</button>
          </span>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
