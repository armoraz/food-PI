import styles from "./Home.module.css";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useSortFilterVerification } from "../hooks";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);

  //Verifica si hay filtrado u ordenamiento
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

  //Reset page
  const resetPage = () => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.home}>
      <NavBar
        itemsPerPage={recipesPerPage}
        paginate={paginate}
        totalItems={ListOfRecipes.length}
        currentPage={currentPage}
        resetPage={resetPage}
      />
      <Cards currentRecipes={currentRecipes} />
    </div>
  );
}
