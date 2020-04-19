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
import image from '../../assets/img/i1.jpg';
import arr from '../../assets/img/i2.jpg';
import arrz from '../../assets/img/i3.jpg';

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
          <CardTitle ><span className="h4 font-weight-bold mb-0 text-secondary">شكر وتقدير</span></CardTitle>
          <CardText >
          يسر مكتب جمعية أطر إقليم ميدلت أن يقدم شهادة شكر و امتنان للمحامي عبدالصمد أعموم على محاضرته القيمة المعنونة "أحكام حالة الطوارئ بالمغرب و محاربة الأخبار الزائفة" وذلك يوم الأربعاء 15 ابريل 2020
          </CardText>
          
        </CardBody>
        <CardFooter>
        <small className="text-muted"><a href="https://www.facebook.com/ACPMD/">
                <Button outline color="secondary"> <i class="fab fa-facebook"></i>&nbsp;&nbsp;  رابط الصفحة على الفايسبوك</Button>
            </a> </small>
    
                            
        </CardFooter>
      </Card>
      <Card className="border border-secondary">
        <CardImg variant="top" src={arr} />
        <CardBody className="text-secondary">
          <CardTitle ><span className="h4 font-weight-bold mb-0 text-secondary">شكر وتقدير</span></CardTitle>
          <CardText >
          كل الشكر والتقدير للأستاذ عبد العزيز بلبكري والذي انظم إلينا من مدينة القنيطرة عبر البث المباشر على الصفحة للحديث عن كيف استطاع المغاربة التغلب على المجاعات والأوبئة عبر التاريخ.
يشار إلى أن الأستاذ عبد العزيز بلبكري هو أستاذ لمادة التاريخ بالمركز الجهوي للتربية والتكوين بمدينة القنيطرة وأستاذ زائر بجامعة ابن طفيل القنيطرة.
جزيل الشكر والتقدير لكم أستاذي من كل أعضاء الجمعية ومتتبعي الصفحة
          </CardText>
          
        </CardBody>
        <CardFooter>
        <small className="text-muted"><a href="https://www.facebook.com/ACPMD/">
                <Button outline color="secondary"> <i class="fab fa-facebook"></i>&nbsp;&nbsp;  رابط الصفحة على الفايسبوك</Button>
            </a> </small>
    
                            
        </CardFooter>
      </Card>
      <Card className="border border-secondary">
        <CardImg variant="top" src={arrz} />
        <CardBody className="text-secondary">
          <CardTitle><span className="h4 font-weight-bold mb-0 text-secondary">بث مباشر</span></CardTitle>
          <CardText>
          البث المباشر لمحاضرة "كيف تغلب المغاربة على الأوبئة والمجاعات عبر التاريخ" من تقديم الأستاذ الجامعي عبدالعزيز بلبكري.
          </CardText>
        </CardBody>
        <CardFooter>
          <small className="text-muted">
          <small className="text-muted"><a href="https://www.facebook.com/ACPMD/videos/229194794981842">
                <Button outline color="secondary"> <i class="fas fa-video"></i>&nbsp;&nbsp;  رابط المتابعة</Button>
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