import React from "react";
import styles from "../pages/ArsimiNen.module.css";
import Header from "../components/Header";
import PFA from "../components/PFA";
import Kontakto from "../components/Kontakto";
import CoverImg from "../components/Coverimg";
import Description from "../components/Punesimi/desciption";
import ListRow from "../components/Arsimi/ListRow";
import Button from "../components/Punesimi/button";
import Stripe from "../components/Stripe";
import DescriptionSmall from "../components/Arsimi/DescriptionSmall";
import Img from "../assets/img/Arsimi/Group 499.jpg";
import img2 from "../assets/img/Arsimi/917x715px.jpg";
import one from "../assets/img/Arsimi/nr1.svg";
import two from "../assets/img/Arsimi/nr2.svg";
import three from "../assets/img/Arsimi/nr3.svg";
import four from "../assets/img/Arsimi/nr4.svg";
import five from "../assets/img/Arsimi/nr5.svg";
import six from "../assets/img/Arsimi/nr6.svg";
import seven from "../assets/img/Arsimi/nr7.svg";
import Advice from "../components/Advice";
import arrow from '../assets/img/Path 65.png'
import arrow1 from '../assets/img/unnamed.png'
import { Seo } from "../components/Seo";
import { useAuth } from "../data/AuthContext";
import { Link } from "react-router-dom";


