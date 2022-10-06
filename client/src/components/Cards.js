import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";

function Cards({ currentRecipes }) {
  const { isLoading, errorOnLoad } = useSelector((state) => state.ui);

  return (
    <div className={styles.container}>
      {!isLoading && (
        <ul className={styles.list}>
          {currentRecipes.map((e, index) => {
            return <Card item={e} key={index} />;
          })}
        </ul>
      )}

      {isLoading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
      {!isLoading && errorOnLoad && <p>{errorOnLoad}</p>}
    </div>
  );
}

export default Cards;
