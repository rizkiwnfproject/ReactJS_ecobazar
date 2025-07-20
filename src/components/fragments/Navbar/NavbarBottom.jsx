import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import { HiMiniPhoneArrowUpRight } from "react-icons/hi2";
import TextCustom from "../../elements/Text/Text";
import { Link, useLocation } from "react-router";
import { navbarData } from "../../../constants/Constant";
import useRouteInfo from "../../../hooks/UseRouteInfo";
import { useRef, useState } from "react";
import ImageLogo from "../../elements/Image/ImageLogo";
import { LuMenu, LuUser } from "react-icons/lu";
import Button from "../../elements/Button/Button";
import useClickOutside from "../../../hooks/UseClickOutside";

const NavbarBottom = () => {
    const { isLandingPage } = useRouteInfo()
    const location = useLocation()
    const currentPath = location.pathname
    const [navbarOpen, setNavbarOpen] = useState(false)
    const dropdownRef = useRef(null);
    useClickOutside(dropdownRef, () => setNavbarOpen(false));

    return (
        <>
            <div className="navbar__end_menu w-full" ref={dropdownRef}>
                <FlexCenter classname="min-w-screen p-5 md:hidden justify-between">
                    <Link to="/"><ImageLogo respText="text-3xl" textColor={isLandingPage ? "text-white" : ""} /></Link>
                    <FlexStart>
                        <Button typeButton="icon" icon={LuMenu} bgColor="" padding="" iconColor={isLandingPage ? "text-white" : ""} iconSize="25px" onClick={() => setNavbarOpen(!navbarOpen)} />
                    </FlexStart>
                </FlexCenter>
                <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out md:overflow-visible md:max-h-full ${navbarOpen ? "max-h-[500px]" : "max-h-0"} md:flex`}>
                    <ul className="flex flex-col md:flex md:flex-row py-5 md:py-0 px-5 md:px-0 gap-4 md:gap-5 text-sm text-gray-400 font-medium w-full">
                        {navbarData.map((item, index) => {
                            let isActive = currentPath.startsWith(item.link)
                            return (
                                <li key={index}>
                                    <Link to={item.link}>
                                        <TextCustom
                                            type="body_sm_500"
                                            respText="text-sm"
                                            textColor={`${isActive
                                                ? index
                                                    ? "text-green-success"
                                                    : "text-gray-400"
                                                : isLandingPage
                                                    ? "text-white"
                                                    : "text-gray-400"
                                                }
                                        `}>
                                            {item.title}
                                        </TextCustom>
                                    </Link>
                                </li>)
                        })}
                        <li>
                            <FlexStart classname="flex md:hidden">
                                <Button typeButton="buttonBasic" textType="body_md_500" textColor="text-white" label="Sign In" shadow="" classname="w-1/2" rounded="rounded-lg" />
                                <Button typeButton="buttonBasic" textType="body_md_500" textColor="text-white" label="Sign Up" shadow="" classname="w-1/2" rounded="rounded-lg" />
                            </FlexStart>
                        </li>
                    </ul>
                </div>

            </div>
            <FlexCenter gap="gap-3" classname="hidden w-40 md:flex justify-between text-white">
                <HiMiniPhoneArrowUpRight size={"1.5rem"} />
                <TextCustom type="body_sm_500" textColor="text-white">
                    (219) 555-0114
                </TextCustom>
            </FlexCenter>
        </>
    )
}

export default NavbarBottom