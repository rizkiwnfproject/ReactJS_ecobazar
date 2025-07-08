import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/404";
import UserDashboardPage from "../pages/user/UserDashboardPage";
import UserOrderDetail from "../pages/user/UserOrderDetail";
import UserOrderHistory from "../pages/user/UserOrderHistory";
import UserSettings from "../pages/user/UserSettings";

const UserRoutes = {
    path: "/user",
    element: <MainLayouts />,
    children: [
        { path: "dashboard", element: <UserDashboardPage /> },
        { path: "order-history", element: <UserOrderHistory /> },
        { path: "order-details", element: <UserOrderDetail /> },
        { path: "settings", element: <UserSettings /> },
        { path: "*", element: <ErrorPage /> }
    ],
};

export default UserRoutes;