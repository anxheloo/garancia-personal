import React from "react";
import { useState } from "react";
import classes from "./Form.module.css";
import { Contact_URL } from "../urlexp";
import axios from "axios";
import eAlbaniaLogo from '../assets/img/logoealbania.svg';


const Form = (props) => {
  const [emer, setEmer] = useState("");
  const [email, setEmail] = useState("");
  const [qyteti, setQyteti] = useState("");
  const [telefon, setTelefon] = useState("");
  const [message_status, setMessage_status] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emer || !email || !qyteti || !telefon) {
      return;
    }
    //Per Emer
    const regexEmer = /^[A-Za-z][A-Za-z0-9_]{2,29}$/;
    if (!emer.match(regexEmer)) {
      alert("Emri i pasakte");
      return;
    }
    // Per Email
    const regexEmali =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(regexEmali)) {
      alert("Email i pasakte");
      return;
    }
    // Per Qytetin
    const regexQytet = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    if (!qyteti.match(regexQytet)) {
      alert("Qyteti i pasakte");
      return;
    }
    // Per Telefonin
    const regexTelefon = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (!telefon.match(regexTelefon)) {
      alert("Nr telefonit i pasakte");
      return;
    }
    console.log(Contact_URL);
    let formData = new FormData();
    formData.append("Emer", emer);
    formData.append("Email", email);
    formData.append("Bashkia", qyteti);
    formData.append("Telefon", telefon);

    const config = {
      headers: { "content-type": "multipart/form-data" },
      body: new URLSearchParams({
        "your-name": emer,
        "your-email": email,
        "your-city": qyteti,
        "your-phone": telefon,
      }),
    };

    console.log(emer, email, qyteti, telefon);
    setEmer("");
    setEmail("");
    setQyteti("");
    setTelefon("");

    axios
      .post(Contact_URL, formData, config)
      .then((response) => {
        console.log(response);
        setMessage_status(response.data.message);
        setEmer("");
        setEmail("");
        setQyteti("");
        setTelefon("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={`w-100 d-md-flex flex-column`}>
      {/* <div className={`${classes.inputgrupet} py-4`}>
        <input
          type="text"
          id="Emer"
          name="Emer"
          placeholder="Emër"
          value={emer || ""}
          onChange={(e) => setEmer(e.target.value)}
          className={`${classes.inputet}`}
          required
        />
        <input
          type="email"
          name="Email"
          id="Email"
          placeholder="Email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          className={`${classes.inputet}`}
          required
        />
        <input
          type="text"
          name="Bashkia"
          id="Bashkia"
          placeholder="Bashkia"
          value={qyteti || ""}
          onChange={(e) => setQyteti(e.target.value)}
          className={`${classes.inputet}`}
          required
        />
        <input
          type="text"
          name="Telefon"
          id="Telefon"
          placeholder="Telefon"
          value={telefon || ""}
          onChange={(e) => setTelefon(e.target.value)}
          className={`${classes.inputet}`}
          required
        />
      </div> */}

      <button
        type="button"  // Use type="button" to prevent form submission if this button is inside a form
        className={`btn col-md-6 ${classes.butonstyles} mt-3 d-flex justify-content-center align-items-center`}
        onClick={() => window.open("https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=15266", "_blank")}
      >
        <p className="m-0">APLIKO</p>
        <img src={eAlbaniaLogo} className="logo-eAlbania-contact" alt="eAlbania Logo" />
      </button>

      <p className="pt-2 fw-bold">*Apliko për Programin e Garancisë Rinore (Punësim, Arsim dhe Formim Profesional)</p>
      <div className="message_status pt-3">
        {message_status ? <p>{message_status}</p> : null}
      </div>
    </form>
  );
};

export default Form;
