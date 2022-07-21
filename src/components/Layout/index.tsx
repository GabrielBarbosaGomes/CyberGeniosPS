import { Footer } from "../Footer";
import { Menu } from "../Menu";
import { LayoutComponent } from "./styles";

export function Layout(props: any) {
    return (
        <LayoutComponent className=''>
            <Menu></Menu>
            {props.children}
            <Footer></Footer>
        </LayoutComponent>
    )
}