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

import Foto from "../assets/img/programi i punesimit/15111431.jpg";
import One from "../assets/img/Path 53.png"
import Two from "../assets/img/Path 54.png"
import Image from '../assets/img/programi i punesimit/GKP_5081.JPG'
import arrow from '../assets/img/Path 65.png'
import arrow1 from '../assets/img/unnamed.png'
import arrrow2 from "../assets/img/Page_2/SVG/Asset 1.svg";

import styles from '../pages/PraktikaProf.module.css'
import { Seo } from "../components/Seo";
import { useAuth } from "../data/AuthContext";
import { Link } from "react-router-dom";

const ProgramPunesimi = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      // Redirect to the login page or show an error message
      return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
    }
    return(

        <div>   
            <Seo 
                title={'Programi i Punësimit'}
                description ={'Nëse jeni duke menduar për një ndryshim karriere ose duke kërkuar për një punë të re në Shqipëri, ka dy hapa kryesorë që duhet të ndërmerrni: vizitoni Zyrat lokale të Punësimit dhe faqen puna.gov.al'}
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
               <DescriptionTwo title = "Programi i Punësimit" 
               src={arrrow2}
               name = "Nëse jeni duke menduar për një ndryshim në karrierën tuaj ose duke kërkuar për një punë të re në Shqipëri, ka dy hapa kryesorë që duhet të ndërmerrni: vizitoni Zyrat e Punës ose faqen zyrtare të punësimit  <a href = 'https://puna.gov.al/'>puna.gov.al</a>" />
            </div>

            <div className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 m-0 ${styles.practiceCon} `}>
                <div className={`row p-0 m-0`}>
    
                    <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightSection}`}>
                        <img src={Foto} ></img>
                    </div>

                    <div className={`col-xl-6 col-lg-6 col-12 ${styles.practiceDesc}`}>
                        <Description 
                            name =" Jeni një i ri i  sapo diplomuar, duke kërkuar në mënyrë aktive ndihmë për të gjetur një punë të përshtatshme për tregun e punës. 
                            <br/> <br/> Garancia Rinore mund të ofrojë mbështetje të vlefshme gjatë fazave fillestare dhe të mëtejshme të karrierës tuaj profesionale, për të siguruar një mundësi të qëndrueshme dhe të denjë pune.
                            "
                        />
                        <div className={` ${styles.practiceBtn}`}>
                            <Button
                            name = "APLIKO TANI"
                            href = "https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=12548"
                            />       
                        </div>
                    </div>
                  
                </div>
            </div>

            <Stripe title="Cila është mbështetja që ofrohet në Programin e Punësimit?"/>

            <div className={styles.ListContainer}>
                <List src={One} desc="Së pari, vizitoni Zyrat e Punës, të cilat janë të shpërndara në të gjithë vendin, 
                për të kërkuar këshilla për rrugën që dëshironi të ndiqni në karrierën tuaj.
                <br/><br/>
                Për të përfituar nga shërbimet e ofruara në Zyrat e Punës, duhet të aplikoni në portalin qeveritar e-Albania 
                në shërbimin e “Regjistrimi si punëkërkues”. Pasi të keni përfunduar aplikimin e sukses, stafi në Zyrën e Punës 
                do t'ju kontaktojë për të caktuar një takim dhe për t’ju mbështetur në udhëtimin tuaj të kërkimit të punës."
                />
                <List src={Two} desc="Mblidhni informacion nga portali i punësimit
                    puna.gov.al . Në këtë platformë, ju mund të
                    prezantoni veten, të krijoni CV-në tuaj, të
                    abonoheni për të marrë ofertat më të fundit të
                    punës dhe të dorëzoni aplikimet përkatëse. Mos
                    harroni të qëndroni vigjilentë pasi punëdhënësit e
                    mundshëm mund t'ju kontaktojnë drejtpërdrejt
                    bazuar në CV-në tuaj."
                />
            </div>
                                
            <Advice src={arrow1} title="Si të shkruani një CV?" name="Mëso më shumë si të shkruani një CV <a href='https://www.facebook.com/akpa.gov.al/videos/3497951167156072 ' target='_blank'>këtu.</a>" foto={arrow}/>

            <Kontakto/>

        </div>

    )

}

export default ProgramPunesimi;