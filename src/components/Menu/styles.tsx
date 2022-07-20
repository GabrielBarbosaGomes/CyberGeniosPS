import styled from "styled-components";


export const Container = styled.nav`
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 5;
    padding: 24px;
    img{
        background-color: var(--color-primary);
        border: none;
        width: 48px;
        margin-bottom: 48px;
    }

    .icon {
        z-index: 4;
        left: 1%;
        width: fit-content;
        height: 44px;
        cursor:pointer;
    }

    .Hamburguer{
        top: 50%;
        left: 10%;
        width: 37px;
        height: 6px;
        background-color: var(--color-white);
        position: relative;
        transition: 0.5s;

        &:before{
            top: -12px;
            content: '';
            position: absolute;
            width: 37px;
            height: 6px;
            background-color: var(--color-white);
            transition: 0.5s;
        }
        &:after{
            top: 12px;
            content: '';
            position: absolute;
            width: 37px;
            height: 6px;
            background-color: var(--color-white);
            transition: 0.5s;
        }

    }

    .icon.iconActive .Hamburguer{
        background: transparent;
        box-shadow: 0 2px 5px transparent;
        z-index: 1001;
        &:after{
            top:0;
            background: transparent;
            transform: rotate(225deg);
            /* box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); */
        } 
        &:before{
            top:0;
            background: transparent;
            transform: rotate(135deg);
            /* box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); */
        }
    }  
        .menu{
                display: none;
                width: 0px;
                @media (min-width: 1024px){
                    display: flex;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    justify-content: center;
                    padding: 24px 32px;
                }
            }

        .menu.menuOpen{
            min-width: 150px;
            min-height: 100vh;
            background: white;
            box-shadow: 3px 0px 9px rgba(0, 0, 0, 0.15);
            border-radius: 0px 24px 24px 0px;
            display: block;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 1000;
            width: max-content;
        }

        @media (min-width: 1024px) {
            
            padding: 32px;

            img{
                margin: 0;
            }
            .icon{
                display: none;
            }
            .Hamburguer{
                display: none;
            }
        }
`

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 0 0;
    flex-wrap: nowrap; 
    // background: var(--color-white);
    font-size: var(--font-size-md);
    font-weight: 500;
        @media (min-width: 1024px){
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0;
            flex-direction: row;
            width: 100%;
        }
`

export const List = styled.ul`
    padding: 0;
    list-style: none;
    margin: 0;

    @media (min-width: 1024px) {
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: var(--font-size-md);
        position: relative;
        top: 10px;
    }


`

export const ListItem =styled.li`
        cursor: pointer;
        padding-bottom: 32px; 
        &:hover{
            font-weight: 700;
        }

        a{
            text-decoration: none;
            color: var(--color-primary);
            display: flex;

            svg{
                display: none;
            }
        }
        

        @media (min-width: 1024px){
            display: block;
            a{
                display: flex;
                color: var(--color-white);
                
                svg{
                margin-left: 15px;
                display: flex;
            }
            }

            padding: 0 48px;
                &:hover{
                font-weight: 700;
                }            
        }
`

export const BackDrop = styled.div`
    &.active{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.2);
    }
`