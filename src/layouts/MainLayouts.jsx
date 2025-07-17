import { Outlet } from "react-router"
import NavbarSection from "../components/sections/Navbar/NavbarSection"
import FooterSection from "../components/sections/Footer/FooterSection"
import useRouteInfo from "../hooks/UseRouteInfo"
import Breadcrumb from "../components/elements/Breadcrumb/Breadcrumb";

const MainLayouts = () => {
  const { isLandingPage } = useRouteInfo()
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavbarSection />
        <div className="flex flex-col max-w-screen w-full h-full">
          {
            !isLandingPage && (
              <div className="w-full bg-gray-100 mt-46">
                <Breadcrumb />
              </div>
            )
          }
        </div>
        <main className="flex-grow">
          <Outlet />
        </main>

        <div className="pt-0">
          <FooterSection />
        </div>
      </div>
    </>
  )
}

export default MainLayouts