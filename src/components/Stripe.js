import React from "react";
import styles from "../components/Pages.module.css"

    function Stripe(props) {
        const {title} = props;
            
        return (
            <>
                <div className={styles.stripeCon}>
                    <div dangerouslySetInnerHTML={{__html: title}} className={styles.stripeTitle} ></div>
                </div>
                
            </>
        );
    }

export default Stripe;