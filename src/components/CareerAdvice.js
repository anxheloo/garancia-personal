import React from "react";
import styles from "../components/Pages.module.css"


    function CareerAdvice(props) {
        const {backgroundColor} = props;
        const {title} = props;
        const {src} = props;
        const {foto} = props;
        const containerStyle = {
            backgroundColor: backgroundColor || "#FE4B00" || '#00B907',
          };
          
        return (
            <>
                <div className={`container-fluid col-xl-6 col-12 d-flex flex-column flex-xl-row p-0 m-0`} style={containerStyle } >
                    <div className={`position-relative ${styles.CareerAdviceCon}`}>
                        <img src={src} className={`${styles.imgAdCareer}`}></img>
                        <p dangerouslySetInnerHTML={{__html: title}} className={styles.descCareerAd}></p>
                    </div>
                    <img src={foto} className={`${styles.CareerAdvicePhoto}`}></img>
                </div>
            </>
        );
    }

export default CareerAdvice;