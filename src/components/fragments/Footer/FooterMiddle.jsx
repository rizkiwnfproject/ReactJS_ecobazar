import { Link } from "react-router"
import { footerData } from "../../../constants/Constant"
import { FlexStart } from "../../elements/Flex/Flex"
import TextCustom from "../../elements/Text/Text"
import Grid from "../../elements/Grid/Grid"

const FooterMiddle = () => {
    return (
        <>
            {/* <FlexStart align="items-start" classname="flex-col md:flex-row justify-between">
                
            </FlexStart> */}
            <Grid cols="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7" gap="gap-y-10">
                <FlexStart align="items-start" classname="col-span-2 max-w-84 flex-col" gap="gap-2 md:gap-4">
                    <TextCustom type="body_xl_500" respText="text-xl" textColor="text-white">About Ecobazar</TextCustom>
                    <TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-500" leading="leading-[150%]" classname="pt-3">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</TextCustom>
                    <TextCustom type="body_sm_500" respText="text-xs" textColor="text-white" classname="flex gap-4">(219) 555-0114<TextCustom type="span" textColor="text-gray-500">or</TextCustom>Proxy@gmail.com</TextCustom>
                </FlexStart>
                {footerData.map((section, index) => (
                    <FlexStart key={index} gap="gap-2 md:gap-4" classname="flex-col">
                        <TextCustom type="body_xl_500" respText="text-lg" textColor="text-white">{section.name}</TextCustom>
                        <ul>
                            {section.data.map((item, idx) => (
                                <li className={`pt-3 cursor-pointer`} key={idx}>
                                    <Link to={item.link}>
                                        <TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-400 hover:text-white">
                                            {item.name}
                                        </TextCustom>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </FlexStart>
                ))}
                <FlexStart classname="xl:col-span-2 max-w-[312px] flex-col" gap="gap-2 md:gap-5">
                    <TextCustom type="body_xl_500" textColor="text-white">Download our Mobile App</TextCustom>
                    <FlexStart classname="flex-col lg:flex-row pt-3" gap="gap-1">
                        <img src="assets/images/footers/image_1.png" alt="" />
                        <img src="assets/images/footers/image_2.png" alt="" />
                    </FlexStart>
                </FlexStart>
            </Grid>
        </>
    )
}

export default FooterMiddle