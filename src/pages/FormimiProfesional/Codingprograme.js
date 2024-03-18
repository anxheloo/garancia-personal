import React from "react";
import Header from "../../components/Header";
import PFA from "../../components/PFA";
import Kontakto from "../../components/Kontakto";
import CoverImg from "../../components/Coverimg";
import DescriptionTwo from "../../components/Description";
import Advice from "../../components/Advice";
import Button from "../../components/Punesimi/button";
import Description from "../../components/Punesimi/desciption";

import Foto from "../../assets/img/Formimi/programi i kodimit_917x715px.jpg";

import Image from '../../assets/img/Formimi/programi i kodimit_1920x783px.jpg'
import arrow1 from '../../assets/img/Formimi/Mask Group 2.svg'
import arrow from '../../assets/img/Formimi/Path 317.svg'
import arrow2 from '../../assets/img/Formimi/Path 329.png'
import mobile from '../../assets/img/Formimi/mobile.jpg'

import styles from './SubFProfesional.module.css'

import { Link } from "react-router-dom";

import MediaQuery from "react-responsive";
import { Seo } from "../../components/Seo";
import { useAuth } from "../../data/AuthContext";


const CodingProgram = () => {

    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      // Redirect to the login page or show an error message
      return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
    }
    return(

        <div>
            <Seo 
                title={'Programi i Kodimit'}
                description ={'Kodimi është gjuha e epokës digjitale, duke i dhënë mundësi kujtdo për të krijuar, inovuar dhe formuar të ardhmen. '}
                type ={'web app'}
            />

            <div className={styles.desktopFixed}>
                <Header />
                <PFA />
            </div>
            <MediaQuery minWidth={800}>
                <div className={styles.image}>
                    <CoverImg
                        src={Image}
                        width = {100}
                    />
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={800}>
                <div className={styles.image}>
                    <CoverImg
                        src={mobile}
                        width = {100}
                    />
                </div>
            </MediaQuery>
           

            <div className={styles.praktikaContainer}>
               <DescriptionTwo title = "Programi i Kodimit"
                src={arrow2} 
                name = "Kodimi është gjuha e epokës digjitale, duke i dhënë mundësi kujtdo për të krijuar, inovuar dhe formuar të ardhmen. Pavarësisht nëse jeni një fillestar që kërkon të filloni udhëtimin tuaj të kodimit ose një programues me përvojë që synon të përmirësojë ekspertizën tuaj, gama jonë gjithëpërfshirëse e kurseve u përgjigjet të gjitha niveleve të aftësive."
                />
            </div>

            <div className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 m-0 ${styles.practiceCon} `}>
                <div className={`row p-0 m-0`}>
    
                    <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightSection}`}>
                        <img src={Foto} ></img>
                    </div>

                    <div className={`col-xl-6 col-lg-6 col-12 ${styles.practiceDesc}`}>
                        <Description 
                            name =" Dëshiron të rrisësh aftësitë e tua në fushën e teknologjisë dhe programimit? 
                            Përmesë programeve të dedikuara të kodimit ju mund të kualifikoheni dhe të rikualifikoheni, për një kohëzgjatje nga 3 deri në 12 muaj.
                            "
                        />
                        <div className={` ${styles.practiceBtn}`}>
                            <Button
                                name = "APLIKO TANI"
                                href = "https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=15126 "
                            />       
                        </div>
                    </div>
                  
                </div>
            </div>

            <div className={`container-fluid ${styles.programContainer} `}>
                <p className={`${styles.programContainerTitle} `}>PROGRAMET</p>
                <div className={`${styles.programContainerLinks} `}>
                    <div>
                        <Link to='#'>Programim Kompjuterik</Link>
                        <hr></hr>
                    </div>
                    <div>
                        <Link to='#'>Zhvillim Aplikacionesh</Link>
                        <hr></hr>
                    </div>
                    <div>
                        <Link to='#'>Shkencë Të Dhënash</Link>
                        <hr></hr>
                    </div>
                    <div>
                        <Link to='#'>Siguri Kibernetike</Link>
                        <hr></hr>
                    </div>
                    <div>
                        <Link to='#'>Elektronik</Link>
                        <hr></hr>
                    </div>
                    <div>
                        <Link to='#'>Robotik</Link>
                        <hr></hr>
                    </div>
                    <div>
                        <Link to='#'>Dizanj Softuer</Link>
                        <hr></hr>
                    </div>
                    <div>
                        <Link to='#'>Realitet Virtual</Link>
                        <hr></hr>
                    </div>
                    
                        
                </div>
            </div>
            <div className={`col-12 ${styles.rightSection} ${styles.programingDescCon}`}>
                        <p className={`${styles.programingDesc}`}>
                            Zbuloni Programin e Kodimit duke zgjedhur një nga drejtimet në fushën e Programimit dhe siguro të ardhmen tënde
                            profesionale duke u subvencionuar nga 50% deri në 100% të vlerës së kursit. Përqafoni botën e programimit duke
                            zgjedhur një nga drejtimet tona të specializuara, duke hapur dyert për një karrierë premtuese. Fitoni aftësi kodimi të
                            kërkuara që ofrojnë perspektiva të qarta karriere, paga konkurruese dhe mundësi të bollshme punësimi, të gjitha pa
                            pasur nevojë të zhvendoseni nga vendbanimi juaj aktual.
                        </p>
                      
                    </div>
            <div className={`${styles.progrmAdvice}`}>
                <Advice src={arrow1} title="Keni pezulluar studimet dhe dëshironi të ndiqni një kurs profesional?" 
                    name="Klikoni për të gjetur më shumë informacion
                    se si mund të bëheni pjesë e Garancisë Rinore <a href='https://www.puna.gov.al/profili/punekerkues/kurseFormimProfesional' target='_blank'>këtu.</a>" 
                    foto={arrow}
                    backgroundColor = '#00B907'
                />
            </div>
           

            <Kontakto/>

        </div>

    )

}

export default CodingProgram;