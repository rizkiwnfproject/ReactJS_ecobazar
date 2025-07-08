import { Link } from "react-router"
import Card from "../../elements/Card/Card"
import { FlexStart } from "../../elements/Flex/Flex"
import TextCustom from "../../elements/Text/Text"

const UserBillingFragment = ({type}) => {
    if(type === "dashboard"){
        return (
            <>
                <Card type="start_basic" classname='w-1/2 max-h-[278px] flex-col justify-between text-left' padding="py-7 px-4">
                    <TextCustom type="body_sm_500" textColor="text-gray-400" textTransform="uppercase" classname="tracking-wide">Billing Address</TextCustom>
                    <FlexStart classname="pt-2 flex-col w-[264px]">
                        <TextCustom type="body_lg_500">dainne russel</TextCustom>
                        <TextCustom type="body_sm_400" textColor="text-gray-600" classname="">4140 Parker Rd. Allentown, New Mexico 31134</TextCustom>
                        <TextCustom type="body_md_400">dainne.ressell@gmail.com</TextCustom>
                        <TextCustom type="body_md_400">(671) 555-0110</TextCustom>
                    </FlexStart>
                    <Link to=""><TextCustom type="body_md_600" textColor="text-green-success" classname="pt-2">edit address</TextCustom></Link>
                </Card>
            </>
        )
    }else{
        return(
            <></>
        )
    }
}

export default UserBillingFragment