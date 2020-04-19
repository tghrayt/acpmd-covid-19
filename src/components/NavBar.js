import React from 'react';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  NavbarText,
  Button
} from "reactstrap";

import image from '../assets/img/image.png';
import styles from './Layout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeToggle from './ThemeToggle';
const NavDropdownExample=()=> {
    
  
    return (
     
      <Navbar
      className="navbar-horizontal navbar-dark bg-dark  "
      expand="lg"
    >
      <Container>
        <NavbarBrand href="/" >
        <img src={image} alt="covid" className={styles.Navimage} />
        </NavbarBrand>
        <button
          aria-controls="navbar-info"
          aria-expanded={false}
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbar-info"
          data-toggle="collapse"
          id="navbar-info"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar-info">
          <div className="navbar-collapse-header">
            
          </div>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavbarText
                className="nav-link-icon">
                <span >
                <a href="http://www.covidmaroc.ma/Pages/conseilar.aspx" className="nav-link-inner--text" target="_black">
                      <Button color="info" outline type="button">
                      نصائح لمواجهة الفيروس
                      </Button>
                  </a>
                </span>
              </NavbarText>
            </NavItem>
            <NavItem>&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem>
              <NavbarText
                className="nav-link-icon">
                <span >
                <a href="http://covid19.interieur.gov.ma/" className="nav-link-inner--text" target="_black">
                      <Button color="info" outline type="button">
                      الموقع الإلكتروني للوزارة
                      </Button>
                  </a>
                </span>
              </NavbarText>
            </NavItem>
            <NavItem>&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
            <NavItem>
              <NavbarText
                className="nav-link-icon">
                <span >
                <a href="http://covid19.interieur.gov.ma/assets/files/attestation_confinement_ar.pdf" className="nav-link-inner--text" target="_black">
                      <Button color="info" outline type="button">
                      تحميل شهادة التنقل 
                      </Button>
                  </a>
                </span>
              </NavbarText>
              
            </NavItem>
            <NavItem>&nbsp;&nbsp;</NavItem>
            <NavItem className="flex items-center justify-between">
            <ThemeToggle></ThemeToggle>
            </NavItem>
          </Nav>
        </UncontrolledCollapse>
      </Container>
    </Navbar>
   
    );
  }


  export default NavDropdownExample;