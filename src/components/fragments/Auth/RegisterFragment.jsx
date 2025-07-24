import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import InputCustom from "../../elements/Input/Input"
import TextCustom from "../../elements/Text/Text"
import Button from "../../elements/Button/Button";
import { Link } from "react-router";

const RegisterFragment = () => {
    return (
        <>
            <FlexStart classname="flex-col">
                <InputCustom type="text" placeholder="Email" name="email" classname="text-sm lg:text-base"  textColor="text-gray-400" />
                <InputCustom type="password" name="password" placeholder="Password" classname="text-sm lg:text-base"/>
                <InputCustom type="password" name="confirmPassword" placeholder="Confirm Password" classname="text-sm lg:text-base"/>
                <InputCustom type="checkbox" respText="text-sm" name="remember" classname="mx-2.5" padding="" gap="" textType="body_sm_400" textColor="text-gray-400" label="Accept all terms & Conditions" />
                <Link to="/auth/login" className="w-full py-3">
                    <Button typeButton="buttonBasic" padding="py-6" classname="w-full" shadow="" textType="body_sm_600" textColor="text-white" label="Register" />
                </Link>
            </FlexStart>
        </>
    )
}

export default RegisterFragment