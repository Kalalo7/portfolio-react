import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">Sobre mi</div>
        <div className="BigCard">
          <Image
            src="https://www.svgrepo.com/show/137617/avatar.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hola! Mi nombre es <strong>Martin Fauci</strong> y soy un programador junior
            en busqueda de su primer experiencia laboral en el mundo de las tecnologías de la 
            información y comunicación. 
          </div>
          <div className="AboutBio tagline2">
            Estas son las tecnologías con las que me desenvuelvo.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
