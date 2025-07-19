import { FlexCenter } from "../../elements/Flex/Flex"
import { HiMiniPhoneArrowUpRight } from "react-icons/hi2";
import TextCustom from "../../elements/Text/Text";
import { Link, useLocation } from "react-router";
import { navbarData } from "../../../constants/Constant";
import useRouteInfo from "../../../hooks/UseRouteInfo";
import { useState } from "react";
import ImageLogo from "../../elements/Image/ImageLogo";
import { LuMenu } from "react-icons/lu";
import Button from "../../elements/Button/Button";
const NavbarBottom = () => {
    const { isLandingPage } = useRouteInfo()
    const location = useLocation()
    const currentPath = location.pathname
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="navbar__end_menu w-full">
                <FlexCenter classname="min-w-screen p-5 md:hidden justify-between">
                    <Link to="/"><ImageLogo respText="text-3xl" textColor="text-white" /></Link>
                    <Button typeButton="icon" icon={LuMenu} bgColor="" padding="" iconColor="text-white" iconSize="25px" onClick={() => setOpen(!open)} />
                </FlexCenter>
                <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out md:overflow-visible md:max-h-full ${open ? "max-h-[500px]" : "max-h-0"} md:flex`}>

                    <ul className="flex flex-col md:flex md:flex-row py-5 md:py-0 pl-5 md:pl-0 gap-4 md:gap-5 text-sm text-gray-400 font-medium">
                        {navbarData.map((item, index) => {
                            let isActive = currentPath.startsWith(item.link)
                            return (
                                <li key={index}>
                                    <Link to={item.link}>
                                        <TextCustom
                                            type="body_sm_500"
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