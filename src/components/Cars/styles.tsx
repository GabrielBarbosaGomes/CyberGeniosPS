import styled from "styled-components";

export const CarsComponent = styled.section`
    background-color: var(--color-white);
    display: flex;
    box-sizing: border-box;
    padding: 0 0 25px;
    align-items: center;
    justify-content: space-around;

    .rec-dot{
        display: none;
    }

    .rec-item-wrapper{
        padding-top: 100px !important;
        overflow-x: hidden;
    }

    @media (min-width: 1024px) {
        .rec-dot{
            display: block;
            border-radius: 0;
            width: 91px;
            height: 4px;
            background-color: var(--color-tertiary);
            border-color: var(--color-tertiary);
            box-shadow: none;
            margin: 5px 0;
        }

        .rec-dot_active{
            background-color: var(--color-primary);
            border-color: var(--color-primary);
        }

        .rec-pagination{
            max-width: 30vw;
        }
    }
`