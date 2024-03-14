import Calculator from "./Calculator";
import "./smallerProjects.css";

export default function SmallerProjects() {
  function openCalculator() {
    const calculatorDialog = document.getElementById(
      "calculator-app"
    ) as HTMLDialogElement;
    if (calculatorDialog) {
      calculatorDialog.close();
      calculatorDialog.style.display = "flex";
      calculatorDialog.showModal();
    }
  }
  function closeCalculator() {
    const calculatorDialog = document.getElementById(
      "calculator-app"
    ) as HTMLDialogElement;
    if (calculatorDialog) {
      calculatorDialog.style.display = "none";
      calculatorDialog.close();
    }
  }

  return (
    <div className="smaller-projects">
      <dialog id="calculator-app" className="calculator-dialog" /* open */>
        <h1 onClick={() => closeCalculator()}>
          <span className="close-x">X</span> Zamknij
        </h1>
        <Calculator />
      </dialog>
      <div className="sm-project-container" onClick={openCalculator}>
        <img
          className="sm-project-icon"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>Calculator</p>
        <p>Calculator</p>
      </div>

      <div className="sm-project-container green-bg">
        <img
          className="sm-project-icon"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>placeholderplaceholderplaceholder</p>
        <p>placeholder placeholder placeholder placeholder placeholder</p>
      </div>

      <div className="sm-project-container red-bg">
        <img
          className="sm-project-icon"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>placeholderplaceholderplaceholder</p>
        <p>placeholder placeholder placeholder placeholder placeholder</p>
      </div>

      <div className="sm-project-container green-bg">
        <img
          className="sm-project-icon"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>placeholder</p>
        <p>placeholder</p>
      </div>

      <div className="sm-project-container green-bg">
        <img
          className="sm-project-icon"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>placeholder</p>
        <p>placeholder</p>
      </div>
    </div>
  );
}
