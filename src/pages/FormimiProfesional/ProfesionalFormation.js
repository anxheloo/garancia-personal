import styles from './Formation.module.css'

import React from "react";
import Button from '../../components/Punesimi/button';
import Title from '../../components/Punesimi/title';
import Subtitle from '../../components/Punesimi/subtitle';
import Description from '../../components/Punesimi/desciption';
import PFA from '../../components/PFA';
import Header from '../../components/Header';
import Kontakto from '../../components/Kontakto';

import { Link } from 'react-router-dom';

import Foto from '../../assets/img/Formimi/formimi profesional_main page2.jpg'


import arrow from '../../assets/img/Formimi/Path 329.png'
import Foto1 from '../../assets/img/Formimi/formimi profesional_main page.JPG'
import FotoSub from "../../assets/img/Formimi/aftesia digjitale_main page.jpg"


import MediaQuery from "react-responsive";
import { Seo } from "../../components/Seo";
import { useAuth } from "../../data/AuthContext";

const ProfesionalFormation = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      // Redirect to the login page or show an error message
      return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
    }

    return(

        <div>
            <Seo 
                title={'FORMIMI PROFESIONAL'}
                description ={'Përmes kurseve tona të Aftësimit Profesional, rrisni njohuritë dhe mundësitë tuaja për të gjetur veten në tregun e punës'}
                type ={'web app'}
            />
            
            <div className={styles.desktopFixed}>
                <Header />
                <PFA />
            </div>

           <div className={`container-fluid p-0 ${styles.secondPageProgram}`}>
                <div className={`row p-0`}>
                    <div className={`col-xl-6 col-lg-6 col-12 ${styles.leftsection}`}>
                        <h1>FORMIMI PROFESIONAL</h1>
                        <p className={`py-5`}>
                            Përmes kurseve tona të Aftësimit
                            Profesional, rrisni njohuritë dhe mundësitë
                            tuaja për të gjetur veten në tregun e punës
                        </p>
                    </div>
                    <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightsection1}`}>
                        <img src={Foto1}></img>
                    </div>
                </div>
           </div>

           <div className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles.secondPage}`}>
                <h3>“Vendi juaj në tregun e punës është më i sigurt se kurrë”</h3>
                <p className={`pt-3 ${styles.secondPageProgram}`}>
                    Nëse keni nevojë për një profesion për tu integruar në tregun e punës, jeni në vendin e duhur për të marrë profesionin që dëshironi.
                </p>
           </div>

           <div className={`container-fluid p-0`}>
                <div className={`${styles.functionContainer}`}>
                    <p><a href='/Rreth-Nesh'>Si funksionon Garancia Rinore?</a></p>
                </div>
           </div>

           <div className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 ${styles.sectionThree}`}>
                <div className={`row`}>
                    <div className={`col-xl-6 col-lg-6 col-12 ${styles.rightSection}`}>

                        <div className={`${styles.greenTitle}`}>
                            <Title name="FORMIMI PROFESIONAL" />
                        </div>

                        <div className={`py-xl-5 py-lg-5 py-md-4 py-3`}>
                            <Subtitle name="Karriera e sigurt: Kurset e formimit profesional" />
                        </div>
                        <Description 
                            name =" Nëse jeni duke menduar për të rritur
                            njohuritë tuaja në një fushë të caktuar,
                            apo për të bërë një ndryshim karriere,
                            mund të përzgjidhni mes mbi 30 kurseve
                            në 10 qëndra të Formimit Profesional."
                        />

                        <div className={`pt-xl-5 pt-lg-5 pt-md-4 pt-3 ${styles.GreenBtn}`}>
                            <Button
                            name="MËSO MË SHUMË"
                            href="/Kurse-Formim-Profesional"
                            />       
                        </div>
                    </div>
                    <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.programin}`}>
                        <img src={Foto}></img>
                    </div>
                </div>
           </div>
                   
            <div className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 ${styles.servicePage}`}>
                <div className={`row p-0 `}>
                <div className={`col-xl-6 col-lg-6 col-12 ${styles.serviceLeft}`}>

                    <div className={`d-flex ${styles.firstSection} `}>
                        <img src={arrow} ></img>
                        <p>SHËRBIMET</p>
                    </div>

                    <div className={`container-fluid ${styles.servicesProgram}`}>
                        <Link to='/Kurse-Formim-Profesional'>Kurset e Formimit Profesional</Link>
                        <hr/>
                        <Link to='/Program-Kodimi'>Programi i Kodimit</Link>
                        <hr/>
                        <Link to='/Kursi-Aftesi-Digjitale'>Kursi për Aftësi Digjitale</Link>
                        <hr/>
                    </div>
                </div>
                

                    <div className={`col-xl-6 col-lg-6 col-12 ${styles.serviceRight}`}>
                        <div className={`${styles.greenTitle}`}>
                            <Title name="PROGRAMI I KODIMIT"/>
                        </div>

                        <div className={`py-xl-5 py-lg-5 py-md-4 py-3`}>
                            <Subtitle name="Profesionet e së ardhmes, më pranë jush falë programeve të kodimit." />
                        </div>                        
                        <Description 
                            name ="Zbuloni Programin e Kodimit duke zgjedhur një
                            nga drejtimet në fushën e Programimit dhe
                            siguro të ardhmen tënde profesionale duke u
                            subvencionuar nga 50% deri në 100% të vlerës
                            së kursit."
                         />
                        <div className={`pt-xl-5 pt-lg-5 pt-md-4 pt-3 ${styles.GreenBtn}`}>
                            <Button name = "MËSO MË SHUMË" href="/Program-Kodimi"/>
                        </div>
                    </div>
                </div>
                  
            </div>

            <div className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 ${styles.sectionThree}`}>
                <div className={`row`}>
                    <div className={`col-xl-6 col-lg-6 col-12 ${styles.rightSection}`}>
                        <div className={`${styles.greenTitle}`}>
                            <Title name="KURSI PËR AFTËSI DIGJITALE" />
                        </div>
                        <div className={`py-xl-5 py-lg-5 py-md-4 py-3`}>
                            <Subtitle name="Në një tre ku teknologjia po ndryshon mënyrën e punës, është thelbësore përvetësimi i disa aftësive digjitale." />
                        </div>
                        <Description 
                        name ="Nëse aftësitë digjitale nuk janë pika jote e fortë,
                        regjistrohuni në kursin tonë të aftësive digjitale
                        për të zhvilluar kompetencat tuaja profesionale
                        dhe përshtatur me tregun e punës."
                        />

                        <div className={`pt-xl-5 pt-lg-5 pt-md-4 pt-3 ${styles.GreenBtn}`}>
                            <Button
                                name = "MËSO MË SHUMË"
                                href = "/Kursi-Aftesi-Digjitale"
                            />       
                        </div>
                    </div>
                    <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.programin}`}>
                        <img src={FotoSub}></img>
                    </div>
                </div>
           </div>
           <MediaQuery maxWidth={900}>
                <div className= {styles.greenLine}></div>
            </MediaQuery>
            <Kontakto/>

        </div>

    )
  
}

export default ProfesionalFormation;