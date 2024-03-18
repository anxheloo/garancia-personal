import React, { forwardRef } from "react";
import classes from "./Kontakto.module.css";
import Form from "./Form";
import Imazh from "./Imazh";
import MediaQuery from "react-responsive";
const Kontakto = forwardRef((props, ref) => {
  return (
    <>
      <MediaQuery minWidth={800}>
        <div className={`d-md-flex w-100 ${classes.kontakti}`} ref={ref}>
          <div
            className={`d-flex flex-column col-md-6 ${classes.bckggreen} p-5 justify-content-center`}
          >
            <div className={`ps-xl-5 ${classes.tituj} ${classes.lineh1} pb-2`}>
              Garancia Rinore nuk ka vlerë pa ty!
            </div>
            <div
              className={`ps-xl-5 ${classes.colgreen} ${classes.maxw600px} pb-4 ${classes.lineh1}`}
            >
              Prandaj ne jemi këtu për të të inkurajuar se e ardhmja është vetëm
              në dorën tënde. Ne jemi këtu për të të shoqëruar në rrugëtimin
              tënd. Jemi të angazhuar që të krijojmë një ambient ku ti mund të
              zhvillohesh dhe të arrish maksimumin tënd.
            </div>
            <div className={`ps-xl-5 ${classes.tituj} pb-2`}>Mëso më shumë</div>
            <div
              className={`ps-xl-5 ${classes.colgreen} ${classes.maxw600px} ${classes.lineh1} `}
            >
              Nëse kërkon më shumë informacion, apo sesi të përfitosh nga
              Garancia Rinore, plotëso formën mëposhtë.
            </div>
            <div className={`ps-xl-5 mt-5 mt-md-2 mt-xl-5`}>
              <Form />
            </div>
          </div>

          <div className={`col-md-6`}>
            <Imazh display="none" src={require("../assets/img/meforme.jpg")} />
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={800}>
        <div className={`d-md-flex w-100 ${classes.kontakti}`} ref={ref}>
          <div className={`col-md-6`}>
            <Imazh display="none" src={require("../assets/img/footer.jpg")} />
          </div>

          <div
            className={`d-flex flex-column col-md-6 ${classes.bckggreen} p-5 justify-content-center`}
          >
            <div className={`ps-md-4 ${classes.tituj} col-xxl-6 pb-3`}>
              Garancia Rinore nuk ka vlerë pa ty!
            </div>
            <div
              className={`ps-md-4 ${classes.colgreen} col-xxl-7 pb-4 ${classes.maxw600px}`}
            >
              Prandaj ne jemi këtu për të të inkurajuar se e ardhmja është vetëm
              në dorën tënde. Ne jemi këtu për të të shoqëruar në rrugëtimin
              tënd. Jemi të angazhuar që të krijojmë një ambient ku ti mund të
              zhvillohesh dhe të arrish maksimumin tënd.
            </div>
            <div className={`ps-md-4 ${classes.tituj} col-xxl-6 pb-3`}>
              Mëso më shumë
            </div>
            <div
              className={`ps-md-4 ${classes.colgreen} col-xxl-7 ${classes.maxw600px}`}
            >
              Nëse kërkon më shumë informacion, apo sesi të përfitosh nga
              Garancia Rinore, plotëso formën mëposhtë.
            </div>
            <div className={`ps-md-4 mt-4`}>
              <Form />
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
});

export default Kontakto;
