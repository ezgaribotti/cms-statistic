
const routes = {
    home: "/",
    login: "/login",
    check_access_token: "/check-access-token",
    dashboard: "/dashboard",
    logout: "/logout",
    user_profile: "/user-profile",
    users: "/users",
    roles: "/roles",
};

routes.path = {
    create: "create",
    edit: "edit/:id",
    delete: "delete/:id",
}

export default routes;
