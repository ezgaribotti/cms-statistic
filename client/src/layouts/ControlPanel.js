import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AppBar from "../components/AppBar";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import { Fragment, Suspense } from "react";
import Space from "../components/Space";
import Footer from "../components/Footer";
import CartBar from "../components/CartBar";

function ControlPanel() {

    const { sidebar } = useSelector(state => state.global.payload);

    return (
        <Fragment>
            <Sidebar />
            <CartBar />
            <main style={{ marginLeft: sidebar ? (window.screen.width > 810 ? 240 : 0) : 0 }}>
                <AppBar />
                <Container>
                    <Suspense fallback={<Loader />}>
                        <Space top size={15}>
                            <Outlet />
                        </Space>
                    </Suspense>
                </Container>
                <Footer />
            </main>
        </Fragment>
    );
}

export default ControlPanel;
