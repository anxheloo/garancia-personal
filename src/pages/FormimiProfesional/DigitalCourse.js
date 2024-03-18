import React from "react";
import Header from "../../components/Header";
import PFA from "../../components/PFA";
import Kontakto from "../../components/Kontakto";
import CoverImg from "../../components/Coverimg";
import DescriptionTwo from "../../components/Description";
import Advice from "../../components/Advice";
import Button from "../../components/Punesimi/button";
import Description from "../../components/Punesimi/desciption";

import Foto from "../../assets/img/Formimi/aftesi digjitale.jpg";

import Image from '../../assets/img/Formimi/Aftesi digjitale_1920x783px.jpg'
import arrow1 from '../../assets/img/Formimi/Mask Group 2.svg'
import arrow from '../../assets/img/Formimi/Path 317.svg'
import arrow2 from '../../assets/img/Formimi/Path 329.png'
import number_1 from '../../assets/img/Formimi/Group750.png'
import number_2 from '../../assets/img/Formimi/Group753.png'

import styles from './SubFProfesional.module.css'
import { Seo } from "../../components/Seo";
import { useAuth } from "../../data/AuthContext";
import { Link } from "react-router-dom";



const DigitalCourse = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      // Redirect to the login page or show an error message
      return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
    }
    return(

        <div>
            <Seo 
                title={'Kursi për Aftësi Digjitale'}
                description ={'Në një tre ku teknologjia po ndryshon mënyrën e punës, është thelbësore përvetësimi i disa aftësive digjitale.'}
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
               <DescriptionTwo title = "Kursi për Aftësi Digjitale"
                src={arrow2} 
                name = "Në një treg ku teknologjia po ndryshon mënyrën e punës, është thelbësore përvetësimi i disa aftësive digjitale. Nëse aftësitë digjitale nuk janë pika jote e fortë, regjistrohuni në kursin tonë të aftësive digjitale për të zhvilluar kompetencat tuaja profesionale dhe përshtatur me tregun e punës."
                />
            </div>

            <div className={`container-fluid d-flex flex-column justify-content-center align-items-center p-xl-0 p-lg-0 m-0 ${styles.practiceCon} `}>
                <div className={`row p-0 m-0`}>
    
                    <div className={`col-xl-6 col-lg-6 col-12 p-0 ${styles.rightSection}`}>
                        <img src={Foto} ></img>
                    </div>

                    <div className={`col-xl-6 col-lg-6 col-12 ${styles.practiceDesc}`}>
                        <Description 
                            name ="Aftësitë digjitale janë shndërruar në njohuri thelbësore në botën e sotme të drejtuar nga teknologjia.
                            <br/><br/>Ato përfshijnë një sërë kompetencash që u mundësojnë individëve të navigojnë dhe përdorin në mënyrë efektive teknologjitë digjitale për qëllime personale, profesionale dhe edukative. Nga aftësitë bazë të tilla si përdorimi i postës elektronike dhe kryerja e kërkimeve në internet deri te aftësitë e avancuara si kodimi, analiza e të dhënave dhe marketingu digjital, aftësitë digjitale fuqizojnë individët të punojnë me sukses në epokën digjitale. Këto aftësi nuk janë të vlefshme vetëm për punëkërkuesit dhe profesionistët, por edhe për studentët, sipërmarrësit dhe këdo që dëshiron të qëndrojë i përditësuar dhe fleksibël në një shoqëri gjithnjë e më digjitale. 
                            <br/><br/>Duke përvetësuar aftësitë digjitale, do mund të rrisni produktivitetin, kreativitetin, komunikimin dhe aftësitë tuaja për zgjidhjen e problemeve, duke hapur mundësi dhe shtigje të reja për sukses. Pavarësisht nëse bëhet fjalë për zotërimin e aplikacioneve softuerike, kuptimin dhe përdorimin e sigurisë kibernetike ose shfrytëzimin e platformave të mediave sociale, investimi në aftësitë digjitale është një investim në rritjen personale dhe profesionale.<br/><br/>Bashkohuni me ne dhe shfrytëzoni mundësinë për t'u regjistruar në Kursin tonë të Aftësive digjitale, i krijuar për t'ju pajisur me kompetencën e nevojshme profesionale për të shkëlqyer në fushën e aftësive digjitale.
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

            <div className={`container-fluid ${styles.programContainer} `}>
                <p className={`contianer ${styles.programContainerTitle} ${styles.digitalCourse}`}>Kurrikula jonë ofron dy nivele:</p>
            </div>
            <div className={`col-12 d-flex flex-md-row flex-column pb-0 ${styles.programingDescCon}`}>
               <div className={`d-flex flex-md-row flex-column col-md-6 col-12 ${styles.digitalCourseTitle}`}>
                    <img src={number_1} className={styles.number} />
                    <p>Aftësitë digjitale Bazë <br></br><span className={styles.hours}>(66 orë mësimore).</span></p>
               </div>

               <div className={`d-flex flex-md-row flex-column col-md-6 col-12 ${styles.digitalCourseTitle}`} >
                    <img src={number_2} className={styles.number} />
                    <p>Aftësitë digjitale të Mesme <br></br><span className={styles.hours}>(72 orë mësimore).</span> </p>
               </div>
            </div>
            <div className={`col-12 ${styles.rightSection} ${styles.programingDescCon}`}>
                <p className={`${styles.programingDesc}`}>
                    Të dy nivelet e mësipërme mbulojnë një grup të ngjashëm kompetencash dhe njohurish, por janë të përshtatura për
                    shkallë të ndryshme vështirësie bazuar në nivelin tuaj aktual të aftësive digjitale, të cilat vlerësohen përmes një testi
                    paraprak në momentin e regjistrimit.
                </p>
            </div>
            <div className={`${styles.progrmAdvice}`}>
                <Advice src={arrow1} title="Dëshironi të dini cilat janë mundësitë që ofron Garancia Rinore?" 
                    name="Klikoni për të gjetur më shumë informacion <a href='/Rreth-Nesh'>këtu.</a>" 
                    foto={arrow}
                    backgroundColor = '#00B907'
                />
            </div>
           

            <Kontakto/>

        </div>

    )

}

export default DigitalCourse;