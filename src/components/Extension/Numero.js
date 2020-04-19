import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Container,
  Button
} from "reactstrap";
import styles from './Cards.module.css';


const numero =()=>{
  
    return(

        <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" align="center">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row align="center">
              <Col lg="6" xl="4"></Col>
              <Col lg="6" xl="4">
                        <span className="h4 font-weight-bold mb-0 text-secondary">
                        أرقام هاتفية للإتصال عند الضرورة&nbsp;&nbsp;<i class="fas fa-phone-office"></i>
                          </span>
                         
                          
                          </Col>
                          
              </Row>
              <br /> <br />
              <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0" >
                    <CardBody className={styles.infected}>
                      <Row>
                        <div className="col ">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 "
                            
                          >
                            INSTITUT PASTEUR
                          </CardTitle>
                          <br></br>
                          <span className="h4 font-weight-bold mb-0 text-secondary">
                          المختبر المغربي  باستور&nbsp;&nbsp;<i class="fas fa-university"></i>
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-secondary mr-2 ">
                            <a href="tel:0522262062">
                        <Button outline color="secondary"> <i className="fa fa-phone" />&nbsp;&nbsp; 0522262062</Button>
                        </a> 
                         <br></br>
                        </span>
                       
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0" >
                    <CardBody className={styles.infected}>
                      <Row>
                        <div className="col ">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 "
                            
                          >
                            POLICE
                          </CardTitle>
                          <br></br>
                          <span className="h4 font-weight-bold mb-0 text-secondary">
                          الشرطة&nbsp;&nbsp;<i class="fas fa-taxi"></i>
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-secondary mr-2 ">
                            <a href="tel:190">
                        <Button outline color="secondary"> <i className="fa fa-phone" />&nbsp;&nbsp; 190</Button>
                        </a> 
                         <br></br>
                        </span>
                       
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0" >
                    <CardBody className={styles.infected}>
                      <Row>
                        <div className="col ">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 "
                            
                          >
                            ALO YAQADA
                          </CardTitle>
                          <br></br>
                          <span className="h4 font-weight-bold mb-0 text-secondary">
                          ألو يقظة وبائية&nbsp;&nbsp;<i class="fas fa-stethoscope"></i>
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-secondary mr-2 ">
                            <a href="tel:141">
                        <Button outline color="secondary"> <i className="fa fa-phone" />&nbsp;&nbsp; 141</Button>
                        </a> 
                         <br></br>
                        </span>
                       
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                
                
              </Row>
              <br />
              <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0" >
                    <CardBody className={styles.infected}>
                      <Row>
                        <div className="col ">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 "
                            
                          >
                            AMBULANCE
                          </CardTitle>
                          <br></br>
                          <span className="h4 font-weight-bold mb-0 text-secondary">
                          سيارة الإسعاف&nbsp;&nbsp;<i class="fas fa-ambulance"></i>
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-secondary mr-2 ">
                            <a href="tel:150">
                        <Button outline color="secondary"> <i className="fa fa-phone" />&nbsp;&nbsp; 150</Button>
                        </a> 
                         <br></br>
                        </span>
                       
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0" >
                    <CardBody className={styles.infected}>
                      <Row>
                        <div className="col ">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 "
                            
                          >
                            SOS MÉDECINS
                          </CardTitle>
                          <br></br>
                          <span className="h4 font-weight-bold mb-0 text-secondary">
                          المساعدة الطبية&nbsp;&nbsp;<i class="fas fa-hospital-alt"></i>
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-secondary mr-2 ">
                            <a href="tel:0522989898">
                        <Button outline color="secondary"> <i className="fa fa-phone" />&nbsp;&nbsp; 0522989898</Button>
                        </a> 
                         <br></br>
                        </span>
                       
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0" >
                    <CardBody className={styles.infected}>
                      <Row>
                        <div className="col ">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 "
                            
                          >
                           CENTRE ANTIPOISON
                          </CardTitle>
                          <br></br>
                          <span className="h4 font-weight-bold mb-0 text-secondary">
                          مركز التسممات&nbsp;&nbsp;<i class="fas fa-skull-crossbones"></i>
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-secondary mr-2 ">
                            <a href="tel:0801000180">
                        <Button outline color="secondary"> <i className="fa fa-phone" />&nbsp;&nbsp; 0801000180</Button>
                        </a> 
                         <br></br>
                        </span>
                       
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                
                
              </Row>
            </div>
          </Container>
        </div>
      </>

    )

}


export default numero;