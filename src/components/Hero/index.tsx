import { HeroComponet, ImageHero } from "./styles";
import imageHero2 from "../../assets/imagens/imgHero2.png"
import imageHero from "../../assets/imagens/imageHero.png"

export function Hero() {
    return (
        <HeroComponet>
            <picture>
                <source srcSet={imageHero2} media="(min-width: 768px)" />
                <ImageHero src={imageHero} />
            </picture>
        </HeroComponet>
    )
}