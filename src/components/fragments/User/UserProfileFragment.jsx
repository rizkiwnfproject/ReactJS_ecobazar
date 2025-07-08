import { Link } from "react-router"
import Card from "../../elements/Card/Card"
import { FlexCenter } from "../../elements/Flex/Flex"
import ImageCustom from "../../elements/Image/Image"
import TextCustom from "../../elements/Text/Text"

const UserProfileFragment = ({type}) => {
    if(type === "dashboard"){
        return (
            <>
                <Card type="center_basic" classname='w-1/2 justify-center flex-col' padding="py-7">
                    <ImageCustom path='users' image='image_4' classname="w-32" />
                    <FlexCenter classname="flex-col" gap="gap-0.5">
                        <TextCustom type="body_xl_400" >dianne russel</TextCustom>
                        <TextCustom type="body_sm_400" textColor="text-gray-500">customer</TextCustom>
                    </FlexCenter>
                    <Link to=""><TextCustom type="body_md_600" textColor="text-green-success" classname="">edit profile</TextCustom></Link>
                </Card>
            </>
        )
    }else{
        return(
            <></>
        )
    }
}
export default UserProfileFragment