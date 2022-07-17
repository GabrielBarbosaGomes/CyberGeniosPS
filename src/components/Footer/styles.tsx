import styled from "styled-components";
import carFooter from "../../assets/imagens/carFooter.png"
import carFooter2 from "../../assets/imagens/carFooter2.png"

export const FooterComponet = styled.footer`
    background-image:url(${carFooter});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: end;
    text-align: right;
    color: var(--color-white);
    line-height: 200%;
    font-size: var(--font-size-md);
    padding: 50px 24px 240px;
    font-weight: 300;

    @media (min-width: 1024px){
        background-image:url(${carFooter2});
        padding-right: 157px;
    }
`

export const ParagraphFooter= styled.p`
    padding-bottom: 16px;
    max-width: 616px;
`
