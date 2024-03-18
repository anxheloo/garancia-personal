// List.js
import React from "react";
import styles from "./ListRow.module.css";

function List(props) {
  const { desc, title } = props;
  const { src, alt, width } = props;

  return (
   
      <div
        className={`container-fluid d-flex flex-column flex-xl-row align-items-start ${styles.ListCon}`}
      >
        <div
          className={`d-flex justify-content-center align-items-center col-6 col-md-3 col-lg-2 col-xl-2 ${styles.ListImgCon}`}
        >
          <img src={src} width={width} alt={alt} className={styles.ListImg} />
        </div>

        <div className={` ${styles.ListDesc}`}>
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            className={`pl-0 pr-0 pt-0 pb-2 pb-md-3 pb-lg-0 px-0 ${styles.ListTitle}`}
          ></div>
          <div
            dangerouslySetInnerHTML={{ __html: desc }}
            className={`p-0 ${styles.Listdesc}`}
          ></div>
        </div>
      </div>
    
  );
}

export default List;
