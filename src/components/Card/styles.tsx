import styled from "styled-components";

export const CardComponent = styled.div`
    border: 1px solid var(--color-primary);
    border-radius: 24px;
    max-width: 278px;
    box-sizing: border-box;
    text-align: center;
    padding: 24px 24px;
    position: relative;
    margin: 0 auto;
`

export const IconText = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    color: var(--color-primary);
`

export const Paragraph = styled.p`
    padding-left: 27px;
`
export const ImageCard = styled.img`
    position: absolute;
    width: ${props => props.vw};
    height: ${props => props.vh};
    top: ${props => props.Y};
    left: ${props => props.X};
`