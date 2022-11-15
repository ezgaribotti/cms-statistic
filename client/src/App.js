import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import routes from "./routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CheckAccessToken from "./pages/CheckAccessToken";
import Dashboard from "./pages/Dashboard";
import ControlPanel from "./layouts/ControlPanel";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";

function IsAuth() {
    const { auth } = useSelector(state => state.auth.payload);

    return auth ? <Outlet /> : <Navigate to={routes.check_access_token} />
}

function App() {

    const accessToken = useSelector(state => state.auth.payload.access_token);

    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;

    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.home} element={<Home />} />
                <Route path={routes.login} element={<Login />} />
                <Route path={routes.check_access_token} element={<CheckAccessToken />} />
                <Route element={<IsAuth />}>
                    <Route element={<ControlPanel />}>
                        <Route path={routes.dashboard} element={<Dashboard />} />
                    </Route>
                </Route>
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
