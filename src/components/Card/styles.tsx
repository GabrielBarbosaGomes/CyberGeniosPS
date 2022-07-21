import styled from "styled-components";

export const CardComponent = styled.div`
    border: 1px solid var(--color-primary);
    border-radius: 24px;
    max-width: 278px;
    box-sizing: border-box;
    text-align: center;
    padding: 24px 34px;
    position: relative;
    margin: 0 auto;

    h2{
        font-weight: 400;
    }

    .btn{
        padding: 12px 40px;
        min-width: 100%;
    }
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
    width: auto;
    height: 185px;
    top: -120px;
    left: 50%;
    transform: translateX(-50%);
`

