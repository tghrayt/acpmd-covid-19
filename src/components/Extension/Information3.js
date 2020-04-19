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
import image from '../../assets/img/i7.jpg';
import arr from '../../assets/img/i8.jpg';
import arrz from '../../assets/img/i9.jpg';

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
          <CardTitle ><span className="h4 font-weight-bold mb-0 text-secondary">مرور إذاعي</span></CardTitle>
          <CardText >
          المرور الإذاعي لجمعية أطر إقليم ميدلت للتنمية على أثير الإذاعة الوطنية هذا الصباح  للحديث عن مبادرة "الاستشارة والتوجيه الطبي" ممثلا بكل من منسق المبادرة ورئيس الجمعية ادريس وادفلي وكذا عضو اللجنة الطبية الدكتور محمد امباركي
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
          <CardTitle ><span className="h4 font-weight-bold mb-0 text-secondary"></span></CardTitle>
          <CardText >
          جمعية أطر إقليم ميدلت للتنمية ترفع ملتمسا للسيد رئيس الجماعة الترابية قصد التنازل عن ثلث قيمة المنحة المخصصة للجمعية كدعم لمشروع الدورة السادسة للملتقى الإقليمي للشباب لفائدة صندوق محاربة تداعيات فيروس كورونا الذي أحدث بأمر سامي من جلالة الملك محمد السادس نصره الله وسدد خطاه
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
         موعدنا هاد الليلة مع بث مباشر على الصفحة الرسمية للجمعية ابتداء من الساعة 21:30 <br></br> 
بغيتي تعرف شنو هو فيروس كورونا <br></br>
علاش هو فيروس خطير <br></br>
واش كاينتاقل عبر الهواء  <br></br>
لي داز مرض ب فيروس كورونا وبرا واش كاترجعلو الصحة ديالو كيما كان ولا كايبقا شي خلل فالجسم  <br></br>
واش كاينة شي حمية ينصح بها لتقوية المناعة <br></br><br></br>  <br></br>
    
تابعنا مباشرة على الصفحة الرسمية للجمعية  الخميس 26 مارس2020 ابتداءا من الساعة 21:30 مساء
          </CardText>
        </CardBody>
        <CardFooter>
          <small className="text-muted">
          <small className="text-muted"><a href="https://www.facebook.com/ACPMD/videos/808993456260163">
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