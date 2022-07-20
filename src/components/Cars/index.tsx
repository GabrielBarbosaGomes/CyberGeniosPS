import { Card } from "../Card";
import { CarsComponent } from "./styles";
import Carousel from "react-elastic-carousel";
import mustang from '../../assets/imagens/image11.png';
import image16 from '../../assets/imagens/image16.png';
import image15 from '../../assets/imagens/image15.png';
import carOne from '../../assets/imagens/image 22.png';
import { Arrow } from "../Arrow";
import { gql, useQuery } from "@apollo/client";



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


const GET_CAR_QUERY = gql`
    query {
        cars {
            id
            kmH
            people
            lightning
            carYear
            imageCar {
                url
              }
          
        }
        
    }
`
// interface Car {
//     id: string;
//     carYear: string;

// }

export function Cars(){
    const {data} = useQuery(GET_CAR_QUERY)
    console.log(data)
    console.log(data?.cars)

    const BreakPoints= [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2, itemsToScroll: 2, itemPadding: [0, 50]},
        {width: 768, itemsToShow: 3, itemsToScroll: 3, itemPadding: [0, 50]},
    ]

    return(
        <CarsComponent className="paddingContainer">
             <Carousel renderArrow={Arrow} breakPoints={BreakPoints}>            

                {data?.cars.map((car: any) => (
                <Card key={car.id} image={car.imageCar.url} /*vw={car.vw} vh={car.vh} eixoX={car.eixoX}*/ data={car.carYear} kmH={car.kmH} raio={car.lightning} people={car.people}>Honda Aversa</Card>
                ))}

            </Carousel>
        </CarsComponent>
    )
}