import React from "react";
// reactstrap components
import {
  Card,
  CardDeck,
  Button,
  CardBody,
  CardImg,
  CardFooter,
  CardText,
  CardTitle,
  
} from "reactstrap";
import image from '../../assets/img/t.jpg';
import arr from '../../assets/img/u.jpg';
import arrz from '../../assets/img/f.jpg';

class information extends React.Component{

    render() {
        return(
            <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" align="center">
                     
                      <span className="h4 font-weight-bold mb-0 text-secondary">
                      مبادرات و أنشطة الجمعية
                              </span>
                              <br /> <br /> <br />
            <CardDeck>
      <Card className="border border-secondary">
        <CardImg variant="top" src={image} />
        <CardBody className="text-secondary">
          <CardTitle ><span className="h4 font-weight-bold mb-0 text-secondary">استشارة طبية</span></CardTitle>
          <CardText >
          في إطار مبادرة "#خليك_فدارك تحمي عائلتك" أطلق النادي الصحي لجمعية أطر إقليم ميدلت مبادرة "الاستشارة والتوجيه الطبي عن بعد" مجانا وذلك بتطوع مجموعة من الأطباء في مجالات متعددة: طب العام،و طب الأسنان 
          </CardText>
          <br />
          : ماعليك غير ترسل طلب الاستشارة ديالك أو سؤالك عبر الواتساب 
        </CardBody>
        <CardFooter>
            <small className="text-muted"><a href="tel: 0602007900 ">
                <Button outline color="secondary"> <i class="fab fa-whatsapp"></i>&nbsp;&nbsp;  0602007900 </Button>
            </a> </small>
           
            <small className="text-muted"><a href="tel: 0767185150">
                <Button outline color="secondary"> <i class="fab fa-whatsapp"></i>&nbsp;&nbsp;  0767185150</Button>
            </a> </small>
    
                            
        </CardFooter>
      </Card>
      <Card className="border border-secondary">
        <CardImg variant="top" src={arr} />
        <CardBody className="text-secondary">
          <CardTitle><span className="h4 font-weight-bold mb-0 text-secondary">بث مباشر</span></CardTitle>
          <CardText>
          البث المباشر للقاء حول "أحكام الطوارئ الصحية بالمغرب ومحاربة الأخبار الزائفة"
    من تقديم المحامي عبد الصمد أعموم
          </CardText>
        </CardBody>
        <CardFooter>
          <small className="text-muted">
          <small className="text-muted"><a href="https://www.facebook.com/ACPMD/videos/1466634843525797">
                <Button outline color="secondary"> <i class="fas fa-video"></i>&nbsp;&nbsp;  رابط المتابعة</Button>
            </a> </small>
          </small>
        </CardFooter>
      </Card>
      <Card className="border border-secondary">
        <CardImg variant="top" src={arrz} />
        <CardBody className="text-secondary">
          <CardTitle></CardTitle>
          <CardText>
                       <br />   بقا_فالدار_عطا_الله_مايدار #
                       <br />   خليك_فدارك #
                       <br />  كلنا_ضد_كورونا #
                       <br /> #covid19
          </CardText>
        </CardBody>
        <CardFooter>
          <small className="text-muted">
          <small className="text-muted"><a href="https://www.facebook.com/ACPMD/">
                <Button outline color="secondary"> <i class="fab fa-facebook"></i>&nbsp;&nbsp;  رابط الصفحة على الفايسبوك</Button>
            </a> </small>
          </small>
        </CardFooter>
      </Card>
    </CardDeck>
    </div>
    </>
        );
    }
}



export default information;