import { useRef, useState } from "react"
import { sidebarData } from "../../../constants/Constant"
import { LuUser } from "react-icons/lu"
import useRouteInfo from "../../../hooks/UseRouteInfo"
import { FlexStart } from "../../elements/Flex/Flex"
import TextCustom from "../../elements/Text/Text";
import { Link } from "react-router";
import Button from "../../elements/Button/Button";
import useClickOutside from "../../../hooks/UseClickOutside"

const StickyNavbar = () => {
    const { isLandingPage } = useRouteInfo()
    const [userOpen, setUserOpen] = useState(false)
    const dropdownRef = useRef(null)

    useClickOutside(dropdownRef, () => setUserOpen(false))

    return (
        <>
            <div className="relative md:hidden" ref={dropdownRef}>
                <div className={`absolute overflow-hidden transition-[max-height] duration-800 ease-in-out md:overflow-visible md:max-h-full ${userOpen ? "max-h-[500px] bottom-2 -left-1/4 bg-gray-900 rounded-lg" : "max-h-0"} md:flex`}>
                    <ul className="flex flex-col md:flex md:flex-row py-5 md:py-0 px-5 md:px-0 gap-4 md:gap-5 text-sm text-gray-400 font-medium w-full text-right">
                        {sidebarData.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link>
                                        <TextCustom type="body_sm_500" respText="text-sm" textColor="text-white">
                                            {item.name}
                                        </TextCustom>
                                    </Link>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
            <Button shadow="" typeButton="icon" icon={LuUser} bgColor="bg-gray-900" padding="" iconColor="text-white" iconSize="25px" onClick={() => setUserOpen(!userOpen)} />
        </>
    )
}

export default StickyNavbar