import {Container, ListWrapper, List, ListItem, BackDrop} from "./styles";
import { Icon } from '@iconify/react';
import Vector from "../../assets/imagens/Vector.png"
import { useState } from "react";

export function Menu(){
    const [active, setActive] = useState(false)

    function toggleMode(){
        setActive(!active);
        console.log(active)
    }
    
    return(
        <Container className="paddingContainer">
            <a>                
                <div className={active ? 'icon iconActive' : 'icon'} onClick={toggleMode}>
                    <div className="Hamburguer HamburguerActive"></div>
                </div>
            </a>
                <div className={active ? 'menu menuOpen paddingContainer' : 'menu paddingContainer'} >
                    <ListWrapper>
                    <img src={Vector} />
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
        </Container>
    )
}