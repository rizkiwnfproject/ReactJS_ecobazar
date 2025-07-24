import { FlexCenter } from "../../elements/Flex/Flex"
import InputCustom from "../../elements/Input/Input"
import TextCustom from "../../elements/Text/Text"
import { Link } from "react-router";
import Button from "../../elements/Button/Button";

const LoginFragment = () => {
  return (
    <>
      <FlexCenter classname="flex-col w-full" >
        <InputCustom type="text" placeholder="Email" name="email" classname="text-sm lg:text-base px-4 py-3.5 text-gray-400" />
        <InputCustom type="password" name="password" placeholder="Password" classname="text-sm lg:text-base"/>
        <FlexCenter classname="w-full justify-between py-4">
          <InputCustom type="checkbox" respText="text-sm lg:text-base" name="remember" classname="mx-2.5" padding="" gap="" textType="body_sm_400" textColor="text-gray-400" label="Remember Me" />
          <Link>
            <TextCustom type="body_sm_400" respText="text-sm lg:text-base" textColor="text-gray-400">forgot password</TextCustom>
          </Link>
        </FlexCenter>
        <Link to="/user/dashboard" className="w-full">
          <Button typeButton="buttonBasic" padding="py-6" classname="w-full" shadow="" textType="body_sm_600" textColor="text-white" label="Login" />
        </Link>
      </FlexCenter>
    </>
  )
}



export default LoginFragment