import { Blur, FooterComponet, ParagraphFooter, LogLat } from "./styles";

import { Button } from "../Buttons";

export function Footer(props: any){
    return(
        <FooterComponet className="paddingContainer" >
            <Blur />
            <LogLat>
                <h1 className="titleMobile">O que são</h1>
                <h1 className="titleDesktop">Mustang</h1>
                <ParagraphFooter>
                    A sigla SUV significa Sport Utility Vehicle -- ou seja, veículo utilitário esportivo. As SUVs costumam ter porte avantajado, além de interior espaçoso e possibilidade de trafegar dentro e fora da cidade.
                    
                    
                </ParagraphFooter>

                <p className="textDesktop">
                        O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World's Fair. O Mustang, apesar de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.
                </p>
            </LogLat>
            <Button className= "btn" borderRadius="4px" padding="4px 56px" colorB="var(--color-white)" color="var(--color-white)">
                Ver carros
            </Button>
        </FooterComponet>
    )
}