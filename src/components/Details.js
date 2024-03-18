import React from "react";
import classes from './Details.module.css'

const Details = (props) => {

    return(
    <div className={`col-md-6 d-flex flex-column justify-content-center p-5`} style={{backgroundColor: props.backgroundCol}}>
        {props.children}
        <div className={`d-flex ${classes.wmaxcont} ${classes.padbutton} ms-md-4 justify-content-center text-light`} style={{ backgroundColor:  props.backcgroundColor,marginTop: props.marginTop}}>
            <a href={props.href} className={classes.homepagaBtn}> {props.butoni}</a> 
        </div>
    </div>
    )
};

export default Details;