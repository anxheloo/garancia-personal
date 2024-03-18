import React from "react";
import classes from './Keshilla.module.css'

const Imazh = (props) => {

    return(
        <>
        <div className={`position-absolute text-light fw-bolder col-2 lh-1 ${classes.keshila}`} style = {{display : props.display}}>{props.imgel}</div>
            <img src={props.src} className={`w-100 h-100`} style={{objectFit: props.objFit}} loading="lazy" alt={props.alt}/>
            </>
    )
};

export default Imazh;