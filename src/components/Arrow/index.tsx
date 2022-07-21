import { ArrowComponent } from './style';


export function Arrow(props: any){

    return(
        <ArrowComponent onClick={props.onClick} disabled={props.isEdge}>{'❯'}</ArrowComponent>
    )
}