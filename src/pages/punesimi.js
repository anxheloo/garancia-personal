import styles from "../pages/punesimi.module.css";

import React from "react";
import Button from "../components/Punesimi/button";
import Title from "../components/Punesimi/title";
import Subtitle from "../components/Punesimi/subtitle";
import Description from "../components/Punesimi/desciption";
import PFA from "../components/PFA";
import Header from "../components/Header";
import Kontakto from "../components/Kontakto";
import { Link } from "react-router-dom";

import Foto from "../assets/img/Punesimi2.jpg";
import Fotofull from "../assets/img/Punesimi Main Menu/GKP_4991.JPG";
import arrow from "../assets/img/Page_2/SVG/Asset 1.svg";
import Foto1 from "../assets/img/Punesimi.jpg";
import FotoFormiPune from "../assets/img/Punesimi Main Menu/15115159.jpg";
import FotoPraktikaProf from "../assets/img/Punesimi Main Menu/GKP_0853.JPG";
import FotoSub from "../assets/img/punesimi me subvesion/GKP_0294.JPG";

import MediaQuery from "react-responsive";

import { Seo } from "../components/Seo";
import { useAuth } from "../data/AuthContext";

const Punesimi = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to the login page or show an error message
    return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
  }
  return (
    <div>
      <Seo
        title={"Punësimi"}
        description={"PROGRAME PUNËSIMI"}
        type={"web app"}
      />
      <div className={styles.desktopFixed}>
        <Header />
        <PFA />
      </div>
      <div className={`container-fluid p-0 ${styles.secondPageProgram}`}>
        <div className={`row p-0`}>
          <div className={`col-xl-6 col-lg-6 col-12 ${styles.leftsection}`}>
            <h1>PUNËSIMI</h1>
            <p className={`py-5`}>
            Përmes Garancisë Rinore, mundësitë tuaja për të gjetur vendin tuaj në tregun e punës përmes punësimit ose intership, janë të shumta.
            </p>
          </div>
          <div
            className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightsection1}`}
          >
            <img src={Foto1}></img>
          </div>
        </div>
      </div>

      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles.secondPage}`}
      >
        <h3>“Vendi juaj në tregun e punës tashmë është më afër se kurrë”</h3>
        <p className={`pt-3 ${styles.secondPageProgram}`}>
          Jeni duke kërkuar punë apo mendoni se ka ardhur koha
          për t’u rritur profesionalisht? Përmes Programit të
          Garancisë Rinore, ju integroheni në tregun e punës
          brenda 4 muajve.
        </p>
      </div>

      <div className={`container-fluid p-0`}>
        <div className={`${styles.functionContainer}`}>
          <p>
            <a href="/Rreth-Nesh">Si funksionon Garancia Rinore?</a>
          </p>
        </div>
      </div>

      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 ${styles.sectionThree}`}
      >
        <div className={`row`}>
          <div className={`col-xl-6 col-lg-6 col-12 ${styles.rightSection}`}>
            <Title name="PROGRAMI I PUNËSIMIT" />
            <div className={`py-xl-5 py-lg-5 py-md-4 py-3`}>
              <Subtitle name="Karriera e Suksesshme: Zyrat e Punës dhe Portali i Punësimit" />
            </div>
            <Description
              name=" Nëse jeni duke menduar për një ndryshim në karrierën tuaj ose duke kërkuar për një punë të re në Shqipëri, 
              ka dy hapa kryesorë që duhet të ndërmerrni: vizitoni Zyrat e Punës dhe faqen <a href = 'https://puna.gov.al/'>puna.gov.al</a>"
            />

            <div className={`pt-xl-5 pt-lg-5 pt-md-4 pt-3`}>
              <Button name="MËSO MË SHUMË" href="/Program-Punesimi" />
            </div>
          </div>
          <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.programin}`}>
            <img src={Foto}></img>
          </div>
        </div>
      </div>

      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 ${styles.servicePage}`}
      >
        <div className={`row p-0 `}>
          <div className={`col-xl-6 col-lg-6 col-12 ${styles.serviceLeft}`}>
            <div className={`d-flex ${styles.firstSection} `}>
              <img src={arrow}></img>
              <p>SHËRBIMET</p>
            </div>

            <div className={`container-fluid ${styles.servicesProgram}`}>
              <Link to="/Praktika-Profesionale">
                Programi i Praktikave Profesionale (Intership)
              </Link>
              <hr />
              <Link to="/Program-Punesimi">Programi i Punësimit</Link>
              <hr />
              <Link to="/Formimi-Nepermjet-Punes">
                Programi i Formimit Nëpërmjet Punës
              </Link>
              <hr />
              <Link to="/Program-Vetepunesimi">Programi i Vetëpunësimit</Link>
              <hr />
              <Link to="/Program-Pune-Komunitet">
                Programi i Punësimit në Komunitet
              </Link>
              <hr />
              <Link to="#">Shërbim për Këshillim Karriere</Link>
              <hr />
            </div>
          </div>

          <div className={`col-xl-6 col-lg-6 col-12 ${styles.serviceRight}`}>
            <Title name="PROGRAMI I VETËPUNËSIMIT" />
            <div className={`py-xl-5 py-lg-5 py-md-4 py-3`}>
              <Subtitle name="Nxitja e Sipërmarrjes: Fuqizimi i Individëve të Papunë me Ide Biznesi" />
            </div>
            <Description
              name="Programi i Vetëpunësimit është krijuar për të promovuar sipërmarrjen midis individëve të papunë që kanë një ide biznesi. 
                            Programi synon të mbështesë dhe fuqizojë pjesëmarrësit në krijimin e bizneseve të tyre. 
                            Për më tepër, ai ofron trajnime dhe mentorim afatshkurtër për të ndihmuar në krijimin e një plani të suksesshëm biznesi."
            />
            <div className={`pt-xl-5 pt-lg-5 pt-md-4 pt-3`}>
              <Button name="MËSO MË SHUMË" href="/Program-Vetepunesimi" />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 ${styles.sectionThree}`}
      >
        <div className={`row`}>
          <div className={`col-xl-6 col-lg-6 col-12 ${styles.rightSection}`}>
            <Title name="PROGRAMI I NXITJES SË PUNËSIMIT ME SUBVENCION" />
            <div className={`py-xl-5 py-lg-5 py-md-4 py-3`}>
              <Subtitle name="Financim dhe Mbështetje për Punëkërkuesit" />
            </div>
            <Description
              name="Programi i Punësimit me subvencion është një program njëvjeçar punësimi që përputh nevojat e punëkërkuesve me aftësitë e kërkuara nga punëdhënësit. 
                        Ai është i disponueshëm për të gjithë individët e papunë të regjistruar dhe aktivë që kanë kërkuar punë për të paktën një muaj në zyrën e punës."
            />

            <div className={`pt-xl-5 pt-lg-5 pt-md-4 pt-3`}>
              <Button name="MËSO MË SHUMË" href="/Program-Subvencione" />
            </div>
          </div>
          <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.programin}`}>
            <img src={FotoSub}></img>
          </div>
        </div>
      </div>

      <MediaQuery maxWidth={900}>
        <div
          className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 ${styles.section5}`}
        >
          <div className={`row p-0`}>
            <div className={`col-xl-6 col-lg-6 col-12 ${styles.leftSection5}`}>
              <Title name="PROGRAMI I FORMIMIT NËPËRMJET PUNËS" />
              <div
                className={`py-xl-3 py-lg-3 py-md-2 py-2 ${styles.testimonialTitle}`}
              >
                <Subtitle name="Fuqizimi i punëkërkuesve për punësim" />
              </div>
              <Description
                name=" Programi Formim përmes Punës është një iniciativë
                        4 mujore që synon të ofrojë trajnime në vendin e
                        punës, për individët e regjistruar dhe të papunë për
                        të paktën një muaj."
              />
              <div className={`pt-xl-4 pt-lg-4 pt-md-3 pt-3`}>
                <Button name="MËSO MË SHUMË" href="/Formimi-Nepermjet-Punes" />
              </div>
            </div>

            <div
              className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightSection}`}
            >
              <img src={FotoFormiPune}></img>
            </div>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={900}>
        <div
          className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 ${styles.section5}`}
        >
          <div className={`row p-0`}>
            <div
              className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightSection}`}
            >
              <img src={FotoFormiPune}></img>
            </div>

            <div className={`col-xl-6 col-lg-6 col-12 ${styles.leftSection5}`}>
              <Title name="PROGRAMI I FORMIMIT NËPËRMJET PUNËS" />
              <div
                className={`py-xl-3 py-lg-3 py-md-2 py-2 ${styles.testimonialTitle}`}
              >
                <Subtitle name="Fuqizimi i punëkërkuesve për punësim" />
              </div>
              <Description
                name=" Programi Formim përmes Punës është një iniciativë
                        4 mujore që synon të ofrojë trajnime në vendin e
                        punës, për individët e regjistruar dhe të papunë për
                        të paktën një muaj."
              />
              <div className={`pt-xl-4 pt-lg-4 pt-md-3 pt-3`}>
                <Button name="MËSO MË SHUMË" href="/Formimi-Nepermjet-Punes" />
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>

      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 ${styles.section6}`}
      >
        <div className={`row p-0`}>
          <div className={`col-xl-6 col-lg-6 col-12 ${styles.leftSection}`}>
            <Title name="PROGRAMI I PRAKTIKËS PROFESIONALE" />
            <div
              className={`py-xl-3 py-lg-3 py-md-2 py-2 ${styles.testimonialTitle}`}
            >
              <Subtitle name="Nisni karrierën tuaj me vetëbesim" />
            </div>
            <Description
              name=" Programi i Praktikave Profesionale (Intership)
              synon të sigurojë një tranzicion të shpejtë në tregun e punës për të sapodiplomuarit e arsimit 
              të lartë si dhe të shkollave të mesme profesionale në fushat e tyre të studimit apo fusha të ngjashme."
            />
            <div className={`pt-xl-4 pt-lg-4 pt-md-3 py-2`}>
              <Button name="MËSO MË SHUMË" href="/Praktika-Profesionale" />
            </div>
          </div>

          <div
            className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightSection}`}
          >
            <img src={FotoPraktikaProf}></img>
          </div>
        </div>
      </div>

      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 ${styles.section7}`}
      >
        <div className={`row p-0`}>
          <div className={`col-12 ${styles.leftSection}`}>
            <Title name="PROGRAMI I PUNËSIMIT NË KOMUNITET" />
            <div
              className={`py-xl-3 py-lg-3 py-md-2 py-2 ${styles.testimonialTitle2}`}
            >
              <Subtitle name="Zhvillo Karrierën tënde dhe kontribuo në Komunitet" />
            </div>
            <div className={`${styles.testimonialDesc2}`}>
              <Description
                name="Programi i Punëve Publike në Komunitet ofron mbështetje për punëkërkuesit e papunë afatgjatë, përmes trajnimit dhe punësimit me kohë të pjesshme në aktivitete me fokus në shërbimet komunitare."
              />
            </div>
            <div className={`pt-xl-4 pt-lg-4 pt-md-3 py-2`}>
              <Button name="MËSO MË SHUMË" href="/Program-Pune-Komunitet" />
            </div>
          </div>
          <img src={Fotofull} className={`p-0`}></img>
        </div>
      </div>

      <MediaQuery maxWidth={900}>
        <div className={styles.greenLine}></div>
      </MediaQuery>
      <Kontakto />
    </div>
  );
};

export default Punesimi;
