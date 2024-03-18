import React from "react";
import Header from "../../components/Header";
import PFA from "../../components/PFA";
import Kontakto from "../../components/Kontakto";
import CoverImg from "../../components/Coverimg";
import DescriptionTwo from "../../components/Description";
import Advice from "../../components/Advice";
import Button from "../../components/Punesimi/button";
import Description from "../../components/Punesimi/desciption";

import Foto from "../../assets/img/Formimi/Formimi profesional_917x715px.JPG";

import Image from '../../assets/img/Formimi/formimi profesional.JPG'
import FotoSub from '../../assets/img/Formimi/formimi profesional_nenfaqe.JPG'
import arrow1 from '../../assets/img/Formimi/Mask Group 2.svg'
import arrow from '../../assets/img/Formimi/Path 317.svg'
import arrow2 from '../../assets/img/Formimi/Path 329.png'

import styles from './SubFProfesional.module.css'
import { Seo } from "../../components/Seo";
import { useAuth } from "../../data/AuthContext";
import { Link } from "react-router-dom";

const SubFProfesional = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      // Redirect to the login page or show an error message
      return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
    }
    return(

        <div>
            <Seo 
                title={'Formimi Profesional'}
                description ={'Nëse jeni duke menduar për të rritur njohuritë tuaja në një fushë të caktuar, apo për të bërë një ndryshim karriere, mund të përzgjidhni mes mbi 30 kurseve në 10 qëndra të Formimit Profesional.'}
                type ={'web app'}
            />

            <div className={styles.desktopFixed}>
                <Header />
                <PFA />
            </div>

            <div className={styles.image}>
                <CoverImg
                    src={Image}
                    width = {100}
                />
            </div>

            <div className={styles.praktikaContainer}>
               <DescriptionTwo title = "Formimi Profesional"
                src={arrow2} 
                name = "Nëse jeni duke menduar për të rritur njohuritë tuaja në një fushë të caktuar, apo për të bërë një ndryshim karriere, mund të përzgjidhni mes mbi 30 kurseve në 10 qëndra të Formimit Profesional."
                />
            </div>

            <div className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 m-0 ${styles.practiceCon} `}>
                <div className={`row p-0 m-0`}>
    
                    <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightSection}`}>
                        <img src={Foto} ></img>
                    </div>

                    <div className={`col-xl-6 col-lg-6 col-12 ${styles.practiceDesc}`}>
                        <Description 
                            name =" Ne e kuptojmë rëndësinë e të mësuarit të vazhdueshëm në tregun e sotëm profesional, që ecën me ritme të shpejta. Platforma jonë ofron një gamë të gjerë programesh trajnimi me cilësi të lartë dhe të rëndësishme për tregun e punës, të krijuara për të përmirësuar aftësitë tuaja, për të zgjeruar njohuritë dhe për të rritur perspektivën për punësim dhe zhvillim karriere.
                            <br/><br/>Pavarësisht nëse jeni një i sapodiplomuar, një profesionist me përvojë ose dikush që kërkon të ndryshojë karrierë, katalogu ynë gjithëpërfshirës i kurseve të formimit profesional, mbulon sektorë të ndryshëm në tregun e punës.
                            "
                        />
                        <div className={` ${styles.practiceBtn}`}>
                            <Button
                                name = "APLIKO TANI"
                                href = "https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=12549"
                            />       
                        </div>
                    </div>
                  
                </div>
            </div>

            <div className={`container-fluid d-flex flex-md-row flex-column justify-content-center ${styles.stripeContainer} `}>
                <div className={`container d-flex flex-md-row flex-column justify-content-center ${styles.BigContainer}`}>
                    <div className={`col-6 col-md-6 col-12 ${styles.firstContainer}`}>
                        <p className={`${styles.numbers} `}>30+</p>
                        <p className={`${styles.stripeInfo} `}>
                            Kurse nga teknologjia e informacionit
                            dhe marketingu digjital tek mikpritja
                            dhe kujdesi shëndetësor
                        </p>
                    </div>
                    <div className={`col-md-6 col-12 ${styles.secondContainer}`}>
                        <p className={`${styles.numbers} `}>10</p>
                        <p className={`${styles.stripeInfo} `}>
                            Qendra të Formimit 
                            <br></br>
                            Profesional në të gjithë vendin
                        </p>
                    </div>
                </div>
                
            </div>

            <div className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 ${styles.sectionThree}`}>
                <div className={`row`}>
                    <div className={`col-xl-6 col-lg-6 col-12 ${styles.rightSection}`}>
                        <p>Të krijuar nga instruktorë me përvojë, programet tona të formimit profesional kombinojnë njohuritë teorike me praktikën në terren, 
                            duke siguruar që ju të fitoni aftësi të vlefshme që kërkohen nga punëdhënësit.
                            <br/><br/>
                            Investoni në zhvillimin tuaj profesional dhe hidhni hapin tjetër drejt një karriere të suksesshme dhe përmbushëse. 
                            Kurset tona profesionale mbulojnë sektorë të ndryshëm në tregun e punës, duke siguruar që ju të mund të gjeni kurse formimi profesional 
                            që përputhet me qëllimet tuaja të karrierës. 
                            <br/><br/>
                            Me mbi 30 kurse në 10 qëndra të Formimit Profesional, nga teknologjia e informacionit dhe marketingu digjital tek mikpritja dhe kujdesi shëndetësor, 
                            ne kemi një përzgjedhje të larmishme programesh për t'iu përgjigjur interesave dhe aspiratave të ndryshme.
                            <br/>
                            <br/>
                            Marrja e një certifikate profesionale mund të rrisë ndjeshëm perspektivat tuaja në tregun e punës duke ju ofruar një avantazh konkurrues. 
                            Në tregun e sotëm shumë konkurrues dhe në ndryshim të vazhdueshëm, punëdhënësit vlerësojnë kandidatët që zotërojnë aftësi dhe certifikata të specializuara që demonstrojnë ekspertizën e tyre në një fushë specifike.

                        </p>
                      
                    </div>
                    <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.programin}`}>
                        <img src={FotoSub}></img>
                    </div>
                </div>
            </div>
            
            <div className={styles.ProfAdvice}>
                <Advice src={arrow1} title="Dëshironi të përzgjidhni ose ndryshoni profesion?" 
                name="Klikoni për të gjetur informacion për t’ju ndihmuar të bëni përzgjedhjen tua <a href='https://aftesi.al/' target='_blank'>këtu.</a>" 
                    foto={arrow}
                    backgroundColor = '#00B907'
                />
            </div>
     

            <Kontakto/>

        </div>

    )

}

export default SubFProfesional;