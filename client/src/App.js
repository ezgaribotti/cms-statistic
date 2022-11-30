import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import routes from "./routes";
import Home from "./pages/Home";
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
import Customers from "./pages/Customers";
import Categorias from "./pages/Categories";
import Products from "./pages/Products";
import Feedbacks from "./pages/Feedbacks";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Cart from "./pages/Cart";
import { Suspense } from "react";

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
                <Route path={routes.index} element={<Suspense><Home /></Suspense>} />
                <Route path={routes.check_access_token} element={<CheckAccessToken />} />
                <Route element={<IsAuth />}>
                    <Route element={<ControlPanel />}>
                        <Route path={routes.dashboard} element={<Dashboard />} />
                        <Route path={routes.user_profile} element={<UserProfile />} />
                        <Route path={routes.cart} element={<Cart />} />
                        <Route element={<IsAdminRole />}>
                            <Route path={routes.users}>
                                <Route index element={<Users />} />
                                <Route path={routes.path.edit + routes.id} element={<EditForm config={config.users} />} />
                                <Route path={routes.path.create} element={<CreateForm config={config.users} />} />
                                <Route path={routes.path.delete + routes.id} element={<ConfirmDelete config={config.users} />} />
                            </Route>
                        </Route>
                        <Route path={routes.customers}>
                            <Route index element={<Customers />} />
                            <Route path={routes.path.edit + routes.id} element={<EditForm config={config.customers} />} />
                            <Route path={routes.path.create} element={<CreateForm config={config.customers} />} />
                            <Route path={routes.path.delete + routes.id} element={<ConfirmDelete config={config.customers} />} />
                        </Route>
                        <Route path={routes.categories}>
                            <Route index element={<Categorias />} />
                            <Route path={routes.path.edit + routes.id} element={<EditForm config={config.categories} />} />
                            <Route path={routes.path.create} element={<CreateForm config={config.categories} />} />
                            <Route path={routes.path.delete + routes.id} element={<ConfirmDelete config={config.categories} />} />
                        </Route>
                        <Route path={routes.products}>
                            <Route index element={<Products />} />
                            <Route path={routes.path.edit + routes.id} element={<EditForm config={config.products} />} />
                            <Route path={routes.path.create} element={<CreateForm config={config.products} />} />
                            <Route path={routes.path.delete + routes.id} element={<ConfirmDelete config={config.products} />} />
                        </Route>
                        <Route path={routes.order_details + routes.id} element={<OrderDetails />} />
                        <Route path={routes.orders}>
                            <Route index element={<Orders />} />
                            <Route path={routes.path.edit + routes.id} element={<EditForm config={config.orders} />} />
                            <Route path={routes.path.create} element={<Navigate to={routes.cart} />} />
                            <Route path={routes.path.delete + routes.id} element={<ConfirmDelete config={config.orders} />} />
                        </Route>
                        <Route path={routes.feedbacks}>
                            <Route index element={<Feedbacks />} />
                            <Route path={routes.path.edit + routes.id} element={<EditForm config={config.feedbacks} />} />
                            <Route path={routes.path.create} element={<Navigate to={routes.index} />} />
                            <Route path={routes.path.delete + routes.id} element={<ConfirmDelete config={config.feedbacks} />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
            <ToastContainer position="top-center" autoClose={1000} />
        </BrowserRouter>
    );
}

export default App;
