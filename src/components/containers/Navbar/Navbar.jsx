import { useLocation } from "react-router";
import NavbarFragment from "../../fragments/Navbar/NavbarFragment";

const Navbar = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  return (
    <div className="navbar flex flex-col max-w-screen w-full fixed z-100">
      <NavbarFragment height="h-10">
        <NavbarFragment.NavbarTop />
      </NavbarFragment>
      <NavbarFragment height="h-20">
        <NavbarFragment.NavbarMiddle />
      </NavbarFragment>
      <NavbarFragment height="h-16" color={`${isLandingPage === true ? "bg-gray-800" : "bg-gray-100"}`}>
        <NavbarFragment.NavbarBottom />
      </NavbarFragment>

      {!isLandingPage && (
        <div className="w-full bg-gray-100 px-4 py-2">
          <Breadcrumb />
        </div>
      )}
    </div>
  )
}

export default Navbar