import React from "react";
import styles from '../pages/RrethNesh.module.css'

import Header from "../components/Header";
import PFA from "../components/PFA";
import Kontakto from "../components/Kontakto";
import { Link } from "react-router-dom";

import { Seo } from "../components/Seo";

import Image from '../assets/img/Group 370.png'
import CoverImg from "../components/Coverimg";
import { useAuth } from "../data/AuthContext";


const RrethNesh = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      // Redirect to the login page or show an error message
      return <p className="auth_page" id="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
    }
    return(
        <div>
            <Seo  
            title={'Rreth nesh - Youth Guarantee'}
            description ={'Tek Garancia Rinore, ne jemi të përkushtuar tu ofrojmë mundësi punësimi, trajnimi dhe arsimimi të rinjve të papunë të regjistruar në zyrat e punës brenda një harku prej 4 muajsh.'}
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
            <div className={styles.aboutContainer}>
                <p className={`${styles.fs78} fw-normal px-md-0 ${styles.fsbold} ${styles.title}`}>Rreth Garancisë Rinore</p>
                <p className={` fw-normal ${styles.fsbold} ${styles.subtitle_aboutus}`}> 
                Një iniciativë e shtetit Shqiptar, e mbështetur nga Bashkimi Europian, e cil synon të garantojë që çdo person i ri i papunë të ketë mundësinë për të siguruar punësim, për të marrë një profesion, apo për të vazhduar arsimin brenda katër muajve.
                </p>
                <div className={`${styles.desc} container`}>
                   <p className={styles.descTitle}>Objektivi ynë</p>
                    <p> 
                        Fokusi ynë kryesor është adresimi i nevojave të të rinjve deri në moshën 29 vjeç (NEET), të cilët aktualisht nuk janë të punësuar dhe nuk ndjekin formim apo arsim. 
                        <br/><br/>Ne synojmë të ulim shkallën e papunësisë dhe nivelet e pasivitetit në këtë grupmoshë.
                    </p>
                    <p> 
                        <p className={styles.descTitle}>Misioni ynë</p>
                        Ne besojmë në potencialin dhe talentin e individëve të rinj që mund të përballen me sfida në gjetjen e punësimit të përshtatshëm ose aksesin në mundësitë arsimore. 
                        <br/><br/>Misioni ynë është t'i fuqizojmë ata duke ofruar një gamë të plotë shërbimesh që lehtësojnë integrimin e tyre në tregun e punës, 
                        përmirësojnë aftësitë e tyre dhe u ofrojnë mjete që u nevojiten për të pasur sukses.
                    </p>
                    <p> 

                        <p className={styles.descTitle}>Mundësitë e punësimit</p>

                        Garancia Rinore bashkëpunon ngushtësisht me punëdhënës të ndryshëm në tregun e punës për të krijuar mundësi pune të përshtatura në mënyrë specifike për aftësitë dhe aspiratat e të rinjve deri në moshën 29 vjeç.
                        <br/><br/>Nëpërmjet rrjetit tonë të gjerë, ne përpiqemi të lidhim punëkërkuesit e rinj me punëdhënës që vlerësojnë potencialin e tyre dhe janë të gatshëm t'u ofrojnë atyre punësim.
                        <br/><br/>Gjithashtu ne ofrojmë udhëzime dhe mbështetje të personalizuar gjatë gjithë procesit të kërkimit të punës, duke përfshirë ndërtimin e CV-ve, përgatitjen per interviste pune dhe shërbimet e gjetjes së punës së denjë.

                    </p>
                    <p> 
                        <p className={styles.descTitle}>Programet e Formimit</p>
                        Ne e kuptojmë rëndësinë e të mësuarit të vazhduar dhe të zhvillimit të aftësive në tregun e sotëm të punës  i cili ka një zhvillim të shpejtë.
                        Për të siguruar punësueshmërinë afatgjatë të pjesëmarrësve tanë, Garancia Rinore ofron një gamë të gjerë programesh formimi për të rritur njohuritë dhe aftësitë tuaja.
                        Programet tona të trajnimit mbulojnë sektorë të ndryshëm në tregun e punës, por pa u kufizuar në teknologjinë e informacionit, hoteleri-turizm, bujqsin, ndërtimin dhe sipërmarrjen. Me trajnerë me përvojë dhe pajisje moderne, ne ofrojmë një mjedis të favorshëm mësimi që inkurajon rritjen dhe nxit inovacionin.

                    </p>
                    <p> 

                        <p className={styles.descTitle}>Mundësitë Arsimore</p>
                        Ne besojmë fort në fuqinë transformuese të arsimit.
                        Kuptojmë se shumë të rinj mund të kenë ndërprerë studimet e tyre për shkak të rrethanave të ndryshme. 
                        Për të mbështetur aspiratat e tyre arsimore, ne ofrojmë mundësi për t'u ri-angazhuar me arsimin profesional ose për të ndjekur rrugë alternative arsimore. 
                        Pavarësisht nëse bëhet fjalë për përfundimin e arsimit të mesëm, regjistrimin në kurse profesionale ose eksplorimin e opsioneve të arsimit të lartë, 
                        ne ofrojmë udhëzime dhe burime për të ndihmuar të rinjtë të marrin vendime të rëndësishme për udhëtimin e tyre arsimor.

                    </p>
                    <p> 

                        <p className={styles.descTitle}>Mbështetje e personalizuar</p>
                        Ne e kuptojmë se udhëtimi i çdo individi është unik dhe nevojat e tyre mund të ndryshojnë. 
                        Kjo është arsyeja pse ne ofrojmë mbështetje dhe mentorim të personalizuar për të gjithë pjesëmarrësit tanë. 
                        Ekipi ynë i përkushtuar i trajnerëve dhe këshilltarëve të karrierës punon ngushtë me çdo individ për të identifikuar pikat e forta, interesat dhe qëllimet e tyre.
                        Bazuar në këtë vlerësim, ne krijojmë plane individuale dhe ofrojmë mbështetje të vazhdueshme për të siguruar suksesin e tyre.

                    </p>
                    <p> 
                        
                        <p className={styles.descTitle}>Bashkohuni me Garancia Rinore</p>
                        Nëse jeni një individ i ri që kërkon punësim, formim ose arsim, ju ftojmë të aplikoni në programin e Garancisë Rinore dhe filloni një udhëtim transformues drejt një 
                        të ardhmeje më të ndritshme. 
                        Gama jonë e plotë e shërbimeve, partneriteteve me punëdhënës në të gjithë sektorët e tregut të punës, janë krijuar për t'ju fuqizuar dhe për të qenë sa më pranë jush. 
                        Së bashku, ne mund të kapërcejmë sfidat dhe të ndërtojmë një të nesërme më të mirë
                    </p>
                </div>
            </div>
            <div className="d-md-flex w-100">
                <Link to ="/punesimi"  className={`text-decoration-none  col-md-4`}>
                <div className={`d-flex flex-column align-items-center text-center ${styles.back1}  text-light  ${styles.minheight360} ${styles.spaces}`}  >
                    <div className={`fw-bolder fs-2 ${styles.fsbold}`}>PUNËSIM</div>
                    <div className={`${styles.fs23} px-3 fw-normal px-md-3 px-xl-0  ${styles.grotf} ${styles.maxw350}`}>Përmes Garancisë Rinore mundësitë tuaja për të gjetur veten në tregun e punës janë të shumta.</div>
                </div>
                </Link>
                <Link to ="/Formim-Profesional"  className={`text-decoration-none  col-md-4`}>
                <div className={`d-flex flex-column align-items-center text-center ${styles.back2}  text-light  ${styles.minheight360} ${styles.spaces}`}  >
                    <div className={`fw-bolder fs-2 ${styles.fsbold} ${styles.colgreen}`}>FORMIM PROFESIONAL</div>
                    <div className={`${styles.fs23} px-3 fw-normal px-md-3 px-xl-0  ${styles.grotf} ${styles.maxw350} ${styles.colgreen}`}>Përmes kurseve tona të Aftësimit Profesional, rrisni njohuritë dhe mundësitë tuaja për të gjetur veten në tregun e punës.</div>
                </div>
                </Link>
                <Link to ="/Arsimi"  className={`text-decoration-none  col-md-4`}>
                <div className={`d-flex flex-column align-items-center text-center ${styles.back3}  text-light  ${styles.minheight360} ${styles.spaces}`}  >
                    <div className={`fw-bolder fs-2  ${styles.fsbold}`}>ARSIM</div>
                    <div className={`${styles.fs23} px-3 fw-normal px-md-3 px-xl-0 ${styles.grotf} ${styles.maxw350}`}>Zbuloni udhëtimin shpërblyes të një profesionisti të ri në shkollat e AFP-së dhe dëshmoni transformimin e tyre në individë të aftë dhe të pasionuar.</div>
                </div>
                </Link>
            </div>
            <div className={`${styles.greenBg}`}></div>
            <Kontakto/>
        </div>
    )

}

export default RrethNesh;