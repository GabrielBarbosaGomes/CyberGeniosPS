import styled from "styled-components";

export const ArrowComponent = styled.button`
    display: none;
    position: relative;
    border: none;
    background: var(--color-white);
    font-size: 41px;

    @media (min-width: 1024px) {
        display: block;
    } 
    
    &:first-child {
        transform: scaleX(-1);
    }
`