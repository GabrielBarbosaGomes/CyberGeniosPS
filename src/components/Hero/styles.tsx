import styled, {keyframes} from "styled-components";
import imageHero from "../../assets/imagens/imageHero.png"

export const HeroComponet = styled.section`
    // background-attachment: fixed;
    // border-radius: 0 0px 20px 20px;
    // clip-path: circle(112vh at 50% -80vh);
    overflow: hidden;
    margin-bottom: 150px;
    position: relative;
    /* circle { mix-blend-mode: screen; }  */
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
        
     svg{
        position: absolute;
        width: 316px;
        height: 52px;
        left: 12px;
        top: 74px;
        z-index: 4;

     }
    // @media (min-width: 1023px){
    //     clip-path: circle(170vh at 50% -80vh);
    //     min-height: 657px;
    // }

    // @media (min-width: 1440px){
    //     clip-path: circle(223vh at 50% -80vh);
    //     min-height: 1100px;
    // }
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
`

export const MustangContainer = styled.div`
    /* circle { mix-blend-mode: screen; } */
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