const ArsimiNenMenu = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to the login page or show an error message
    return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
  }

  return (
    <div>
      <Seo 
        title={'Përse të studiosh në Arsimin Profesional'}
        description ={'Arsimi profesional u ofron studentëve mësim praktik, realitetin e industrisë dhe kohëzgjatje më të shkurtër të programit të studimit, duke e bërë atë një zgjedhje me shumë përfitime.'}
        type ={'web app'}
      />
      <div className={styles.desktopFixed}>
        <Header />
        <PFA />
      </div>

      <div className={styles.image}>
        <CoverImg src={Img} width={100} />
      </div>
      <div className={` ${styles.arsimiNContainer}`}>
        <DescriptionSmall
          backgroundColor="#BA8CFD"
          title="Përse të studiosh në Arsimin Profesional"
          name="Arsimi profesional u ofron nxënësve praktikë pranë laboratorëve të shkollës, njohjen me tregun e punës dhe kohëzgjatje më të shkurtër të programeve të studimit, 
                 duke e bërë atë një zgjedhje me shumë përfitime. <br/><br/> Me përvojën praktike dhe aftësitë e botës reale, nxënësit dalin të mirëpërgatitur për karrierën e tyre"
        />
      </div>
      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 m-0 ${styles.practiceCon} `}
      >
        <div className={`row p-0 m-0`}>
          <div
            className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightSection}`}
          >
            <img src={img2}></img>
          </div>

          <div className={`col-xl-6 col-lg-6 col-12 ${styles.practiceDesc}`}>
            <Description
              name="Kurrikula përputhet me kërkesat e tregut të punës, duke rritur mundësinë për punësim të denjë.
              <br/><br/>Hyrja më e shpejtë në fuqinë punëtore redukton shpenzimet e studentëve dhe rrugët e përshtatura të karrierës ofrojnë kënaqësi në punë. 
              Për më tepër, arsimi profesional zhvillon aftësi thelbësore jetësore të vlerësuara nga punëdhënësit, duke siguruar sukses në një treg pune në ndryshim. 
              <br/><br/>Studimi në shkollat profesionale ofron përfitime të shumta dhe mundësi të vlefshme për të rinjtë në botën e sotme gjithnjë në zhvillim."
            />
            <div className={` pt-5 ${styles.practiceBtn}`}>
              <Button name="MËSO MË SHUMË" href="https://aftesi.al/shkollat" />
            </div>
          </div>
        </div>
      </div>
      <Stripe title="Disa arsye pse arsimi profesional mund të jetë një zgjedhje e shkëlqyer:" />
      <div className={` ${styles.ListContainer}`}>
  <div className={`d-flex flex-column  align-items-center ${styles.paddingCont}`}>
    <div className="row">
          <div className={`col-12 col-md-6   ${styles.ListCol}`}>
            <ListRow
              src={one}
              title="Praktika gjatë të mësuarit"
              desc="Shkollat profesionale theksojnë aftësitë por dhe praktikën gjatë të mësuarit, duke i lejuar të rinjtë të fitojnë përvojë për tu integruar në tregun e punës.
               Kjo qasje i pajis ata me ekspertizën e nevojshme për të shkëlqyer që në fillim të karrierës së tyre."
            />
          </div>
          <div className={`col-12 col-md-6   ${styles.ListCol}`}>
            <ListRow
              src={two}
              title="Rëndësia e Tregut të Punës"
              desc="Shkollat profesionale përshtatin programet e tyre me nevojat e tregut të punës, 
              duke siguruar që nxënësit të fitojnë aftësi që kërkohen. Kjo rrit punësueshmërinë dhe shanset e tyre për të siguruar punësim pas diplomimit."
            />
          </div>
        </div>
        <div className="row">
          <div className={`col-12 col-md-6  ${styles.ListCol}`}>
            <ListRow
              src={three}
              title="Integrimi më i shpejtë në Tregun e Punës"
              desc="
              Krahasuar me rrugët tradicionale akademike, arsimi profesional shpesh ka kohëzgjatje më të shkurtër të programit. 
              Kjo u mundëson të rinjve të Integrohen më shpejt në tregun e punës, duke kursyer kohë dhe duke shmangur periudhat e gjata të studimit."
            />
          </div>
          <div className={`col-12 col-md-6   ${styles.ListCol}`}>
            <ListRow
              src={four}
              title="Rrugët e përshtatura të karrierës"
              desc="Shkollat profesionale ofrojnë një gamë të
              gjerë programesh të specializuara, duke i
              lejuar të rinjtë të ndjekin karrierën në fusha
              që vërtet i interesojnë. Këto programe
              ofrojnë trajnime të synuara që përputhen
              me pasionet e tyre, duke rritur kënaqësinë e
              tyre në punë dhe ndjesinë e
              vetëpërmbushjes."
            />
          </div>
        </div>
        <div className="row">
          <div className={`col-12 col-md-6     ${styles.ListCol}`}>
            <ListRow
              src={five}
              title="Perspektiva të forta pune"
              desc="Shumë fusha profesionale po përjetojnë
              kërkesa të larta për profesionistë të
              kualifikuar. Duke studiuar në shkollat
              profesionale, të rinjtë pozicionohen
              për të përfituar nga mundësitë e
              punësimit në industritë në rritje, duke
              siguruar një të ardhme të
              qëndrueshme dhe premtuese."
            />
          </div>
          <div className={`col-12 col-md-6   ${styles.ListCol}`}>
            <ListRow
              src={six}
              title="Përparësitë financiare"
              desc="Arsimi profesional mund të jetë një
              alternativë me kosto efektive ndaj diplomave
              tradicionale akademike. Studentët shpesh
              kursejnë në tarifat e shkollimit, pasi
              programet profesionale priren të kenë
              kohëzgjatje më të shkurtër. Përveç kësaj, të
              diplomuarit në shkollat profesionale mund të
              fillojnë të fitojnë të ardhura më herët, duke
              përmirësuar stabilitetin e tyre financiar"
            />
          </div>
        </div>
        <div className="row">
          <div className={`col-12 col-md-6 ${styles.ListColEnd}`}>
            <ListRow
              src={seven}
              title="Aftësitë praktike të jetës"
              desc="Shumë fusha profesionale po përjetojnë
              kërkesa të larta për profesionistë të
              kualifikuar. Duke studiuar në shkollat
              profesionale, të rinjtë pozicionohen për të
              përfituar nga mundësitë e punësimit në
              industritë në rritje, duke siguruar një të
              ardhme të qëndrueshme dhe premtuese."
            />
          </div>
          <div className={`col-12 col-md-6 ${styles.ListColEnd2}`}>
            <ListRow
              desc="Në fund të fundit, studimi në shkollat
              profesionale u ofron të rinjve një rrugë të
              drejtpërdrejtë për të fituar aftësi të vlefshme,
              për të hyrë shpejt në fuqinë punëtore dhe për të
              krijuar karriera shpërblyese në fushat që ata janë
              të apasionuar. Ai ofron një përvojë praktike dhe
              relevante arsimore, duke i përgatitur ata për një
              treg pune që ndryshon me shpejtësi."
            />
          </div>
      </div>
        </div>
      </div>
      <Advice src={arrow1} foto={arrow} backgroundColor= ' #b382fe'title="Mësoni si të
        ndërtoni një CV" name="Shikoni më shumë <a href='https://www.puna.gov.al/profili/punekerkues/profileCV' target='_blank'>këtu.</a>"/>
<Kontakto/>
    </div>
  );
};

export default ArsimiNenMenu;
