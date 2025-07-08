import { Outlet } from "react-router"
import NavbarSection from "../components/sections/Navbar/NavbarSection"
import FooterSection from "../components/sections/Footer/FooterSection"
import useRouteInfo from "../hooks/UseRouteInfo"
import Breadcrumb from "../components/elements/Breadcrumb/Breadcrumb";
import SectionWrapper from "../components/fragments/Wrapper/Wrapper";
import SidebarProfile from "../components/fragments/Sidebar/Sidebar";

const MainLayouts = () => {
  const { isLandingPage, isUserPage } = useRouteInfo()
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
          {isUserPage ? (
            <SectionWrapper classname="grid grid-cols-4 pt-10 gap-5">
              <SidebarProfile />
              <div className="col-span-3">
                <Outlet />
              </div>
            </SectionWrapper>
          ) : (
            <Outlet />
          )}
        </main>

        <div className="pt-20">
          <FooterSection />
        </div>
      </div>
    </>
  )
}

export default MainLayouts