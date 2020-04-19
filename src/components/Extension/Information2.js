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
import image from '../../assets/img/i6.PNG';
import arr from '../../assets/img/i5.jpg';
import arrz from '../../assets/img/i4.jpg';

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
          <CardTitle ><span className="h4 font-weight-bold mb-0 text-secondary"></span></CardTitle>
          <CardText >
          بعد تعقيم وتعبئة واقيات الوجه تم اليوم تسليم دفعة منها بالاضافة إلى قفازات طبية لبائعي الخضر والفواكه في شخص رئيس جمعية البركة لتنطيم وهيكلة الباعة الجائلين ميدلت
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
        
      إسهاما منها في الحد من انتشار فيروس كورونا المستجد كويفد 19، وحرصا منها على سلامة موظفي ومرتفقي بعض المؤسسات، وعرفانا منها للمجهودات التي يبدلها المشتغلون في هذه الظرفية، عملت الجمعية بتأطير من عضو الجمعية والرئيسة السابقة لها الدكتورة سامية كزي على صناعة واقيات للوجه، سيتم توزيعها على المؤسسات المعنية وبعض أصحاب المحلات التجارية إن تيسر ذلك. حفظ الله البلاد والعباد من  كل سوء
<br />
#covid_19
#acpmdmidelt
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
          استكمالا للأنشطة التي قامت بها جمعية أطر إقليم ميدلت للتنمية ضمن سلسلة المبادرات التي تهم مواجهة والتصدي لفيروس كورونا ببلادنا، ولأن المناعة النفسية في مثل هذه الظروف من بين الأشياء الضرورية، تستضيف جمعية أطر إقليم ميدلت للتنمية الأستاذ عبد النبي أشطبي الباحث المختص في علم النفس الإجتماعي والتربوي كضيف على صفحتها يطل علينا من مدينة الرباط لتقديم أهم النصائح والارشادات الضرورية لتدبير المعيش اليومي في إطار الحجر الصحي
          </CardText>
        </CardBody>
        <CardFooter>
          <small className="text-muted">
          <small className="text-muted"><a href="https://www.facebook.com/ACPMD/videos/572203290314487">
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