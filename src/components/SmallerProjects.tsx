import Calculator from "./Calculator";

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
      <dialog id="calculator-app" className="modal-image" /* open */>
        <Calculator />
        <h1 onClick={() => closeCalculator()}>
          <span className="close-x">X</span> Zamknij
        </h1>
      </dialog>
      <div className="sm-project-container" onClick={openCalculator}>
        <img
          className="calculator-svg"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>Calculator</p>
        <p>Calculator</p>
      </div>

      <div className="sm-project-container placeholder">
        <img
          className="sm-project-icon"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>placeholder</p>
        <p>placeholder</p>
      </div>

      <div className="sm-project-container placeholder">
        <img
          className="calculator-svg"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>placeholder</p>
        <p>placeholder</p>
      </div>

      <div className="sm-project-container placeholder">
        <img
          className="calculator-svg"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>placeholder</p>
        <p>placeholder</p>
      </div>
    </div>
  );
}
