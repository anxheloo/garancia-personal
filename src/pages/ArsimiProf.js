import React from "react";
import styles from "../pages/ArsimiProf.module.css";
import Header from "../components/Header";
import PFA from "../components/PFA";
import Kontakto from "../components/Kontakto";
import CoverImg from "../components/Coverimg";
import DescriptionSmall from "../components/Arsimi/DescriptionSmall";
import arrow1 from '../assets/img/Path 65.png'
import arrow2 from '../assets/img/unnamed.png'
import Button from "../components/Punesimi/button";
import Stripe from "../components/Stripe";
import Advice from "../components/Advice";
import Description from "../components/Punesimi/desciption";
import Img from "../assets/img/Arsimi/ArsimiProf2.jpg";
import img2 from "../assets/img/Arsimi/arsimi profesional.jpg";
import { Seo } from "../components/Seo";
import { useAuth } from "../data/AuthContext";
import { Link } from "react-router-dom";

const ArsimiProfesional = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to the login page or show an error message
    return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
  }
  return (
    <div>
      <Seo 
        title={'Arsimi Profesional'}
        description ={'Arsimi profesional përfshin një gamë të larmishme fushash studimi, ku secila ofron mundësi unike për studentët për të zhvilluar aftësi të specializuara dhe për të ndjekur karriera frytdhënëse.'}
        type ={'web app'}
      />
      
      <div className={styles.desktopFixed}>
        <Header />
        <PFA />
      </div>

      <div className={styles.image}>
        <CoverImg src={Img} width={100} />
      </div>
      <div className={styles.arsimiContainer}>
        <DescriptionSmall
          backgroundColor="#BA8CFD"
          title="Arsimi Profesional"
          name=" Arsimi profesional përfshin një gamë të larmishme fushash studimi, ku secila
               ofron mundësi unike për studentët për të zhvilluar aftësi të specializuara dhe
               për të ndjekur karriera frytdhënëse. Fusha e teknologjisë, më e kërkuara vitet e
               fundit, ofron shtigje në programimin kompjuterik, sigurinë kibernetike dhe
               administrimin e rrjetit, duke përgatitur individët për botën e inovacionit
               digjital, që lëviz me ritme të shpejta."
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
              name=" Për ata që kanë pasion kreativitetin, arsimi profesional
                            ofron programe në dizajnin grafik, dizajnin e modës, artin e
                            kuzhinës dhe interior design, duke nxitur shprehjen artistike.
                            </br>
                            </br>
                            Profesionet si hidraulika, puna elektrike, saldimi dhe
                            zdrukthtaria, ofrojnë trajnim praktik për individët që
                            kërkojnë një karrierë në ndërtim dhe infrastrukturë.
                            </br>
                            </br>
                            Programet e biznesit dhe sipërmarrjes i pajisin
                            studentët me aftësi thelbësore në marketing,financë
                            dhe menaxhim, duke i fuqizuar ata të lulëzojnë në
                            botën e korporatave ose të fillojnë sipërmarrjet e tyre.
                            </br>
                            </br>
                            <h1> Eksploroni pasionet tuaja </h1>
                            </br>
                            Pavarësisht nga interesi juaj në teknologjinë e automobilave, menaxhimin e mikpritjes, bujqësinë, ose ndonjë fushë tjetër, arsimi profesional ofron një sërë rrugësh drejt suksesit.
                            <br/><br/>Kurrikula jonë fokusohet në aftësitë praktike dhe njohuritë përkatëse për tregun e punës, e cila lejon studentët të aplikojnë atë që mësojnë në një mjedis mbështetës dhe ndërveprues. Nëpërmjet një kombinimi të mësimdhënies në klasë, orëve praktike në shkollë dhe atyre në industrinë, studentët fitojnë përvojë të vlefshme dhe zhvillojnë një themel të fortë në fushat e tyre të zgjedhura. Mësuesit tanë drejtojnë dhe mentorojnë studentët, nxisin pasionin për të mësuarit gjatë gjithë jetës dhe sigurojnë që ata janë të pajisur mirë për të përmbushur kërkesat e tregut të punës gjithnjë në zhvillim.
                            <br/><br/>Ne, në shkollat tona të AFP-së, besojmë se mësimi është një udhëtim gjithëpërfshirës dhe transformues, duke fuqizuar studentët të hyjnë me besim në botën profesionale.
                            
                        
                            "
            />
            {/* <div className={` pt-5 ${styles.practiceBtn}`}>
              <Button name="MËSO MË SHUMË" href="https://www.puna.gov.al/arsimiProfesional" />
            </div> */}
          </div>
        </div>
      </div>
      <div className={styles.customChange}>
      <Advice
      src={arrow2}
      foto={arrow1}
        backgroundColor=" #b382fe"
        title="Dëshironi të dini më tepër
                për degët e studimit në AFP? "
                        name="Klikoni për të gjetur informacion për t’ju ndihmuar
                të bëni përzgjedhien tuaj <a href='https://www.puna.gov.al/arsimiProfesional'>këtu.</a>"
      />
      </div>
      <Kontakto/>
    </div>
  );
};
export default ArsimiProfesional;
