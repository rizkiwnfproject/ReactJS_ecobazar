import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import InputCustom from "../../elements/Input/Input"
import TextCustom from "../../elements/Text/Text"
import Button from "../../elements/Button/Button";

const RegisterFragment = () => {
    return (
        <>
            <FlexStart classname="flex-col">
                <InputCustom type="text" placeholder="Email" name="email" textColor="text-gray-400" />
                <InputCustom type="password" name="password" placeholder="Password" />
                <InputCustom type="password" name="confirmPassword" placeholder="Confirm Password" />
                <FlexCenter gap="gap-0.5" classname="py-2">
                    <InputCustom type="checkbox" name="accept_tnc" classname="m-2.5" />
                    <TextCustom type="body_sm_400" textColor="text-gray-400" classname="">Accept all terms & Conditions</TextCustom>
                </FlexCenter>
                <Button classname="w-full py-4" >
                    <TextCustom type="body_sm_600" textColor="text-white">create account</TextCustom>
                </Button>
            </FlexStart>
        </>
    )
}

export default RegisterFragment