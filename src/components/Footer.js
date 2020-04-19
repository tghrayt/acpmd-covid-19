
import React from "react";


import {
  Button,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import LanguageToggle from './LanguageToggle';




class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
         
          <Container>
            
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a aria-label="breadcrumb"
                    href="https://www.facebook.com/ACPMD"
                  >
                    Association des Cadres de la Province de Midelt pour le Développement
                  </a>
                 .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                  <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://www.facebook.com/ACPMD"
                  id="tooltip495507257"
                >
                  <span className="btn-inner--icon">
                  <i class="fab fa-facebook"></i>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Compte facebook
                </UncontrolledTooltip>
                  </NavItem>
                  
                  <NavItem>
                  <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="mailto:acpmd.com@gmail.com"
                  id="tooltip495507251"
                >
                  <span className="btn-inner--icon">
                  <i class="fas fa-envelope"></i>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507251">
                  Adresse Emali
                </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>
                  <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="http://www.instagram.com/acpmd.midelt"
                  id="tooltip495507253"
                >
                  <span className="btn-inner--icon">
                  <i class="fab fa-instagram"></i>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507253">
                 Compte instagram
                </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                  <LanguageToggle />
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
