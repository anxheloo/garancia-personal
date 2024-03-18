import React from "react";
import classes from './PFA.module.css';
import { Link, useNavigate } from "react-router-dom";
const PFA = () => {

    // const navigate = useNavigate();
    // function handleClickPunesim() {
    //     navigate("/Punesimi");
    //   }
    // function handleClickArsim() {
    //     navigate("/Arsimi");
    //   }
    // function handleClickFormimi() {
    //     navigate("/Formim-Profesional");
    //   }

    return(
      <div className={`w-100 d-flex ${classes.PFAContainer}`}>
        <Link to='/Punesimi' className={`d-flex col-4 justify-content-center py-3 px-2 ${classes.colpun} ${classes.cursorpointer}`}>PUNËSIM</Link>
        <Link to='/Formim-Profesional' className={`d-flex col-4 justify-content-center py-3 px-2 text-center ${classes.colprof} ${classes.cursorpointer}`}>FORMIM PROFESIONAL</Link>
        <Link to='/Arsimi' className={`d-flex col-4 justify-content-center py-3 px-2 ${classes.colarsim} ${classes.cursorpointer}`}>ARSIM</Link>
      </div>
    )

}


export default PFA;