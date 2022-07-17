import { Card } from "../Card";
import { CarsComponent } from "./styles";
import mustang from '../../assets/imagens/image 11.png';
import image16 from '../../assets/imagens/image16.png';
import image15 from '../../assets/imagens/image15.png';

export function Cars(){
    return(
        <CarsComponent>
           <Card
                image={mustang}
                Vw="228px"
                Vh="171px"
                eixoX="21px"
                eixoY="-115px"
                data="2015"
                kmH= "180 Km/h"
                raio= "9/10"
                people= "8/10"
           >
                Honda Aversa
            </Card> 

            <Card
                image={image16}
                Vw="223px"
                Vh="112px"
                eixoX="31px"
                eixoY="-79px"
                data="2015"
                kmH= "180 Km/h"
                raio= "9/10"
                people= "8/10"
           >
                Honda Aversa
            </Card> 

            <Card
                image={image15}
                Vw="394px"
                Vh="272px"
                eixoX="-44px"
                eixoY="-228px"
                data="2015"
                kmH= "180 Km/h"
                raio= "9/10"
                people= "8/10"
           >
                Honda Aversa
            </Card> 
        </CarsComponent>
    )
}