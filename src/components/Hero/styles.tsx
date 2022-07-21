import styled, {keyframes} from "styled-components";
import imageHero from "../../assets/imagens/imageHero.png"

export const HeroComponet = styled.section`
    overflow: hidden;
    margin-bottom: 90px;
    position: relative;
     &::after {
         content: "";
         position: absolute;
         display: block;
         width: 200%;
         height: 105%;
         left: 50%;
         top: 50%;
         transform: translateY(-50%) translateX(-50%);
         border-bottom: 60px solid var(--color-white);
         border-radius: 100%;
         z-index: 2;
         
     }

     @media (min-width: 1024px){
        &::after{
            border-bottom: 65px solid var(--color-white);
        }
        
     }

     @media (min-width: 1440px) {
        &::after{
            border-bottom: 90px solid var(--color-white);
        }
    }
        
     svg{
        position: absolute;
        width: 316px;
        height: 52px;
        left: 12px;
        top: 74px;
        z-index: 4;

     }
`

export const ImageHero= styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    position: relative;
    z-index: 1;
    min-height: 250px;
    @media (min-width: 1024px) {
        height: 700px;
    }

    @media (min-width: 1440px) {
        height: 960px;
    }

`

export const MustangContainer = styled.div`
    position: relative;
    z-index: 5;
    top: 50%;
     h1{
        position: absolute;
        color: white;
        left: 30px;
        top: 65px;
        letter-spacing: 9px;
        text-transform: uppercase;
     }

     div{
        position: absolute;
        width: 50%;
        background-color: white;
        height: 40px;
        border-radius: 50%;
        border-radius: 50%;
        top: 107px;
        left: 138px;
     }
`

export const Crazy = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    
`

