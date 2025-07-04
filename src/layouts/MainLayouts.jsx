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
        <div className="flex flex-col max-w-screen w-full h-full mt-46">
          {
            !isLandingPage && (
              <div className="w-full bg-gray-100">
                <Breadcrumb />
              </div>
            )
          }
        </div>
        <main className="flex-grow pt-[100px]">
          <Outlet />
        </main>

        <div className="pt-[200px]">
          <FooterSection />
        </div>
      </div>
    </>
  )
}

export default MainLayouts