import React from "react";
import styles from "../components/Pages.module.css";

function DescriptionTwo(props) {
  const { name, desc, title, backgroundColor } = props;

  const containerStyle = {
    backgroundColor: backgroundColor || "#FE4B00",
  };

  const {src} = props;

  return (
    <>
      <div className={`container-fluid d-flex ${styles.ProfPracticesCon}`} style={containerStyle}>
        <div className={styles.arrowImg}>
          <img src={src} alt="Arrow" />
        </div>
        <div className={styles.ProfPracticesDesc}>
          <div dangerouslySetInnerHTML={{ __html: title }} className={styles.title}></div>
          <div className={`container-fluid d-flex flex-column flex-md-row justify-content-center px-0 ${styles.ProfPracticeDescCon}`}>
            <div dangerouslySetInnerHTML={{ __html: name }} className={styles.desc}></div>
            <div dangerouslySetInnerHTML={{ __html: desc }} className={styles.desc}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DescriptionTwo;
