import React from "react";
import Header from "../components/Header";
import PFA from "../components/PFA";
import Kontakto from "../components/Kontakto";
import CoverImg from "../components/Coverimg";
import DescriptionTwo from "../components/Description";
import Stripe from "../components/Stripe";
import Advice from "../components/Advice";
import Button from "../components/Punesimi/button";
import Description from "../components/Punesimi/desciption";

import Foto from '../assets/img/programi i vetepunesimit/GKP_0722.JPG';
import Image from '../assets/img/programi i vetepunesimit/GKP_0677.JPG';
import arrow from '../assets/img/Path 65.png'
import arrow1 from '../assets/img/unnamed.png'
import arrrow2 from "../assets/img/Page_2/SVG/Asset 1.svg";

import styles from '../pages/PraktikaProf.module.css'
import { Seo } from "../components/Seo";
import { useAuth } from "../data/AuthContext";
import { Link } from "react-router-dom";

const VPunesimi = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      // Redirect to the login page or show an error message
      return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
    }
    return(

        <div>
            <Seo 
                title={'Programi i Vetëpunësimit'}
                description ={'Programi i Vetëpunësimit është krijuar për të promovuar sipërmarrjen midis individëve të papunë që kanë një ide biznesi.'}
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
               <DescriptionTwo title = "Programi i Vetëpunësimit"
                    src={arrrow2} 
                    name = "Programi i Vetëpunësimit është krijuar tu vijë në ndihmë  të gjithë sipërmarrsve të rinjë individëve të papunë që kanë një ide biznesi.  Ky program ofron trajnime për sipërmarrjen dhe zhvillimin e planeve të biznesit, së bashku me grante për aplikantët e suksesshëm"
                    desc = "Programi synon të mbështesë dhe fuqizojë pjesëmarrësit në krijimin e bizneseve të tyre. Për më tepër, ai ofron trajnime dhe mentorim afatshkurtër për të ndihmuar në krijimin e një plani të suksesshëm biznesi."
                />
            </div>

            <div className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 m-0 ${styles.practiceCon} `}>
                <div className={`row p-0 m-0`}>
    
                    <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightSection}`}>
                        <img src={Foto} className={styles.VetepunsimPhoto}></img>
                    </div>

                    <div className={`col-xl-6 col-lg-6 col-12 ${styles.practiceDesc}`}>
                        <Description 
                            name ="Jeni një punëkërkues me përvojë në sektorin e turizmit dhe synoni të krijoni një agjenci udhëtimi të suksesshme, e cila të ofrojë shërbime të përshtatura për klientët. 
                            <br/><br/>Gjithashtu, mund të jeni një person që zotëroni një pasion të veçantë për gastronominë, me aspirata për të hapur një restorant të specializuar në kuzhinë. 
                            <br/><br/>Ky program synon të mbështesë çdo individ me kualifikime unike, ambicie dhe aspirata sipërmarrëse brenda fushave të tyre përkatëse të interesit, duke i ofruar mbështetje për të bërë realitet ëndrrat e tyre."
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

            <Stripe title="Cila është mbështetja që ofrohet në Programin e Vetëpunësimit?"/>

            <div className={styles.ListContainer}>
                <p>Mbështetja e ofruar përfshin:</p>
                <div className={styles.ListContainerText}>
                    <p>- Të inkurajojë sipërmarrjen tek ata që janë duke kërkuar punë dhe kanë një ide biznesi</p>
                    <p>- Aplikuesit kanë mundësinë të përfitojnë grantin e ngritjes së biznesit, që arrin deri në shumën e 500,000 lekëve.</p>
                    <p>- Trajnim afatshkurtër dhe mentorim për të ndihmuar në krijimin e një plani të suksesshëm biznesi.</p>
                </div>
                
            </div>

            <Advice src={arrow1} title="Dëshironi të bëheni një sipërmarrës?" name="Klikoni për të gjetur informacione dhe shërbime për t’ju ndihmuar të filloni sipërmarrjen tuaj <a href='https://www.puna.gov.al/profili/punekerkues/profileCV' target='_blank'>këtu.</a>" foto={arrow}/>

            <Kontakto/>

        </div>

    )

}

export default VPunesimi;