import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Escribime!</div>
        <div className="BigCard">
          <Email>
            <span>martinfauci@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:martinfauci@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactame.
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
