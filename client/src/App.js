import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import routes from "./routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CheckAccessToken from "./pages/CheckAccessToken";
import Dashboard from "./pages/Dashboard";
import ControlPanel from "./layouts/ControlPanel";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";
import UserProfile from "./pages/UserProfile";
import Users from "./pages/Users";
import config from "./config";
import EditForm from "./pages/EditForm";
import CreateForm from "./pages/CreateForm";
import ConfirmDelete from "./pages/ConfirmDelete";
import lang from "./lang";

function IsAuth() {
    const { auth } = useSelector(state => state.auth.payload);

    return auth ? <Outlet /> : <Navigate to={routes.check_access_token} />
}

function IsAdminRole() {
    const { id } = useSelector(state => state.auth.payload.user_profile.role);

    const referenceId = 1;

    if (id !== referenceId) toast.error(lang.errors.unauthorized);

    return id === referenceId ? <Outlet /> : <Navigate to={routes.dashboard} />
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
                        <Route path={routes.user_profile} element={<UserProfile />} />
                        <Route element={<IsAdminRole />}>
                            <Route path={routes.users}>
                                <Route index element={<Users />} />
                                <Route path={routes.path.edit} element={<EditForm config={config.users} />} />
                                <Route path={routes.path.create} element={<CreateForm config={config.users} />} />
                                <Route path={routes.path.delete} element={<ConfirmDelete config={config.users} />} />
                            </Route>
                        </Route>
                    </Route>
                </Route>
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
