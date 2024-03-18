import React from "react";
import styles from "./NotFound.module.css"
import Header from "../components/Header";
import PFA from "../components/PFA";

function NotFound (){
return(
    <div>
        <Header/>
        <PFA/>
        <div className={styles.NotFound}>
            <p className={styles.firstLine}>404</p>
            <p className={styles.secondLine}>Faqja nuk u gjet</p>
        </div>
    </div>
)
}

export default NotFound;