import { LuDot } from "react-icons/lu"
import { FlexStart } from "../Flex/Flex"
import ImageCustom from "../Image/Image"
import TextCustom from "../Text/Text"
import Button from "../Button/Button"
import Rating from "../Rating/Rating"

const Comments = () => {
    return (
        <>
            <FlexStart classname='items-start py-6 border-b border-b-gray-100' gap='gap-3'>
                <ImageCustom path="users" image="image_1" />
                <FlexStart classname='flex-col' gap='gap-1'>
                    <TextCustom type="body_sm_500" respText="text-sm" classname="flex items-center">Annette Black
                        <span><LuDot size="22px" /></span>
                        <span className='font-normal text-xs text-gray-400'>4 April, 2021</span>
                    </TextCustom>
                    <Rating />
                    <TextCustom type="body_sm_400" respText="text-xs" textColor='text-gray-600'>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</TextCustom>
                </FlexStart>
            </FlexStart>
            <Button typeButton='buttonBasic' classname="md:w-1/3 lg:w-1/5 border-2 border-green-success" bgColor='bg-white' shadow='' textType='body_md_600' textColor='text-green-success' padding='py-5' label="Load More" />
        </>
    )
}

export default Comments