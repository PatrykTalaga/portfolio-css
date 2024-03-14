import contactData from "../assets/cv";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contacts-container">
      <h1>Kontakt</h1>
      <div>
        <p>
          <b>tel.: </b>
          {`(${contactData.telRegionalString}) ${contactData.telString}`}
        </p>
        <p>
          <b>email: </b>
          {contactData.eMail}
        </p>
      </div>
    </div>
  );
}
