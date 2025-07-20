import { footerCopyright } from "../../../constants/Constant";
import Button from "../../elements/Button/Button"
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import ImageCustom from "../../elements/Image/Image"
import TextCustom from "../../elements/Text/Text"

const FooterBottom = () => {
    const iconData = footerCopyright.find((item) => item.name === "Icon")?.data || [];
    const paymentData = footerCopyright.find((item) => item.name === "Payment")?.data || [];
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 py-5 border-t border-gray-800 justify-between items-start md:items-center gap-5 lg:gap-0">
            <FlexStart classname="hidden md:flex md:order-1">
                {iconData.map((item, index) => (
                    <Button typeButton="icon" key={index} classname="border border-gray-800" hover={true} padding="" bgColor="" textColor="text-white" icon={item.icon} />
                ))}
            </FlexStart>
            <TextCustom type="body_sm_400" respText="text-xs" textColor="text-gray-500" classname="md:col-span-2 lg:col-span-1 md:order-3 lg:order-2 flex justify-center">Ecobazar eCommerce © 2021. All Rights Reserved</TextCustom>
            <FlexStart classname="hidden md:flex justify-endt md:order-2 xl:order-3">
                {paymentData.map((item, index) => (
                    <button key={index} className="lg:px-4 py-1 rounded-sm border border-gray-800 text-white flex justify-center items-center">
                        <a href="#"><ImageCustom path="footers" name="" image={item.image} classname="w-8" /></a>
                    </button>
                ))}
            </FlexStart>
        </div>
    )
}

export default FooterBottom
