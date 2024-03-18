import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import eAlbaniaLogo from "../assets/img/logoealbania.svg";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Popup from "./Popup";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light w-100 ezpz">
          <div className="container-fluid pe-0">
            <a href="/" className="grlogo">
              <img
                src={require("../assets/img/GR-LOGO.svg").default}
                alt=""
                className="gr-logo"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse basicsat justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item pe-4 ps-3 menurreth d-flex justify-content-center">
                  <Link to="/Rreth-Nesh" className="nav-link active">
                    RRETH
                  </Link>
                  {/* <a className="nav-link active" aria-current="page" href="">RRETH</a> */}
                </li>
                <li className="nav-item pe-4 ps-3">
                  <a className="nav-link" href="/situataime">
                    SITUATA IME
                  </a>
                </li>
                <li className="nav-item pe-4 ps-3">
                  {/* href="/eventet" */}
                  <Link className="nav-link" to="/eventet">
                    AKTIVITETE
                  </Link>
                </li>
                <div className="nav-link" onClick={() => setIsOpen(true)}>
                  REGJISTROHU
                </div>
                <li className="nav-item pe-4 ps-3 d-flex align-items-center">
                  <a className="nav-link" href="/faq">
                    FAQ
                  </a>
                </li>

                {isOpen && (
                  <MailchimpSubscribe
                    url={process.env.REACT_APP_MAILCHIMP_URL}
                    render={(props) => {
                      const { subscribe, status, message } = props || {};
                      return (
                        <Popup
                          status={status}
                          message={message}
                          onValidated={(formData) => subscribe(formData)}
                          setIsOpen={setIsOpen}
                        ></Popup>
                      );
                    }}
                  />
                )}

                <li className="nav-item pe-3 ps-3 d-flex align-items-center backdcust ms-md-3 justify-content-center menubashk">
                  <div
                    className="nav-link colgreen curs-pointer d-flex justify-content-center align-items-center headerLogo "
                    onClick={props.clickHandler}
                  >
                    <p className="m-0">APLIKO</p>
                    <img src={eAlbaniaLogo} className="logo-eAlbania"></img>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
