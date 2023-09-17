import { Outlet } from "react-router-dom";
import { ContainerLayout, GlobalStyle, LineSeparator } from "./globalStyle";
import NavBar from "../NavBar";

const Layout = () => {
    return (
        <>
            <GlobalStyle />
            <ContainerLayout>
                <NavBar />
                <LineSeparator />
                <Outlet />
            </ContainerLayout>
        </>
    )
};
export default Layout;