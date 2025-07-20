import useRouteInfo from "../../../hooks/UseRouteInfo";
import NavbarBottom from "../../fragments/Navbar/NavbarBottom";
import NavbarFragment from "../../fragments/Navbar/NavbarFragment";
import NavbarMiddle from "../../fragments/Navbar/NavbarMiddle";
import NavbarTop from "../../fragments/Navbar/NavbarTop";
import StickyNavbar from "../../fragments/Navbar/StickyNavbar";

const NavbarSection = () => {
  const { isLandingPage } = useRouteInfo()
  return (
    <>
      <div className="navbar flex flex-col max-w-screen w-full fixed p-0 z-100">
        <NavbarFragment height="h-10" classname="hidden md:block">
          <NavbarTop />
        </NavbarFragment>
        <NavbarFragment height="h-20" classname="hidden md:block">
          <NavbarMiddle />
        </NavbarFragment>
        <NavbarFragment height="md:h-16" classname="" color={`${isLandingPage === true ? "bg-gray-900 mg:bg-gray-800" : "bg-white"}`}>
          <NavbarBottom />
        </NavbarFragment>
      </div>

    </>
  )
}

export default NavbarSection