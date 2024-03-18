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

import Foto from "../assets/img/punesimi me subvesion/GKP_1169.JPG";
import One from "../assets/img/Path 53.png"
import Two from "../assets/img/Path 54.png"
import Three from "../assets/img/Path 55.png"
import Image from '../assets/img/punesimi me subvesion/GKP_0294.JPG'
import arrow from '../assets/img/Path 65.png'
import arrow1 from '../assets/img/unnamed.png'
import arrrow2 from "../assets/img/Page_2/SVG/Asset 1.svg";

import styles from '../pages/PraktikaProf.module.css'
import { Seo } from "../components/Seo";
import { useAuth } from "../data/AuthContext";
import { Link } from "react-router-dom";

const Subvencione = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      // Redirect to the login page or show an error message
      return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
    }
    return(

        <div>
              <Seo 
                title={'Programi i Punësimit me Subvencion'}
                description ={'Programi i Punësimit me subvencion është një program njëvjeçar punësimi që përputh nevojat e punëkërkuesve me aftësitë e kërkuara nga punëdhënësit.'}
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
               <DescriptionTwo title = "Programi i Punësimit me Subvencion" 
                src={arrrow2}
                name = "Programi i Punësimit me subvencion është një program njëvjeçar punësimi që përputh nevojat e punëkërkuesve me aftësitë e kërkuara nga punëdhënësit. Ai është i disponueshëm për të gjithë individët e papunë të regjistruar dhe aktivë që kanë kërkuar punë për të paktën një muaj në zyrën e punës."
                />
            </div>

            <div className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 m-0 ${styles.practiceCon} `}>
                <div className={`row p-0 m-0`}>
    
                    <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightSection}`}>
                        <img src={Foto} ></img>
                    </div>

                    <div className={`col-xl-6 col-lg-6 col-12 ${styles.practiceDesc}`}>
                        <Description 
                            name =" Të gjithëve na ka ndodhur që të kemi përfunduar
                            studimet dhe të kërkojmë mbështetje për të gjetur një
                            punë të përshtatshme në tregun e punës, ose mund të
                            ndodhë që të jemi një punëkërkues me aftësi të
                            kufizuara, dhe kemi nevojë për trajnim dhe mbështetje
                            për t'u integruar në tregun e punës dhe për të zbatuar
                            aftësitë tona. GR mund të ofrojë mbështetje në hapat
                            fillestarë të karrierës tuaj profesionale duke ndihmuar
                            në përgatitjen e të rinjve në procesin e gjetjes së punës."
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

            <Stripe title="Cila është mbështetja që ofrohet në Programin e Punësimit me Subvencion?"/>

            <div className={styles.ListContainer}>
                <p>Programi ofron nivele të ndryshme mbështetjeje:</p>
                <List 
                    src={One}
                    title = "Financim katër mujor"
                    desc="që mbulon 100% të pagës minimale në nivel
                    kombëtar për të gjithë pjesëmarrësit në program.
                    Shpërblimi sigurohet në muajin e pestë dhe të
                    gjashtë të kontratës, si dhe në muajin e
                    njëmbëdhjetë dhe të dymbëdhjetë."
                />
                <List 
                    src={Two} 
                    title = "Financim gjashtë mujor"
                    desc="që mbulon 100% të pagës minimale në nivel
                    kombëtar për të gjithë pjesëmarrësit e programit
                    që janë viktima të trafikimit, dhunës në familje
                    ose dhunës me bazë gjinore, duke përfshirë
                    komunitetin rom dhe egjiptian. Kompensimi
                    sigurohet në muajt e katërt, të pestë, të gjashtë,
                    të shtatë, të njëmbëdhjetë dhe të dymbëdhjetë
                    të kontratës."
                />
                <List 
                    src={Three} 
                    title = "Financim dymbëdhjetë mujor"
                    desc="mbulon 100% të pagës minimale në nivel kombëtar
                    për pjesëmarrësit e programit me aftësi të kufizuara
                    (PAK). Kompensimi sigurohet çdo muaj gjatë gjithë
                    kontratës dymbëdhjetëmujore."
                />
            </div>

            <Advice src={arrow1} title="Përpilimi i një portofoli ose një dosje personale" name="Mëso më shumë <a href='/situataime/dua-nje-ndryshim-ne-karrieren-time'>këtu.</a>" foto={arrow}/>

            <Kontakto/>

        </div>

    )

}

export default Subvencione;