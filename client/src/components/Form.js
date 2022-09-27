import styles from "./Form.module.css";
import { useInput } from "../hooks";
import { useState } from "react";
import { useSelector } from "react-redux";

//Funcion validadora
const isNotEmpty = (value) => value.trim() !== "";

export default function Form() {
  const diets = useSelector((state) => state.food.diets);
  const [availableDiets, setAvailableDiets] = useState(diets);
  const [selectDiets, setSelectDiets] = useState({
    selectedDiets: [],
    value: "dietas",
  });
  const {
    value: nameValue,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: summaryValue,
    isValid: summaryIsValid,
    valueChangeHandler: summaryChangeHandler,
    inputBlurHandler: summaryBlurHandler,
    hasError: summaryHasError,
    reset: resetSummary,
  } = useInput(isNotEmpty);
  const {
    value: healthScoreValue,
    isValid: healthScoreIsValid,
    valueChangeHandler: healthScoreChangeHandler,
    inputBlurHandler: healthScoreBlurHandler,
    hasError: healthScoreHasError,
    reset: resetHealthScore,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (nameIsValid && healthScoreIsValid && summaryIsValid) {
    formIsValid = true;
  }

  function setDietsHandler(e) {
    setAvailableDiets([
      ...availableDiets.filter((diet) => diet !== e.target.value),
    ]);
    setSelectDiets({
      selectedDiets: [...selectDiets.selectedDiets, e.target.value],
      value: "dietas",
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    if (!formIsValid) return;

    const responseBody = {
      name: nameValue,
      summary: summaryValue,
      healthScore: healthScoreValue,
      diets: selectDiets.selectedDiets,
      instructions: ["Not yet"],
    };
    try {
      const res = await fetch("http://localhost:3001/recipes", {
        method: "POST",
        body: JSON.stringify(responseBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();

      if (response.status === 200) {
        resetSummary();
        resetName();
        resetHealthScore();
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.container}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            className={styles.inputTitle}
          />
          {nameHasError && <p>Se necesita un nombre</p>}
          <label className={styles.label} htmlFor="summary">
            Descripcion:
          </label>
          <textarea
            type="text"
            id="summary"
            rows="8"
            cols="50"
            autoComplete="off"
            value={summaryValue}
            onChange={summaryChangeHandler}
            onBlur={summaryBlurHandler}
            className={styles.inputDescription}
          />
          {summaryHasError && <p>Se necesita una descripcion</p>}
          <label className={styles.label} htmlFor="healthScore">
            Health Score:
          </label>
          <input
            type="number"
            placeholder="100"
            step="1"
            min="0"
            max="100"
            id="healthScore"
            autoComplete="off"
            value={healthScoreValue}
            onChange={healthScoreChangeHandler}
            onBlur={healthScoreBlurHandler}
            className={styles.inputHealthScore}
          />
          {healthScoreHasError && <p>Se necesita puntuacion inicial</p>}
          <label className={styles.label} htmlFor="healthScore">
            Dietas:
          </label>
          <div className={styles.listDiets}>
            {selectDiets.selectedDiets.length < 1 && (
              <p>Ninguna dieta seleccionada</p>
            )}
            {selectDiets && (
              <div>
                {selectDiets.selectedDiets.map((e, index) => (
                  <span className={styles.itemListDiets} key={index}>
                    {e.toUpperCase()}
                  </span>
                ))}
              </div>
            )}
          </div>
          <select
            value={selectDiets.value}
            onChange={(e) => setDietsHandler(e)}
          >
            <option value="dietas" disabled>
              --Seleccionar dietas--
            </option>
            {availableDiets.map((option, i) => {
              return (
                <option key={i} value={option}>
                  {option.toUpperCase()}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.actionContainer}>
          <button className={styles.add} type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}
