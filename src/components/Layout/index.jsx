import { Outlet } from "react-router-dom";
import { ContainerLayout, GlobalStyle } from "./globalStyle";
import NavBar from "../NavBar";

const Layout = () => {
    return (
        <>
            <GlobalStyle />
            <ContainerLayout>
                <NavBar />
                <Outlet />
            </ContainerLayout>
        </>
    )
};
export default Layout;