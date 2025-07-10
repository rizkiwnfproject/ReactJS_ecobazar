import useRouteInfo from "../../../hooks/UseRouteInfo";
import NavbarFragment from "../../fragments/Navbar/NavbarFragment";

const NavbarSection = () => {
  const { isLandingPage } = useRouteInfo()
  return (
    <>
      <div className="navbar flex flex-col max-w-screen w-full fixed p-0 z-100">
        <NavbarFragment height="h-10">
          <NavbarFragment.NavbarTop />
        </NavbarFragment>
        <NavbarFragment height="h-20">
          <NavbarFragment.NavbarMiddle />
        </NavbarFragment>
        <NavbarFragment height="h-16" color={`${isLandingPage === true ? "bg-gray-800" : "bg-white"}`}>
          <NavbarFragment.NavbarBottom />
        </NavbarFragment>
      </div>
    </>
  )
}

export default NavbarSection