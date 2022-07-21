import { CardComponent, IconText, ImageCard, Paragraph } from './styles'
import { Icon } from '@iconify/react';
import { Button } from '../Buttons';


export function Card(props: any) {
    return (
        <CardComponent>
            <ImageCard src={props.image} />

            <h2>{props.children}</h2>
            <IconText>
                <Icon icon="bi:calendar2-date" />
                <Paragraph>{props.data}</Paragraph>
            </IconText>

            <IconText>
                <Icon icon="fluent:top-speed-20-regular" />
                <Paragraph>{props.kmH}</Paragraph>
            </IconText>

            <IconText>
                <Icon icon="simple-line-icons:energy" />
                <Paragraph>{props.raio}</Paragraph>
            </IconText>

            <IconText>
                <Icon icon="fluent:people-20-regular" />
                <Paragraph>{props.people}</Paragraph>
            </IconText>

            <Button className="btn" borderRadius="21px">
                Ver Carro
            </Button>

        </CardComponent>
    )
}