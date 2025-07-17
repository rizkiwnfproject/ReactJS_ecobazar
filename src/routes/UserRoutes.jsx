import MainLayouts from "../layouts/MainLayouts";
import UserSidebarLayouts from "../layouts/UserSidebarLayouts";
import ErrorPage from "../pages/404";
import UserCheckout from "../pages/user/UserCheckout";
import UserDashboardPage from "../pages/user/UserDashboardPage";
import UserOrderDetail from "../pages/user/UserOrderDetail";
import UserOrderHistory from "../pages/user/UserOrderHistory";
import UserSettings from "../pages/user/UserSettings";
import UserShoppingCart from "../pages/user/UserShoppingCart";
import UserWishlist from "../pages/user/UserWishlist";

const UserRoutes = {
    path: "/user",
    element: <MainLayouts />,
    children: [
        {
            element: <UserSidebarLayouts />,
            children: [
                { path: "dashboard", element: <UserDashboardPage /> },
                { path: "order-history", element: <UserOrderHistory /> },
                { path: "order-details", element: <UserOrderDetail /> },
                { path: "settings", element: <UserSettings /> },
            ],
        },
        { path: "wishlist", element: <UserWishlist /> },
        { path: "shopping-cart", element: <UserShoppingCart /> },
        { path: "checkout", element: <UserCheckout /> },
        { path: "*", element: <ErrorPage /> }
    ],
};

export default UserRoutes;