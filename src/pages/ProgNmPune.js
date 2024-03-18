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

import Foto from "../assets/img/Formimi nepermjet punes/GKP_0686.JPG";
import One from "../assets/img/Path 53.png"
import Two from "../assets/img/Path 54.png"
import Three from "../assets/img/Path 55.png"
import Four from "../assets/img/Path 56.png"
import Image from '../assets/img/Formimi nepermjet punes/GKP_0853.JPG'
import arrow from '../assets/img/Path 65.png'
import arrow1 from '../assets/img/unnamed.png'
import arrrow2 from "../assets/img/Page_2/SVG/Asset 1.svg";

import styles from '../pages/PraktikaProf.module.css'
import { Seo } from "../components/Seo";
import { useAuth } from "../data/AuthContext";
import { Link } from "react-router-dom";


const ProgNmPune = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      // Redirect to the login page or show an error message
      return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
    }
    return(

        <div>
            <Seo 
                title={'Programi Formimit në Punë'}
                description ={'Programi Formim përmes Punës është një iniciativë 4 mujore që synon të ofrojë trajnime në vendin e punës, për individët e regjistruar dhe të papunë përtë paktën një muaj."'}
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
               <DescriptionTwo title = "Programi Formimit në Punë " 
                src={arrrow2}
                name = "Programi i Formimit nëpërmjet Punës është një iniciativë 4 mujore që synon të ofrojë formim në vendin e punës, për individët e regjistruar dhe të papunë për të paktën një muaj në Zyrën e Punës."
                />
            </div>

            <div className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 m-0 ${styles.practiceCon} `}>
                <div className={`row p-0 m-0`}>
    
                    <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightSection}`}>
                        <img src={Foto} ></img>
                    </div>

                    <div className={`col-xl-6 col-lg-6 col-12 ${styles.practiceDesc}`}>
                        <div className={`pb-4`}>
                            <Description 
                                name =" Jeni një punëkërkues dhe nuk keni ende një profesioni? Ju mund të formoheni në vendin e punës për një periudhë 4 mujore dhe të çertifokoheni për pjesëmarrjen tuaj.
                                <br/><br/>Nëse aftësit tuaja përshaten me kërkesën e punëdhënëst ju mund të punësoheni në vazhdim nnga punëdhënësi.
                                <br/><br/>Programi i Formimit nëpërmjet Punës do t’ju vij në ndihmë për t’ju rritur mundësitë e aftësimit në vendin e punës, duke financuar punëdhënësin për një periudhë 8 mujore për çdo të punësuar që përmbush kriteret.
                                "
                            />
                        </div>
                        {/* <div>
                            <Description 
                                name =" 
                                Në të dyja këto raste, Programi i Formimit nëpërmjet punës do të
                                na vinte në ndihmë për të na rritur mundësitë e aftësimit në
                                vendin e punës, duke financuar punëdhënësin për një periudhë
                                deri 8 mujore për çdo të punësuar që përmbush kriteret."
                            />
                        </div> */}
                       
                       
                        <div className={` ${styles.practiceBtn}`}>
                            <Button
                            name = "APLIKO TANI"
                            href = "https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=15266"
                            />       
                        </div>
                    </div>
                  
                </div>
            </div>

            <Stripe title="Cila është mbështetja që ofrohet në Programin e Formimit në Punë?"/>

            <div className={styles.ListContainer}>
                <List 
                    src={One}
                    title = "Financim të plotë"
                    desc="ekuivalent me 100% të pagës minimale të
                    përcaktuar nga legjislacioni aktual, të
                    parashikuara në baza mujore;"
                />
                <List 
                    src={Two} 
                    title = "Financimi i kontributeve"
                    desc="të detyrueshme të Sigurimeve Shoqërore dhe
                    Shëndetësore për një periudhë 4-mujore,
                    (kontributi i punëdhënësit prej 16,7% )të
                    llogaritur në bazë të shkallës së pagës
                    minimale;"
                />
                <List 
                    src={Three} 
                    title = "Pagesa mentorimi"
                    desc="2000 (dymijë) lekë në muaj për çdo
                    pjesëmarrës të programit."
                />
                <List 
                    src={Four} 
                    title = "Zgjatja e financimit të kontributeve"
                    desc=" të detyrueshme të sigurimeve shoqërore dhe shëndetësore
                    deri në 8 muaj nëse punëdhënësi zgjat kontratën e punës.
                    Kjo paketë gjithëpërfshirëse synon të sigurojë ndihmë
                    financiare dhe mbështetje për pjesëmarrësit në mënyrë që të
                    përmirësojë perspektivat e tyre të trajnimit dhe punësimit."
                />
            </div>

            <Advice src={arrow1} title="Pyetjet më të shpeshta në një intervistë pune" name="Ju ndihmojnë të përgatiteni <a href='/situataime/dua-nje-ndryshim-ne-karrieren-time'>këtu.</a>" foto={arrow}/>

            <Kontakto/>

        </div>

    )

}

export default ProgNmPune;