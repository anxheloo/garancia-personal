import React from "react";
import styles from "../components/Pages.module.css"

const CoverImg = (props) => {
    const {src, alt, width} = props
    return(
        <>
           <img src={src} width={width} alt={alt} className={styles.coverImg}></img>
        </>
    )
};

export default CoverImg;