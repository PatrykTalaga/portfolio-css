import { useEffect, useRef } from "react";
import Calculator from "./Calculator";

export default function SmallerProjects() {
  const refCalc = useRef<HTMLDialogElement>(null); //react strict mode opens dialog element
  useEffect(() => {
    const dialogCalc = refCalc.current;
    /*  dialogCalc.showModal(); */
    if (dialogCalc)
      return () => {
        /*  dialogCalc.showModal(); */
        dialogCalc.close();
      };
  }, []);

  function openCalculator() {
    const calculatorDialog = document.getElementById(
      "calculator-app"
    ) as HTMLDialogElement;
    if (calculatorDialog) {
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
      <dialog ref={refCalc} id="calculator-app" className="modal-image" open>
        <Calculator />
        <h1 onClick={() => closeCalculator()}>
          <span className="close-x">X</span> Close
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
