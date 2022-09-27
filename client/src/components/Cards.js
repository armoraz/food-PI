import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";

function Cards({ currentRecipes }) {
  const { isLoading, errorOnLoad } = useSelector((state) => state.ui);

  return (
    <div className={styles.container}>
      {!isLoading && (
        <div>
          <ul className={styles.list}>
            {currentRecipes.map((e, index) => {
              return <Card item={e} key={index} />;
            })}
          </ul>
        </div>
      )}

      {isLoading && <p>...Loading</p>}
      {!isLoading && errorOnLoad && <p>{errorOnLoad}</p>}
    </div>
  );
}

export default Cards;
