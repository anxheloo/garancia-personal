import React, { useState, useEffect } from "react";
import "./Popup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img/GR-LOGO.svg";

const Popup = ({ status, message, onValidated, setIsOpen }) => {
  console.log("This is process: ", process.env.REACT_APP_MAILCHIMP_URL);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  console.log("this is status:", status);
  console.log("this is message:", message);
  console.log("this is onValidated:", onValidated);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return;
    }

    if (!firstName) {
      setError("Please enter first name");
      return;
    }

    if (!lastName) {
      setError("Please enter last name");
      return;
    }

    const isFormValidated = onValidated({
      EMAIL: email,
      FNAME: firstName,
      LNAME: lastName,
    });

    //On success return true
    return (
      email &&
      email.indexOf("@") > -1 &&
      firstName &&
      lastName &&
      isFormValidated
    );
  };

  useEffect(() => {
    if (status === "sending") {
      setEmail("");
      setFirstName("");
      setLastName("");
    }
  }, [status]);

  //   useEffect(() => {
  //     // Store the initial overflow value
  //     const initialOverflow = document.body.style.overflow;

  //     // Disable scroll when the component mounts
  //     document.body.style.overflow = "hidden";

  //     // Enable scroll when the component is unmounted or when you want to enable scrolling again
  //     return () => {
  //       document.body.style.overflow = initialOverflow;
  //     };
  //   }, []);

  return (
    <div
      id="popUp-container"
      style={{
        zIndex: 99999999999,
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        backgroundColor: "rgba(000,000,000,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
      //Close the popup when clicking outside
      onClick={() => setIsOpen(false)}
    >
      <div
        id="popup"
        //prevent closing the modal when clicking inside the popup
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "400px",
          height: "100%",
          maxHeight: "550px",
          borderRadius: "10px",
          backgroundColor: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 9999,
        }}
      >
        <FontAwesomeIcon
          icon={faXmark}
          size="xl"
          style={{
            position: "absolute",
            right: 15,
            top: 15,
            cursor: "pointer",
            color: "#033e3c",
          }}
          onClick={() => setIsOpen(false)}
        />

        <div
          style={{
            width: "100%",
            height: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} width={"150px"} alt="GR-Logo"></img>
        </div>

        <div
          style={{
            textAlign: "center",
            height: "5%",
            color: "rgba(3, 62, 60,0.8)",
            fontWeight: "bold",
          }}
        >
          {message}
        </div>

        <form
          onSubmit={handleFormSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "70%",
            justifyContent: "space-around",
            justifySelf: "end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div>
              <label
                for="mce-FNAME"
                style={{ color: "rgba(3, 62, 60,0.8)", fontWeight: "bold" }}
              >
                First Name
              </label>
              <input
                type="text"
                name="FNAME"
                className=" text"
                id="mce-FNAME"
                value={firstName}
                onChange={(event) => setFirstName(event?.target?.value)}
                required
                style={{
                  width: "100%",
                  height: "40px",
                  border: "1px",
                  borderStyle: "solid",
                  borderRadius: "4px",
                  borderColor: "rgba(000,000,000,0.2)",
                  outline: "none",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  caretColor: "rgba(000,000,000,0.5)",
                  color: "rgba(000,000,000,0.8)",
                }}
                placeholder="enter your first name..."
              />
            </div>

            <div>
              <label
                for="mce-LNAME"
                style={{ color: "rgba(3, 62, 60,0.8)", fontWeight: "bold" }}
              >
                Last Name
              </label>
              <input
                type="text"
                name="LNAME"
                className="text"
                id="mce-LNAME"
                value={lastName}
                required
                style={{
                  width: "100%",
                  height: "40px",
                  border: "1px",
                  borderStyle: "solid",
                  borderRadius: "4px",
                  borderColor: "rgba(000,000,000,0.2)",
                  outline: "none",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  caretColor: "rgba(000,000,000,0.5)",
                  color: "rgba(000,000,000,0.8)",
                }}
                onChange={(event) => setLastName(event?.target?.value)}
                placeholder="enter your last name..."
              ></input>
            </div>

            <div>
              <label
                for="mce-EMAIL"
                style={{ color: "rgba(3, 62, 60,0.8)", fontWeight: "bold" }}
              >
                Email Address <span class="asterisk">*</span>
              </label>
              <input
                type="email"
                value={email}
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                style={{
                  width: "100%",
                  height: "40px",
                  border: "1px",
                  borderStyle: "solid",
                  borderRadius: "4px",
                  borderColor: "rgba(000,000,000,0.2)",
                  outline: "none",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  caretColor: "rgba(000,000,000,0.5)",
                  color: "rgba(000,000,000,0.8)",
                }}
                onChange={(event) => setEmail(event?.target?.value)}
                placeholder="example@youremail.com"
              ></input>
            </div>
          </div>

          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            type="submit"
            style={{
              width: "100%",
              height: "50px",
              //   border: "1px",
              //   borderStyle: "solid",
              borderRadius: "4px",
              border: "none",
              backgroundColor: isHovered
                ? "rgba(0,185,7,0.8)"
                : "rgba(0,185,7)",
              color: "white",
              fontWeight: "bold",
            }}
          >
            REGJISTROHU
          </button>
        </form>
      </div>

      {/* <label for="mce-PHONE">Phone Number </label>
      <input type="text" name="PHONE" class="REQ_CSS" id="mce-PHONE" value="" /> */}
    </div>
  );
};

export default Popup;
