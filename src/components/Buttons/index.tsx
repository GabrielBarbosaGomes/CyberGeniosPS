import { Children } from "react";
import { ButtonComponent } from "./styles";

export function Button(props: any){
    return(
        <ButtonComponent className={props.className} border={props.borderRadius} padding={props.paddingSide} colorBorder={props.colorB} colorT={props.color} >{props.children}</ButtonComponent>
    )
 }