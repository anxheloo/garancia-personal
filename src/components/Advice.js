import React from "react";
import styles from "../components/Pages.module.css"


    function Advice(props) {
        const {name, backgroundColor} = props;
        const {title} = props;
        const {src} = props;
        const {foto} = props;
        const containerStyle = {
            backgroundColor: backgroundColor || "#FE4B00" || '#00B907',
          };
          
        return (
            <>
                <div className={`container-fluid d-flex flex-column flex-xl-row justify-content-between align-items-center align-items-xl-end ${styles.adviceCon}`} style={containerStyle } >
                    
                    <img src={src} className={`pb-0 ${styles.img1}`}></img>

                    <div className={styles.adviceConDesc}>
                        <div dangerouslySetInnerHTML={{__html: title}} className={`p-xl-4 p-lg-4 p-md-0 p-0 pb-4  ${styles.title}`} ></div>
                        <div dangerouslySetInnerHTML={{__html: name}}  className={` ${styles.desc}`}></div>   
                    </div>
                    <img src={foto} className={`p-0 ${styles.img2}`}></img>
                </div>
            </>
        );
    }

export default Advice;