import React from 'react';
import LastUpdate from './LastUpdate';
import {
  Card,
  Row,
  Col,
  Container,
  Button
} from "reactstrap";
import styles from './Layout.module.css'
import image from '../assets/img/acpmd.png'
const Title = ({ lastUpdate }) => {
  return (
   

    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" align="center" py-4>
          <Container fluid>
            <div className="header-body bg-light ">
              {/* Card stats */}
              <Card className="card-stats  mb-xl-0 border border-secondary">
              <Row >
              <Col lg="6" xl="4" className="mb-4 mb-xl-0">
                    <Row><br /></Row>
                <img src={image} alt="new_message" className={styles.image} />
                </Col>
               
                <Col lg="6" xl="4" className="mb-4 mb-xl-0">
                        <Row><br /><br /></Row>
                    <h3 className="text-gray-600">ⴰⵣⵓⵍ     مرحبا بكم</h3>
                    
                    <p>
                        <span className="text-gray-600">
                           هذا الموقع طورته  جمعية أطر إقليم ميدلت للتنمية  ، يقدم مستجدات رسمية لفيروس كورونا في المغرب
                            <br /> ⵎⴰⵖⴹⵢⵓ ⴰⴱⴰⵢⵓⵕ ⵏ ⵇⵓⵔⵓⵏⴰ ⵖ ⵜⴰⵎⵓⵔⵜ
                           
                        </span>
                        
                    </p>
                  
                      
                </Col>
                <Col lg="6" xl="4" className="mb-4 mb-xl-0">
               
               <br />
              
               <a href="/">
               <Button color="primary" outline type="button">
               ⴰⵄⴰⵡⵯⴷ    |  تحديث البيانات
               </Button>
               </a>
               <br />
              
                   <p className="mt-3 mb-0 text-muted text-sm" >
                       <span className="text-info mr-2">
                       <LastUpdate lastUpdate={lastUpdate}></LastUpdate>
                       </span>
                   </p>
                   
           </Col>
                
              </Row>
              </Card>
            </div>
          </Container>
        </div>
    
  );
};

export default Title;
