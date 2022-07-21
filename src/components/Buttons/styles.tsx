import styled from 'styled-components';

export interface Props {
    colorBorder: string;
    colorT: string;
    border: string;
    padding: string;
}

export const ButtonComponent = styled.button`
        color: ${(props: Props) => props.colorT || "var(--color-primary)"};
        border: 1px solid ${(props: Props) => props.colorBorder || "var(--color-primary)"};
        border-radius: ${(props: Props) => props.border || "21px"};
        cursor: pointer;
        padding: ${(props: Props) => props.padding || "12px 72px"};
        display: block;
        background: transparent;
        font-weight: 500;
        z-index: 2;
        
        
        &:hover{
            background: var(--color-primary);
            color: var(--color-white);
        }
`