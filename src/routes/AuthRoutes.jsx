import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/404";
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"
const AuthRoutes = {
  path: "/auth",
  element: <MainLayouts />,
  children: [
    { path: "login", element: <LoginPage /> },
    { path: "register", element: <RegisterPage /> },
    { path: "*", element: <ErrorPage /> }
  ],
};
export default AuthRoutes