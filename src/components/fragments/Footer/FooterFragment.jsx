import { Link } from "react-router"
import { footerCopyright, footerData } from "../../../constants/Constant"
import Button from "../../elements/Button/Button"
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import Grid from "../../elements/Grid/Grid"
import ImageCustom from "../../elements/Image/Image"
import InputCustom from "../../elements/Input/Input"
import Logo from "../../elements/Logo/Logo"
import TextCustom from "../../elements/Text/Text"

const iconData = footerCopyright.find((item) => item.name === "Icon")?.data || [];
const paymentData = footerCopyright.find((item) => item.name === "Payment")?.data || [];

const FooterFragment = (props) => {
    const { children, classname, padding = "py-15" } = props
    return (
        <>
            <div className={`${classname} ${padding}`}>
                <div className="max-w-10/12 mx-auto">
                    {children}
                </div>
            </div>
        </>
    )
}

const FooterTop = () => {
    return (
        <>
            <Grid cols="grid-cols-5" >
                <Logo />
                <FlexStart classname="col-span-2 flex-col text-left pl-10" align="items-start">
                    <TextCustom type="body_xxl_500" classname='text-left'>Subcribe our Newsletter</TextCustom >
                    <TextCustom type="body_sm_400" textColor="text-gray-400">Pellentesque eu nibh eget mauris congue mattis matti.</TextCustom>
                </FlexStart>
                <div className="col-span-2 w-[535px] relative">
                    <InputCustom classname="px-6 py-3" rounded="rounded-full" type="text" placeholder="Your email address" name="subscribe" />
                    <Button category="input" classname="px-10 rounded-full">subscribe</Button>
                </div>
            </Grid>
        </>
    )
}

const FooterBottom = () => {
    return (
        <>
            <FlexStart align="items-start" classname="justify-between">
                <FlexStart align="items-start" classname="max-w-84 flex-col" gap="gap-4">
                    <TextCustom type="body_xl_500" textColor="text-white">About Shopery</TextCustom>
                    <TextCustom type="body_sm_400" textColor="text-gray-500" leading="leading-[150%]" classname="pt-3">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</TextCustom>
                    <TextCustom type="body_sm_500" textColor="text-white" classname="flex gap-4 ">(219) 555-0114<TextCustom type="span" textColor="text-gray-500">or</TextCustom>Proxy@gmail.com</TextCustom>
                </FlexStart>
                {footerData.map((section, index) => (
                    <FlexStart key={index} gap="gap-4" classname="flex-col">
                        <TextCustom type="body_xl_500" textColor="text-white">{section.name}</TextCustom>
                        <ul className="text-gray-400 text-sm">
                            {section.data.map((item, idx) => (
                                <li className={`pt-3 cursor-pointer hover:text-white`} key={idx}>
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </FlexStart>
                ))}
                <FlexStart classname="max-w-[312px] flex-col" gap="gap-5">
                    <TextCustom type="body_xl_500" textColor="text-white">Download our Mobile App</TextCustom>
                    <FlexStart classname="pt-3" gap="gap-1">
                        <img src="assets/images/footers/image_1.png" alt="" />
                        <img src="assets/images/footers/image_2.png" alt="" />
                    </FlexStart>
                </FlexStart>
            </FlexStart>
        </>
    )
}
const FooterCopyright = () => {
    return (
        <FlexCenter classname="py-5 border-t border-gray-800 justify-between">
            <FlexStart>
                {iconData.map((item, index) => (
                    <Button key={index} classname="w-10 h-10 flex justify-center items-center" hover={true} color="text-white ">
                        <a href="#">{item.icon}</a>
                    </Button>
                ))}
            </FlexStart>
            <TextCustom type="body_sm_400" textColor="text-gray-500">Ecobazar eCommerce © 2021. All Rights Reserved</TextCustom>
            <FlexStart>
                {paymentData.map((item, index) => (
                    <button key={index} className="px-4 py-1 rounded-sm border border-gray-800 text-white flex justify-center items-center">
                        <a href="#"><ImageCustom path="footers" name="" image={item.image} classname="w-8" /></a>
                    </button>
                ))}
            </FlexStart>
        </FlexCenter>
    )
}

FooterFragment.FooterTop = FooterTop;
FooterFragment.FooterBottom = FooterBottom;
FooterFragment.FooterCopyright = FooterCopyright;

export default FooterFragment