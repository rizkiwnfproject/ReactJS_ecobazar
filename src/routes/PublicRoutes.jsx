import MainLayouts from "../layouts/MainLayouts"
import ErrorPage from "../pages/404"
import AboutPage from "../pages/about/AboutPage"
import ListBlogPage from "../pages/blog/ListBlogPage"
import SingleBlogPage from "../pages/blog/SingleBlogPage"
import ContactPage from "../pages/contact/ContactPage"
import FaqsPage from "../pages/Faqs"
import LandingPage from "../pages/LandingPage/LandingPage"

const PublicRoutes = {
    path: "/",
    element: <MainLayouts />,
    children: [
        { path: "", element: <LandingPage /> },
        { path: "blog", element: <ListBlogPage /> },
        { path: "blog/1", element: <SingleBlogPage /> },
        { path: "about-us", element: <AboutPage /> },
        { path: "contact-us", element: <ContactPage /> },
        // { path: "products", element: <Products /> },
        { path: "faqs", element: <FaqsPage /> },
        { path: "*", element: <ErrorPage /> }

    ]
}

export default PublicRoutes