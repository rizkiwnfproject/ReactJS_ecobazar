import MainLayouts from "../layouts/MainLayouts"
import ErrorPage from "../pages/404"
import ListBlogPage from "../pages/blog/ListBlogPage"
import SingleBlogPage from "../pages/blog/SingleBlogPage"
import FaqsPage from "../pages/Faqs"
import LandingPage from "../pages/LandingPage/LandingPage"

const PublicRoutes = {
    path: "/",
    element: <MainLayouts />,
    children: [
        { path: "", element: <LandingPage /> },
        { path: "blog", element: <ListBlogPage /> },
        { path: "blog/1", element: <SingleBlogPage /> },
        // { path: "about", element: <About /> },
        // { path: "products", element: <Products /> },
        { path: "faqs", element: <FaqsPage /> },
        { path: "*", element: <ErrorPage /> }

    ]
}

export default PublicRoutes