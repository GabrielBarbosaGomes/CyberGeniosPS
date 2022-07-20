import {CardComponent, IconText, ImageCard, Paragraph} from './styles'
import { Icon } from '@iconify/react';
import { Button } from '../Buttons';


export function Card(props: any){
    return(
        <CardComponent>
            <ImageCard src={props.image} vw={props.Vw} vh={props.Vh} X={props.eixoX} Y={props.eixoY} />

            <h2>{props.children}</h2>
            <IconText>
                <Icon icon="bi:calendar2-date"/>
                <Paragraph>{props.data}</Paragraph>
            </IconText>

            <IconText>
                <Icon icon="fluent:top-speed-20-regular"/>
                <Paragraph>{props.kmH}</Paragraph>
            </IconText>

            <IconText>
                <Icon icon="simple-line-icons:energy"/>
                <Paragraph>{props.raio}</Paragraph>
            </IconText>

            <IconText>
                <Icon icon="fluent:people-20-regular"/>
                <Paragraph>{props.people}</Paragraph>
            </IconText>

            <Button borderRadius="21px" >
                Ver Carro
            </Button>
            
        </CardComponent>
    )
}