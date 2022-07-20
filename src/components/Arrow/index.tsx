import { Icon } from '@iconify/react';
import { ArrowComponent } from './style';
import { consts } from 'react-elastic-carousel';

export function Arrow(props: any){
    const pointer = props.type === consts.PREV ? "❮" : "❯";

    return(
        <ArrowComponent onClick={props.onClick} disabled={props.isEdge}>{pointer}</ArrowComponent>
    )
}