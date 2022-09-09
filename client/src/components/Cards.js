import Card from "./Card";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "./Pagination";

export default function Cards() {
  const { isLoading, errorOnLoad, recipes } = useSelector(
    (state) => state.recipes
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);

  const ListOfRecipes = [...recipes];

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
              return (
                <Card
                  id={e.id}
                  img={e.img}
                  diets={e.diets}
                  name={e.name}
                  key={index}
                />
              );
            })}
          </ul>
          <Pagination
            itemsPerPage={recipesPerPage}
            paginate={paginate}
            totalItems={ListOfRecipes.length}
          />
        </div>
      )}
      {isLoading && <p className={styles.load}>...Loading</p>}
      {!isLoading && errorOnLoad && <p>{errorOnLoad}</p>}
    </div>
  );
}
