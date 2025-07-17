import { BsArrowRight } from "react-icons/bs"
import Button from "../../elements/Button/Button"
import { FlexStart } from "../../elements/Flex/Flex"
import ImageCustom from "../../elements/Image/Image"
import TextCustom from "../../elements/Text/Text"

const BannerFeature = () => {
    return (
        <>
            <div className='relative'>
                <ImageCustom
                    path="banner"
                    image="Bannar_6"
                    name="Summer Sale"
                    classname="h-[370px]"
                />
                <FlexStart
                    gap="gap-3"
                    classname="absolute top-0 left-0 w-full text-center flex-col py-7">
                    <TextCustom
                        type="body_sm_500"
                        textTransform="uppercase"
                        classname="tracking-[3%]">
                        Summer Sale
                    </TextCustom>
                    <TextCustom
                        type="heading_3_600" textColor="text-green-success">
                        75% off
                    </TextCustom>
                    <Button
                        typeButton="textIcon"
                        iconSize='1.2rem'
                        textType='body_sm_500'
                        textColor="text-green-success"
                        label='Shop Now'
                        classname={`mx-auto cursor-pointer`}
                        bgColor="bg-white"
                        icon={BsArrowRight}
                        justify='justify-center w-full'
                        reverse = {true}
                        padding="px-8 py-3.5"
                    />
                </FlexStart>
            </div >
        </>
    )
}

export default BannerFeature