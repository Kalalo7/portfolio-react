import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src="https://www.svgrepo.com/show/277463/programming-monitor.svg"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Proyectos
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            Sobre mi
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contacto
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://martinfauciprogramacion.on.drv.tw/pagina%20web%20personal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mi CV
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
