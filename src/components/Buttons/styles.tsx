import styled from 'styled-components';

export const ButtonComponent = styled.button`
        color: ${props => props.colorT || "var(--color-primary)"};
        border: 1px solid ${props => props.colorBorder || "var(--color-primary)"};
        border-radius: ${props => props.border || "21px"};
        cursor: pointer;
        padding: ${props => props.padding || "12px 72px"};
        display: block;
        // width: 100%;
        background: transparent;
        font-weight: 500;
        &:hover{
            background: var(--color-primary);
            color: var(--color-white);
        }
`