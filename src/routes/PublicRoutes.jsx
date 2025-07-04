import LandingLayouts from "../components/layouts/Landing/LandingLayouts"
import LandingPage from "../pages/LandingPage/LandingPage"

const PublicRoutes = {
    path: "/",
    element: <LandingLayouts />,
    children: [
        { path: "", element: <LandingPage /> },
        // { path: "about", element: <About /> },
        // { path: "products", element: <Products /> },
        // { path: "faq", element: <FAQ /> },
    ]
}

export default PublicRoutes