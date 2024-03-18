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

import Foto from "../assets/img/programi i praktikes profesionale/GKP_0360.JPG"
import Image from '../assets/img/programi i praktikes profesionale/15115159.jpg'
import arrow from '../assets/img/Path 65.png'
import arrow1 from '../assets/img/unnamed.png'
import arrrow2 from "../assets/img/Page_2/SVG/Asset 1.svg";



import styles from '../pages/PraktikaProf.module.css'
import { Seo } from "../components/Seo";
import { useAuth } from "../data/AuthContext";
import { Link } from "react-router-dom";

const PraktikaProf = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      // Redirect to the login page or show an error message
      return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
    }
    return(
        <div>
            <Seo 
                title={'Programi i Praktikës Profesionale'}
                description ={'PProgrami i Praktikës Profesionale synon të sigurojë një tranzicion të qetë në tregun e punës për të sapodiplomuarit e shkollave profesionale në fushat e tyre përkatëse të studimit apo fusha të ngjashme'}
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
               <DescriptionTwo title = "Programi i Praktikës Profesionale" 
               src={arrrow2}
               name = "Programi i Praktikës Profesionale synon të sigurojë një tranzicion të shpejtë në tregun e punës për të sapodiplomuarit e arsimit të lartë si dhe të shkollave të mesme profesionale në fushat e tyre të studimit apo fusha të ngjashme." />
            </div>

            <div className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 m-0 ${styles.practiceCon} `}>
                <div className={`row p-0 m-0`}>
    
                    <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightSection}`}>
                        <img src={Foto} ></img>
                    </div>

                    <div className={`col-xl-6 col-lg-6 col-12 ${styles.practiceDesc}`}>
                        <Description 
                            name =" Je një i ri i sapodiplomuar nga shkolla e mesme profesionale, apo universiteti dhe të kemi nevojë për një praktikë profesionale për të fituar përvojë në fushën tuaj të studimit, ose për të përmirësuar aftësitë dhe për të gjetur një punë të përshtatshme.
                            <br/><br/>Garancia Rinore përmes Programit të Praktikës Profesionale, ndihmon të rinjtë të hedhin hapa të sigurtë në zhvillim e karrierës së tyre"
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

            <Stripe title="Cila është mbështetja që ofrohet në Programin e Praktikës Profesionale?"/>
            
            <div className={styles.practiceInfo}>
                <p>
                    Programi i Nxitjes së Punësimit të Praktikës Profesionale ofron një mundësi të shkëlqyeshme për
                    të rinjtë e sapo diplomuar të gjejnë një vend pune tërheqës dhe të zhvillojnë eksperiencën e tyre
                    të parë të punës. Përmes këtij programi, ata mund të kalojnë me lehtësi në tregun e punës në
                    fushën e tyre të studimeve ose fusha të ngjashme. Programi zgjat 6 muaj dhe i përfshin të gjithë
                    të sapodiplomuarit që kanë qëndruar të regjistruar në zyrën e punës për të paktën 1 muaj.
                    Mbështetja e ofruar përfshin subvencionimin e 50% të pagës minimale në shkallë vendi dhe
                    financimin e kontributeve për sigurimin nga aksidentet në punë, në përputhje me ligjin aktual.
                </p>
            </div>

            <Advice src={arrow1} title="Jam në ﬁllim të karrierës time" name="Klikoni për këshilla dhe ndihmëza <a href='situataime/fillimi-karrieres'>këtu.</a>" foto={arrow}/>

            <Kontakto/>

        </div>
    )

}

export default PraktikaProf;