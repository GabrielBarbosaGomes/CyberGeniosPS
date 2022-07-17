import { FooterComponet, ParagraphFooter } from "./styles";
import carFooter from "../../assets/imagens/carFooter.png"
import { Button } from "../Buttons";

export function Footer(props: any){
    return(
        <FooterComponet image={carFooter}>
            <h1>O que são</h1>
            <ParagraphFooter>
                A sigla SUV significa Sport Utility Vehicle -- ou seja, veículo utilitário esportivo. As SUVs costumam ter porte avantajado, além de interior espaçoso e possibilidade de trafegar dentro e fora da cidade.
            </ParagraphFooter>
            <Button borderRadius="4px" padding="4px 56px" colorB="var(--color-white)" color="var(--color-white)">
                Ver carros
            </Button>
        </FooterComponet>
    )
}