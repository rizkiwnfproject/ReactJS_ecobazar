import MainLayouts from "../layouts/MainLayouts"
import ErrorPage from "../pages/404"
import LandingPage from "../pages/LandingPage/LandingPage"

const PublicRoutes = {
    path: "/",
    element: <MainLayouts />,
    children: [
        { path: "", element: <LandingPage /> },
        // { path: "about", element: <About /> },
        // { path: "products", element: <Products /> },
        // { path: "faq", element: <FAQ /> },
        { path: "*", element: <ErrorPage /> }

    ]
}

export default PublicRoutes