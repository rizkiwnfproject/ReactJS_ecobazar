import MainLayouts from "../layouts/MainLayouts"
import ErrorPage from "../pages/404"
import AboutPage from "../pages/about/AboutPage"
import ShopPage from "../pages/shop/ShopPage"
import ListBlogPage from "../pages/blog/ListBlogPage"
import SingleBlogPage from "../pages/blog/SingleBlogPage"
import ContactPage from "../pages/contact/ContactPage"
import FaqsPage from "../pages/Faqs"
import LandingPage from "../pages/LandingPage/LandingPage"
import ProductDetailPage from "../pages/product/ProductDetailPage"

const PublicRoutes = {
    path: "/",
    element: <MainLayouts />,
    children: [
        { path: "", element: <LandingPage /> },
        { path: "blog", element: <ListBlogPage /> },
        { path: "blog/1", element: <SingleBlogPage /> },
        { path: "about-us", element: <AboutPage /> },
        { path: "contact-us", element: <ContactPage /> },
        { path: "shop", element: <ShopPage /> },
        { path: "shop/produk-detail", element: <ProductDetailPage /> },
        // { path: "products", element: <Products /> },
        { path: "faqs", element: <FaqsPage /> },
        { path: "*", element: <ErrorPage /> }

    ]
}

export default PublicRoutes