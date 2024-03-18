import React from "react";
import classes from './Keshilla.module.css';


const Keshilla = (props) => {
    

    return(
        <>
        <div className={`d-md-flex`}>
            
                {/* <div className={`position-absolute text-light fw-bolder fs-2 col-2 ${classes.keshila}`}>KËSHILLA KARRIERE</div>
                <img src={props.src} className ={`w-100 h-100`} /> */}
                {props.left}
            
                {/* {props.children}
                <div className={`d-flex ${classes.wmaxcont} pt-4 pb-4 ms-4 ps-1 pe-1 justify-content-center`} style={{ backgroundColor:  props.backcgroundColor}}>
                    {props.butoni}
                </div> */}
                {props.right}
        </div>
        </>
    )
};

export default Keshilla;