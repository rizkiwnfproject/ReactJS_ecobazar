import { useLocation } from "react-router";

const useRouteInfo = () => {
    const location = useLocation();
    const { pathname } = location;

    return {
        pathname,
        isLandingPage: pathname === "/",
        isAuthPage: pathname.startsWith("/auth"),
        isAdminPage: pathname.startsWith("/admin"),
        isUserPage: pathname.startsWith("/user"),
    };
};

export default useRouteInfo;