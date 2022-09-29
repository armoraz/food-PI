import styles from "./Form.module.css";
import { useInput } from "../hooks";
import { useState } from "react";
import { useSelector } from "react-redux";
import { setFilteredRecipes } from "../actions";

//Funcion validadora
const isNotEmpty = (value) => value.trim() !== "";

const isScoreOk = (value) => {
  if (value.trim() === "") return false;
  if (value < 0 || value > 100) return false;
  return true;
};

//Validacion dietas
const isArrayNotEmpty = (array) => array.length > 0;

export default function Form() {
  const diets = useSelector((state) => state.food.diets);

  const listDiets = diets.map((element) => element.name);

  const [isSubmitted, setIsSummited] = useState(false);
  const [availableDiets, setAvailableDiets] = useState(listDiets);
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState("");
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
  } = useInput(isScoreOk);

  //Validaciones
  let formIsValid = false;
  const dietsIsValid = isArrayNotEmpty(selectDiets.selectedDiets);

  if (nameIsValid && healthScoreIsValid && summaryIsValid && dietsIsValid) {
    formIsValid = true;
  }

  //EVENT HANDLERS
  function setDietsHandler(e) {
    setAvailableDiets([
      ...availableDiets.filter((diet) => diet !== e.target.value.toLowerCase()),
    ]);
    setSelectDiets({
      ...selectDiets,
      selectedDiets: [
        ...selectDiets.selectedDiets,
        e.target.value.toLowerCase(),
      ],
    });
  }

  function removeDietsHandler(e) {
    setAvailableDiets([...availableDiets, e.target.innerText.toLowerCase()]);
    setSelectDiets({
      ...selectDiets,
      selectedDiets: [
        ...selectDiets.selectedDiets.filter(
          (element) => element !== e.target.innerText.toLowerCase()
        ),
      ],
    });

    console.log(selectDiets.selectedDiets);
  }

  function stepHandler(e) {
    setStep(e.target.value);
  }

  function instructionsHandler() {
    setSteps([...steps, { n: steps.length + 1, step: step }]);
    setStep("");
  }

  function removeStepsHandler(n) {
    const filter = steps.filter((element) => {
      if (element.n !== n) return element;
    });

    //RESTABLECIENTO LA NUMERACION DE PASOS
    for (let i = 0; i < filter.length; i++) {
      filter[i].n = i + 1;
    }

    setSteps([...filter]);
  }

  ///SUBMIT
  async function submitHandler(e) {
    e.preventDefault();

    if (!formIsValid) {
      return alert("ERROR: Invalid inputs");
    }

    const responseBody = {
      name: nameValue,
      summary: summaryValue,
      healthScore: healthScoreValue,
      diets: selectDiets.selectedDiets,
      instructions: steps,
    };
    try {
      const res = await fetch("http://localhost:3001/recipes", {
        method: "POST",
        body: JSON.stringify(responseBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await res.json();

      if (res.status === 200) {
        resetSummary();
        resetName();
        resetHealthScore();
        setSteps([]);
        setSelectDiets({ selectedDiets: [], value: "dietas" });
        setIsSummited(true);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div>
      {isSubmitted && (
        <div>
          <img
            alt="done symbol"
            src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Done-accept-others-inmotus-design-2.png"
          />
          <h2>Recipe created!</h2>
          <button
            className={styles.add}
            onClick={(e) => setIsSummited(false)}
            type="button"
          >
            Crear nueva receta
          </button>
        </div>
      )}
      {!isSubmitted && (
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
                    <span
                      className={styles.itemListDiets}
                      onClick={removeDietsHandler}
                      key={index}
                    >
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
            <div className={styles.instructionsContainer}>
              <div className={styles.instructionsContainerHead}>
                <label className={styles.label} htmlFor="instructions">
                  Instructions:{""}
                </label>
                <input
                  placeholder="Some step..."
                  id="instructions"
                  type="text"
                  value={step}
                  onChange={stepHandler}
                ></input>
                <button type="button" onClick={instructionsHandler}>
                  {" "}
                  Add Step
                </button>
              </div>
              <div className={styles.instructions}>
                <ul className={styles.steps}>
                  {steps.map((s) => {
                    return (
                      <div key={s.n} className={styles.stepContainer}>
                        <span id={styles.stepNumber}>{s.n}</span>
                        <li>{s.step}</li>
                        <span
                          onClick={(e) => removeStepsHandler(s.n)}
                          id={styles.removeStep}
                        >
                          remove
                        </span>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.actionContainer}>
            <button
              disabled={!formIsValid}
              className={`${!formIsValid ? styles.addDisabled : styles.add}`}
              type="submit"
            >
              Agregar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
