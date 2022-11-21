import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AppBar from "../components/AppBar";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import Space from "../components/Space";

function ControlPanel() {

    const { sidebar } = useSelector(state => state.global.payload);

    return (
        <>
            <Sidebar />
            <main style={{ marginLeft: sidebar ? (window.screen.width > 810 ? 240 : 0) : 0 }}>
                <AppBar />
                <Container>
                    <Suspense fallback={<Loader />}>
                        <Space top>
                            <Outlet />
                        </Space>
                    </Suspense>
                </Container>
            </main>
        </>
    );
}

export default ControlPanel;
