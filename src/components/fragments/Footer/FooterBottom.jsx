import { footerCopyright } from "../../../constants/Constant";
import Button from "../../elements/Button/Button"
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import ImageCustom from "../../elements/Image/Image"
import TextCustom from "../../elements/Text/Text"

const FooterBottom = () => {
    const iconData = footerCopyright.find((item) => item.name === "Icon")?.data || [];
    const paymentData = footerCopyright.find((item) => item.name === "Payment")?.data || [];
    return (
        <FlexCenter alignItems="items-start md:items-center" classname="flex-col md:flex-row py-5 border-t border-gray-800 justify-between" gap="gap-4 md:gap-2">
            <FlexStart classname="hidden md:flex order-2 md:order-1">
                {iconData.map((item, index) => (
                    <Button typeButton="icon" key={index} classname="border border-gray-800" hover={true} padding="" bgColor="" textColor="text-white" icon={item.icon}/>
                ))}
            </FlexStart>
            <TextCustom type="body_sm_400" respText="text-xs" textColor="text-gray-500" classname="order-1 md:order-2">Ecobazar eCommerce © 2021. All Rights Reserved</TextCustom>
            <FlexStart classname="hidden md:flex order-3">
                {paymentData.map((item, index) => (
                    <button key={index} className="px-4 py-1 rounded-sm border border-gray-800 text-white flex justify-center items-center">
                        <a href="#"><ImageCustom path="footers" name="" image={item.image} classname="w-8" /></a>
                    </button>
                ))}
            </FlexStart>
        </FlexCenter>
    )
}

export default FooterBottom
