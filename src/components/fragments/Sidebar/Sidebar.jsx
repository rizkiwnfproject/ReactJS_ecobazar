import { Link, useLocation } from "react-router"
import { sidebarData } from "../../../constants/Constant"
import { FlexStart } from "../../elements/Flex/Flex"
import TextCustom from "../../elements/Text/Text"

const SidebarProfile = ({ classname }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const basePath = "/user";

    return (
        <FlexStart classname={`${classname} md:max-h-[418px] lg:max-h-[418px] flex-col border border-gray-100 rounded-lg shadow-xs`} gap="gap-0">
            <TextCustom type="body_xl_500" respText="text-lg" classname="px-6 py-4">navigation</TextCustom>
            {sidebarData.map((item, index) => {
                const fullPath = `${basePath}/${item.link}`;
                let isActive = currentPath.startsWith(fullPath);
                
                if (
                    item.link === "order-history" &&
                    currentPath.startsWith("/user/order-details")
                ) {
                    isActive = true;
                }
                
                return (
                    <Link key={index} to={fullPath}>
                        <TextCustom
                            classname={`${isActive
                                ? "border-l-4 border-l-green-success bg-green-50 px-4"
                                : "px-5"
                                } py-4 hover:border-l-4 hover:border-l-green-success hover:bg-green-50 flex gap-2 items-center`}
                            type="body_md_400" respText="text-sm lg:text-base"
                                textColor={isActive ? "text-black" : "text-gray-500"}
                        >
                            {item.icon}
                            {item.name}
                        </TextCustom>
                    </Link>
                )
            })}
        </FlexStart>
    )
}

export default SidebarProfile