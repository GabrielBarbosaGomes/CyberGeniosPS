import styled from "styled-components";
import carFooter from "../../assets/imagens/carFooter.png"
import carFooter2 from "../../assets/imagens/carFooter2.png"

export const FooterComponet = styled.footer`
    background-image:url(${carFooter});
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    filter: contrast(0.9);
    display: flex;
    flex-direction: column;
    align-items: end;
    text-align: right;
    color: var(--color-white);
    line-height: 200%;
    /* font-size: var(--font-size-md); */
    padding: 50px 24px 240px;
    font-weight: 300;
    position: relative;

    &:after{
        content: '';
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }


    .titleMobile{
        margin: 0;
        font-weight: 500;
    }

    .titleDesktop{
        display: none;
    }

    .textDesktop{
        display: none;
    }

    @media (min-width: 1024px){
        background-image:url(${carFooter2});
        padding: 81px 0 95px;
        
        .titleMobile{
            display: none;
        }

        .titleDesktop{
            display: block;
            margin: 0;
            font-weight: 500;
        }

        
        .textDesktop{
            display: block;
            max-width: 40vw;
            padding: 16px 0px 40px;
            font-size: 20px;
            Line-height: 200%;
        }
    }

    @media (min-width: 1440px){
        .textDesktop{
            max-width: 38vw;
        }
    }
`

export const LogLat= styled.div`
    position: relative;
    z-index: 2;
`

export const Blur = styled.div`
    backdrop-filter: blur(5px);
    height: 60%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;

    @media (min-width: 1024px){ 
        height: 100%;
        width: calc(50% + 96px); 
        left: unset;

    }

    @media (min-width: 1440px){
        width: calc(50% + 133px);
    }
`

export const ParagraphFooter= styled.p`
    padding: 8px 0 20px;
    margin: 0;
    font-size: 16px;     

    @media (min-width: 1024px){ 
        display: none;
    }
`
