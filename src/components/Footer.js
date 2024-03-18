import React from "react";
import GrLogo from '../assets/img/GR-LOGO.svg'
import AKPALogo from '../assets/img/AKPA.svg'
import '../components/Footer.css'
import FooterEULogo from "../assets/img/footer-eu.png"
import FooterMinistriaEkonomiLogo from "../assets/img/logo-meki-full.png"
import FooterMinistriaRinisLogo2 from "../assets/img/min.rinise.jpg"
import MediaQuery from "react-responsive";

function Footer(){
    return(
        <div className="footer_global">
            <div className='container-fluid p-0 m-0 footer-container'>
                {/* <div className="row m-0">

                    <div className="col-12 col-xl-6 col-lg-6 col-md-12 d-flex flex-column gr-left-footer">
                        <img src={GrLogo} className="gr-logo"/>
                        <p>Garancia Rinore</p>
                    </div>

                    <div className="col-12 col-xl-6 col-lg-6 col-md-12 gr-right-footer">
                        <img src={AKPALogo} className="py-4"/>
                        <div className="px-xl-5 px-xl-5 px-xs-0 px-0 py-3 footer-elm">
                            <a href="#">Contact us</a>
                            <a href="#">Careers</a>
                            <a href="#">Doner FAQ</a>
                            <a href="#">Terms of service</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>

                </div> */}
            </div>
            <MediaQuery minWidth={800}>

            <div className="footer_logoContainer">
                <div className="footer_eu">
                    {/* <div className="ministry-container"> */}
                    <img src={FooterMinistriaEkonomiLogo} className="ministry-logo"></img>
                    <img src={FooterMinistriaRinisLogo2} className="ministry-logo2"></img>
                    {/* </div> */}
                   
                    <img src={AKPALogo} className="AKPAlogo"/>
                    <img src={FooterEULogo} className="EU-logo"></img>
                </div>
            </div>
            </MediaQuery>

            <MediaQuery maxWidth={800}>
            <div className="footer_logoContainer">
                <div className="footer_eu">
                    <img src={FooterMinistriaEkonomiLogo} className="ministry-logo"></img>
                    <img src={AKPALogo} className="AKPAlogo"/>

                    <img src={FooterMinistriaRinisLogo2} className="ministry-logo2"></img>
                   
                    <img src={FooterEULogo} className="EU-logo"></img>
                </div>
            </div>
            </MediaQuery>
        </div>
    )
  
}

export default Footer;