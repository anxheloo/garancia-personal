import React from "react";
import styles from "../pages/Arsimi.module.css";

import fotoPar from "../assets/img/Group 159.png";
import PFA from "../components/PFA";
import fotoFund from "../assets/img/Arsimi/Arsimi1.jpg";
import Header from "../components/Header";
import arrow from "../assets/img/Page_2/SVG/Asset 1.svg";

import Kontakto from "../components/Kontakto";
import { Link } from "react-router-dom";
import Button from "../components/Punesimi/button";
import { Seo } from "../components/Seo";
import { useAuth } from "../data/AuthContext";
const Arsimi = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to the login page or show an error message
    return (
      <p className="auth_page">
        You are not authorized to access this page.{" "}
        <Link to="/Login">Please Login</Link>{" "}
      </p>
    );
  }
  return (
    <div>
      <Seo
        title={"ARSIMI"}
        description={
          "Përmes kurseve tona të Arsimit Profesional, rrisni njohuritë dhe mundësitë tuaja për të gjetur veten në tregun e punës."
        }
        type={"web app"}
      />
      <div className={styles.desktopFixed}>
        <Header />
        <PFA />
      </div>

      <div className={`container-fluid p-0 ${styles.secondPageProgram}`}>
        <div className={`row p-0 ${styles.fixedSpace}`}>
          <div className={`col-xl-6 col-lg-6 col-12 ${styles.leftsection}`}>
            <h1>ARSIMI</h1>
            <p className={`py-5`}>
              Përmes Arsimit Profesional, rrisni njohuritë dhe mundësitë tuaja
              për të gjetur veten në tregun e punës.
            </p>
          </div>
          <div
            className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightsection1}`}
          >
            <img src={fotoPar} alt=""></img>
          </div>
        </div>
      </div>
      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles.secondRow}`}
      >
        <h3>
          “Procesi i të mësuarit në shkollat e AFP-së është dinamik dhe praktik,
          duke i përgatitur studentët për sukses në botën reale.”
        </h3>
        <p className={`pt-3 ${styles.secondRowArsim}`}>
          Eksploroni një karrierë të re, përmirësoni aftësitë tuaja dhe lulëzoni
          në tregun e sotëm të punës. Bashkohuni me ne në një udhëtim sa teorik
          dhe praktik, ndërsa ndërtoni një të ardhme të suksesshme.
        </p>
      </div>

      <div className={`container-fluid p-0`}>
        <div className={`${styles.functionContainer}`}>
          <a href="/Rreth-Nesh">
            <p>Si funksionon Garancia Rinore?</p>
          </a>
        </div>
      </div>
      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 ${styles.sectionThird}`}
      >
        <div className={`row`}>
          <div className={`col-xl-6 col-lg-6 col-12 ${styles.rightSection}`}>
            <h1> ARSIMI PROFESIONAL</h1>
            <div className={`py-xl-5 py-lg-5 py-md-4 py-3`}>
              <p>
                Fuqizoni të ardhmen tuaj: Fitoni aftësitë më të kërkuara në treg
                dhe krijoni një karrierë të suksesshme me arsimin profesional!
              </p>
            </div>

            <div className={`  ${styles.practiceBtn}`}>
              <Button href="https://aftesi.al/" name="MËSO MË SHUMË" />
            </div>
          </div>
          <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.arsim}`}>
            <img src={fotoFund} alt=""></img>
          </div>
        </div>
      </div>
      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 ${styles.serviceDiv}`}
      >
        <div className={`row p-0 `}>
          <div className={`col-xl-6 col-lg-6 col-12 ${styles.serviceLeftSide}`}>
            <div className={`d-flex ${styles.firstSection} `}>
              <img src={arrow}></img>
              <p>SHËRBIMET</p>
            </div>

            <div className={`container-fluid ${styles.servicesArsim}`}>
              <Link to="/Arsimi-Profesional">Arsimi Profesional</Link>
              <hr />
              <Link to="/Arsimi-Profesional-Nenmenu">
                Përse të studiosh në Arsimin Profesional
              </Link>
              <hr />
            </div>
          </div>

          <div className={`col-xl-6 col-lg-6 col-12 ${styles.serviceRight}`}>
            <h1>PËRSE TË STUDIOSH NË ARSIMIN PROFESIONAL</h1>
            <div className={`py-xl-5 py-lg-5 py-md-4 py-3`}>
              <p>
                Eksploroni pasionet tuaja, përmirësoni aftësitë tuaja dhe
                filloni një udhëtim përmbushës në fushën që rezonon me aspiratat
                tuaja.
              </p>
            </div>

            <div className={`${styles.practiceBtn}`}>
              <Button href="/Arsimi-Profesional-Nenmenu" name="MËSO MË SHUMË" />
            </div>
          </div>
        </div>
      </div>
      <Kontakto />
    </div>
  );
};
export default Arsimi;
