import { useLocation } from "react-router";

const useRouteInfo = () => {
    const location = useLocation();
    const { pathname } = location;

    return {
        pathname,
        isLandingPage: pathname === "/",
        isAuthPage: pathname.startsWith("/auth"),
        isAdminPage: pathname.startsWith("/admin"),
        isUserDashboard: pathname === "/user/dashboard",
    };
};

export default useRouteInfo;