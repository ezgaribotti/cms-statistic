import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function ControlPanel() {
    return (
        <>
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default ControlPanel;
