import { Card } from "../Card";
import { CarsComponent } from "./styles";
import Carousel from '@itseasy21/react-elastic-carousel';
import image11 from '../../assets/imagens/image11.png';
import { Arrow } from "../Arrow";
import { gql, useQuery } from "@apollo/client";

const GET_CAR_QUERY = gql`
    query {
        cars {
            id
            kmH
            people
            lightning
            carYear
            name
            imageCar {
                url
              }
          
        }
        
    }
`
export function Cars() {
    const { data } = useQuery(GET_CAR_QUERY)

    const BreakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, itemPadding: [0, 50] },
        { width: 768, itemsToShow: 3, itemsToScroll: 3, itemPadding: [0, 50] },
    ]

    return (
        <CarsComponent className="paddingContainer">
            <Carousel isRTL={false} enableAutoPlay autoPlaySpeed={5000} renderArrow={Arrow} breakPoints={BreakPoints}>

                {data?.cars.map((car: any) => (
                    <Card key={car.id} image={car.imageCar.url != "" ? car.imageCar.url : image11} data={car.carYear} kmH={car.kmH} raio={car.lightning} people={car.people}>{car.name}</Card>
                ))}

            </Carousel>
        </CarsComponent>
    )
}