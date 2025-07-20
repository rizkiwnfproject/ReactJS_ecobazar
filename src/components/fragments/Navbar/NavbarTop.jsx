import { FlexCenter } from "../../elements/Flex/Flex"
import { HiOutlineMapPin } from "react-icons/hi2";
import TextCustom from "../../elements/Text/Text";
import { Link } from "react-router";
const NavbarTop = () => {
    return (
        <>
            <FlexCenter>
                <HiOutlineMapPin color="#666666" size={"1rem"} />
                <TextCustom type="body_xs_400" respText="text-xs xl:text-base">Store Location: Lincoln- 344, Illinois, Chicago, USA</TextCustom>
            </FlexCenter>
            <FlexCenter>
                <FlexCenter classname="text-gray-700 text-xs">
                    <TextCustom type="body_xs_400"><Link to="/auth/login">Sign In</Link></TextCustom>
                    <TextCustom type="body_xs_400">/</TextCustom>
                    <TextCustom type="body_xs_400"><Link to="/auth/register">Sign Up</Link></TextCustom>
                </FlexCenter>
            </FlexCenter>
        </>
    )
}
export default NavbarTop