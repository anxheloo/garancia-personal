import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Element.module.css";

const Element = ({ logoSrc, linkToSrc, text, currentType, textToDisplay }) => {
  let newText = text.replace(/ /g, "-");

  return (
    <Link
      to={`/eventet${linkToSrc}`}
      id={
        currentType === newText.toLowerCase()
          ? styles.activeElement
          : styles.element
      }
    >
      <div id={styles.imageContainer}>
        <img src={logoSrc} alt="icon"></img>
      </div>
      <div>{textToDisplay ? textToDisplay : text}</div>
    </Link>
  );
};

export default Element;
