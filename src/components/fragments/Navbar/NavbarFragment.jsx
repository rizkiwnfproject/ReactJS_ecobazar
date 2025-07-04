import Button from "../../elements/Button/Button"
import Logo from "../../elements/Logo/Logo"
import { FlexCenter } from "../../elements/Flex/Flex"
import Input from "../../elements/Input/Input"
import { HiOutlineMapPin, HiMagnifyingGlass, HiOutlineHeart, HiOutlineShoppingBag, HiMiniPhoneArrowUpRight } from "react-icons/hi2";
import TextCustom from "../../elements/Text/Text";
import { Link } from "react-router";
import { navbarData } from "../../../constants/Constant";
import useRouteInfo from "../../../hooks/UseRouteInfo";


const NavbarFragment = (props) => {
  const { children, height, color = "bg-white border-green-100" } = props
  return (
    <div className={`w-full border-b ${color}`}>
      <div className={`flex justify-between mx-auto w-7xl items-center ${height}`}>
        {children}
      </div>
    </div>
  )
}

const NavbarTop = () => {
  return (
    <>
      <FlexCenter>
        <HiOutlineMapPin color="#666666" size={"1rem"} />
        <TextCustom type="body_xs_400">Store Location: Lincoln- 344, Illinois, Chicago, USA</TextCustom>
      </FlexCenter>
      <FlexCenter>
        <FlexCenter classname="text-gray-700 text-xs">
          <TextCustom type="body_xs_400"><Link to="/auth/login">Sign In</Link></TextCustom>
          <TextCustom type="body_xs_400">/</TextCustom>
          <TextCustom type="body_xs_400">Sign Up</TextCustom>
        </FlexCenter>
      </FlexCenter>
    </>
  )
}

const NavbarMiddle = () => {
  return (
    <>
      <Logo />
      <div className="navbar__middle_search w-[498px] relative">
        <Input classname="px-12 py-3" type="text" placeholder="Search" />
        <div className="navbar__middle_icon absolute top-3.5 left-4">
          <HiMagnifyingGlass size={"1.5rem"} color="" />
        </div>
        <Button category="input" classname="rounded-r-xl px-6">search</Button>
      </div>
      <FlexCenter classname="text-green-900">
        <HiOutlineHeart size={"2rem"} color="#002603" />
        <FlexCenter>
          <div className="relative border-l-2 border-l-green-50 px-3 ml-3">
            <HiOutlineShoppingBag size={"2rem"} color="#002603" />
            <h6 className="absolute top-0 right-3 bg-[#2C742F] border border-white w-4 h-4 rounded-full text-[10px] text-center text-white ">2</h6>
          </div>
          <div className="">
            <TextCustom classname="text-[11px]" textColor="text-gray-700">Shopping cart:</TextCustom>
            <TextCustom type="body_sm_500">$57.00</TextCustom>
          </div>
        </FlexCenter>
      </FlexCenter>
    </>
  )
}

const NavbarBottom = () => {
  const { isLandingPage } = useRouteInfo()
  return (
    <>
      <div className="navbar__end_menu">
        <ul className="flex gap-5 text-sm text-gray-400 font-medium">
          {navbarData.map((item, index) => (
            <li
              key={index}
              className={`
                ${isLandingPage
                  ? index === 0
                    ? "text-white"
                    : "text-gray-400"
                  : index === 0
                    ? "text-green-success"
                    : "text-gray-400"
                }
              `}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <FlexCenter gap="gap-3" classname="justify-between text-white">
        <HiMiniPhoneArrowUpRight size={"1.5rem"} />
        <TextCustom type="body_sm_500" textColor="text-white">
          (219) 555-0114
        </TextCustom>
      </FlexCenter>
    </>
  )
}

NavbarFragment.NavbarTop = NavbarTop;
NavbarFragment.NavbarMiddle = NavbarMiddle;
NavbarFragment.NavbarBottom = NavbarBottom;

export default NavbarFragment