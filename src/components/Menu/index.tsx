import { Container, ListWrapper, List, ListItem, BackDrop, BackgroundHeader } from "./styles";
import { Icon } from '@iconify/react';
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export function Menu(props: any) {
    const [active, setActive] = useState(false)
    const [anchorHeaderRef, anchorHeaderInView] = useInView({ threshold: 1 });

    function toggleMode() {
        setActive(!active);
    }

    return (
        <>
            <span ref={anchorHeaderRef} className='scroll' ></span>
            <Container className="paddingContainer">
                <a>
                    <div className={active ? 'icon iconActive' : 'icon'} onClick={toggleMode}>
                        <div className="Hamburguer HamburguerActive"></div>
                    </div>
                </a>
                <div className={active ? 'menu menuOpen paddingContainer' : 'menu paddingContainer'} >
                    <ListWrapper>
                        <Icon icon="carbon:logo-delicious" width="48px" />
                        <List>
                            <ListItem><a href="#">Home</a></ListItem>
                            <ListItem><a href="#">Sobre</a></ListItem>
                            <ListItem><a href="#">Tabela</a></ListItem>
                            <ListItem><a href="#">Fale conosco</a></ListItem>
                            <ListItem><a href="#">Entrar <Icon icon="ant-design:user-outlined" color="#ebeff2" id="enter" /></a></ListItem>
                        </List>

                    </ListWrapper>
                </div>
                <BackDrop onClick={toggleMode} className={active ? 'active' : ''} />
                <BackgroundHeader className={anchorHeaderInView ? '' : 'translate'} />
            </Container>
        </>
    )
}