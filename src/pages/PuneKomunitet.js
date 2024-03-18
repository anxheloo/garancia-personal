import React from "react";
import Header from "../components/Header";
import PFA from "../components/PFA";
import Kontakto from "../components/Kontakto";
import CoverImg from "../components/Coverimg";
import DescriptionTwo from "../components/Description";
import Stripe from "../components/Stripe";
import Advice from "../components/Advice";
import List from "../components/List";
import Button from "../components/Punesimi/button";
import Description from "../components/Punesimi/desciption";
import arrow from '../assets/img/Path 65.png'
import arrow1 from '../assets/img/unnamed.png'

import Foto from "../assets/img/programi i punesimit ne komunitet/15101853A.jpg";
import One from "../assets/img/Path 53.png";
import Two from "../assets/img/Path 54.png";
import Three from "../assets/img/Path 55.png";
import Four from "../assets/img/Path 56.png";
import Image from '../assets/img/programi i punesimit ne komunitet/punesimKomun.JPG'
import arrrow2 from "../assets/img/Page_2/SVG/Asset 1.svg";

import styles from "../pages/PraktikaProf.module.css";

import MediaQuery from "react-responsive";
import { Seo } from "../components/Seo";
import { useAuth } from "../data/AuthContext";
import { Link } from "react-router-dom";

const PuneKomunitet = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to the login page or show an error message
    return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
  }
  return (
    
    <div>
      <Seo 
        title={'Punë në komunitet'}
        description ={'Programi i Punësimit në Komunitet është një program 12-mujor i krijuar për të angazhuar punëkërkuesit, në punë me bazë komunitare nëpërmjet trajnimeve dhe mundësive të punësimit të fokusuara në punën në komunitet.'}
        type ={'web app'}
      />

      <div className={styles.desktopFixed}>
        <Header />
        <PFA />
      </div>

      <div className={styles.image}>
        <CoverImg src={Image} width={100} />
      </div>

      <div className={styles.praktikaContainer}>
        <DescriptionTwo
          src={arrrow2}
          title="Programi i Punës Publike në Komunitet"
          name="Programi i Punës Publike në Komunitet është një program 12-mujor i krijuar për të angazhuar punëkërkuesit e papunë afatgjatë nëpërmjet ofrimit të mundësive të trajnimit dhe të punësimit me kohë të pjesshme në aktivitete me fokus, shërbime në dobi të komunitetit."
        />
      </div>

      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 m-0 ${styles.practiceCon} `}
      >
        <div className={`row p-0 m-0`}>
          <div
            className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightSection}`}
          >
            <img src={Foto}></img>
          </div>

          <div className={`col-xl-6 col-lg-6 col-12 ${styles.practiceDesc}`}>
            <Description
              name="Je një punëkërkues i papunë afatgjate mbi moshën 25 vjec dhe në kërkim të një pune. Mund të jeni nga zonat rurale apo përfitues afatgjatë i ndihmës ekonomike. 
              Garancia Rinore mund të ofrojë mbështetje në integrimin në tregun e punës nëpërmjetë punës publike në komunitet.
              "
            />
            <div className={` ${styles.practiceBtn}`}>
              <Button 
                name = "APLIKO TANI"
                href = "https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=15266"
               />
            </div>
          </div>
        </div>
      </div>

      <Stripe title="Cila është mbështetja që ofrohet në Programin e Punësimit në Komunitet?" />

      <div className={styles.ListContainer}>
        <p>Mbështetja e ofruar përfshin:</p>
        <List
          src={One}
          title="Financimi i pjesshëm i pagave"
          desc="Programi parashikon 50% të pagës minimale, sipas
                    shkallës kombëtare, së bashku me kontributet e
                    detyrueshme për Sigurimet Shoqërore dhe
                    Sigurimet Shëndetësore."
        />
        <List
          src={Two}
          title="Mentorimi dhe mbikëqyrja gjatë periudhës së punësimit"
          desc="Pjesëmarrësit marrin udhëzime dhe mbështetje nga
                    mentorët për të rritur aftësitë e tyre dhe për të
                    siguruar një përvojë pune të suksesshme."
        />
        <List
          src={Three}
          title="Kupona për formim profesional"
          desc="Pjesëmarrësit mund të marrin mbështetje financiare
                    nëpërmjet kuponëve, deri në 20 000 (njëzet mijë) lekë,
                    për të ndjekur kurse profesionale dhe për të rritur
                    kualifikimet e tyre."
        />
        <List
          src={Four}
          title="Ndihma në transport"
          desc="Programi ofron ndihmë financiare për shpenzimet e
                    transportit, të tilla si udhëtimi në ambientet e kujdesit për
                    fëmijët dhe blerja e mjeteve të përshtatshme për individët
                    me aftësi të kufizuara."
        />
      </div>
      <MediaQuery minWidth={900}>
        <div
          className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 m-0 ${styles.ListParaCon}`}
        >
          <div className={styles.Listparag}>
            Këto masa mbështetëse synojnë të ofrojnë ndihmë gjithëpërfshirëse
            për pjesëmarrësit në Programin e Punësimit në Komunitet, duke u
            mundësuar atyre të fitojnë përvojë të vlefshme pune, të zhvillojnë
            aftësi dhe të kontribuojnë në komunitetet e tyre.
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={900}>
        <div
          className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 m-0 p-0 ${styles.ListParaCon}`}
        >
          <div className={styles.ListparagMobile}>
            Këto masa mbështetëse synojnë të ofrojnë ndihmë gjithëpërfshirëse
            për pjesëmarrësit në Programin e Punësimit në Komunitet, duke u
            mundësuar atyre të fitojnë përvojë të vlefshme pune, të zhvillojnë
            aftësi dhe të kontribuojnë në komunitetet e tyre.
          </div>
        </div>
      </MediaQuery>

      <Advice 
        src={arrow1}
        title="Zbuloni se çfarë
                    lloj trajnimi iu nevojitet
                    për të gjetur punësim"
        name="Mëso më shumë <a href=#>këtu.</a>"
        foto={arrow}
      />

      <Kontakto />
    </div>
  );
};

export default PuneKomunitet;
