import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "./Pagination";
import { useSortFilterVerification } from "../hooks";

function Cards() {
  const { isLoading, errorOnLoad } = useSelector((state) => state.ui);

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);

  const ListOfRecipes = useSortFilterVerification();

  // Get current posts
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = ListOfRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      {!isLoading && (
        <div>
          <ul className={styles.list}>
            {currentRecipes.map((e, index) => {
              return <Card item={e} key={index} />;
            })}
          </ul>
          <Pagination
            itemsPerPage={recipesPerPage}
            paginate={paginate}
            totalItems={ListOfRecipes.length}
          />
        </div>
      )}
      {isLoading && <p>...Loading</p>}
      {!isLoading && errorOnLoad && <p>{errorOnLoad}</p>}
    </div>
  );
}

export default Cards;
