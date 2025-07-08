import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import InputCustom from "../../elements/Input/Input"
import TextCustom from "../../elements/Text/Text"
import { Link } from "react-router";
import Button from "../../elements/Button/Button";

const LoginFragment = () => {
  return (
    <>
      <FlexCenter classname="flex-col">
        <InputCustom type="text" placeholder="Email" name="email" classname="px-4 py-3.5 text-gray-400" />
        <InputCustom type="password" name="password" placeholder="Password" />
        <FlexCenter classname="w-full justify-between py-4">
          <FlexCenter gap="gap-0.5">
            <InputCustom type="checkbox" name="remember" classname="mx-2.5" />
            <TextCustom type="body_sm_400" textColor="text-gray-400" classname="">Remember me</TextCustom>
          </FlexCenter>
          <Link>
            <TextCustom type="body_sm_400" textColor="text-gray-400">forgot password</TextCustom>
          </Link>
        </FlexCenter>
        <Button classname="w-full py-4" >
          <Link to="/user/dashboard"><TextCustom type="body_sm_600" textColor="text-white">Login</TextCustom></Link>
        </Button>
      </FlexCenter>
    </>
  )
}



export default LoginFragment