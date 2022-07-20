import { Card } from "../Card";
import { CarsComponent } from "./styles";
import Carousel from "react-elastic-carousel";
import mustang from '../../assets/imagens/image11.png';
import image16 from '../../assets/imagens/image16.png';
import image15 from '../../assets/imagens/image15.png';
import carOne from '../../assets/imagens/image 22.png';
import { Arrow } from "../Arrow";


    const ListCars= [
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{image16},
            Vw: "223px",
            Vh: "112px",
            eixoX: "31px",
            eixoY: "-79px",
            data: "2015",
            kmH: "180 Km/h",
            raio: "9/10",
            people: "8/10",
        },
        {
            image:{image15},
            Vw: "394px",
            Vh: "272px",
            eixoX: "-44px",
            eixoY: "-228px",
            data: "2015",
            kmH: "180 Km/h",
            raio: "9/10",
            people: "8/10",
        },
        {
            image:{carOne},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
        {
            image:{mustang},
            Vw: "228px",
            Vh: "171px",
            eixoX: "21px",
            eixoY: "-115px",
            data: "2015",
            kmH: "180 Km/h",
            raio:"9/10",
            people: "8/10",
        },
    ]

export function Cars(ListCar: any){

    const BreakPoints= [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2, itemsToScroll: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ]

    return(
        <CarsComponent className="paddingContainer">
            <Carousel itemPadding={[0, 50]} renderArrow={Arrow} breakPoints={BreakPoints}>            

                {ListCars.map((car) => (
                <Card key={car.image} image={car.image} vw={car.vw} vh={car.vh} eixoX={car.eixoX} data={car.data} kmH={car.kmH} raio={car.raio} people={car.people}>Honda Aversa</Card>
                ))}

            </Carousel>
        </CarsComponent>
    )
}