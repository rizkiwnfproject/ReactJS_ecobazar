import { Link } from "react-router"
import { FlexStart } from "../../elements/Flex/Flex"
import TextCustom from "../../elements/Text/Text"

const AuthSection = (props) => {
    const { title, type, children } = props
    return (
        <FlexStart classname="w-2/5 shadow-lg flex-col mx-auto justify-start px-6 py-15 gap-5 rounded-xl">
            <TextCustom type="heading_5_600" classname="text-center">{title}</TextCustom>
            {children}
            <Navigation type={type} />
        </FlexStart>
    )
}

const Navigation = ({ type }) => {
    if (type === "login") {
        return (
            <TextCustom type="body_sm_400" textColor="text-gray-600" classname="text-center">
                Don’t have account?
                <Link to="/auth/register">
                    <span className="font-semibold text-gray-900"> Register</span>
                </Link>
            </TextCustom>
        )
    } else {
        return (
            <TextCustom type="body_sm_400" textColor="text-gray-600" classname="text-center">
                Already have account ?
                <Link to="/auth/login">
                    <span className="font-semibold text-gray-900"> login</span>
                </Link>
            </TextCustom>
        )
    }

}

export default AuthSection