
const routes = {
    home: "/",
    login: "/login",
    check_access_token: "/check-access-token",
    dashboard: "/dashboard",
    logout: "/logout",
    user_profile: "/user-profile",
    users: "/users",
    roles: "/roles",
    update_password: "/update-password",
    statistics: "/statistics",
    customers: "/customers",
    genders: "/genders",
    products: "/products",
    provinces: "/provinces",
    categories: "/categories",
    orders: "/orders",
    order_details: "/order-details",
    feedbacks: "/feedbacks",
    cart: "/cart",
    create_preference: "/create-preference",
    status: "/status",
    sortings: "/sortings",
};

routes.id = "/:id";

routes.path = {
    create: "create",
    edit: "edit",
    delete: "delete",
};

export default routes;
