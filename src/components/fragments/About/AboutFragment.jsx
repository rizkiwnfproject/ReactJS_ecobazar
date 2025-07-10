import React from 'react'
import { FlexCenter, FlexStart } from '../../elements/Flex/Flex'
import TextCustom from '../../elements/Text/Text'
import ImageCustom from '../../elements/Image/Image'
import { BsCheckCircleFill } from 'react-icons/bs'
import Button from '../../elements/Button/Button'
import IconLabel from '../../elements/Text/IconLabel'
import { LuHeadset, LuLeaf, LuPackage, LuShoppingBag, LuStar, LuTruck } from 'react-icons/lu'

const AboutFragment = ({ type }) => {
    if (type === "information-1") {
        return (
            <>
                <div className="grid grid-cols-2 gap-x-14.5 items-center">
                    <FlexStart classname='flex-col max-w-[600px]' gap='gap-8'>
                        <TextCustom type="heading_1_600" leading="leading-18">
                            100% Trusted Organic Food Store
                        </TextCustom>
                        <TextCustom type="body_lg_400" textColor='text-gray-600'>
                            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
                        </TextCustom>
                    </FlexStart>
                    <ImageCustom path="about-us" image="image_1" classname="max-w-[700px] w-full object-cover" />
                </div>
            </>
        )
    } else if (type === "information-2") {
        return (
            <>
                <div className="bg-linear-to-r from-[#FAFAFA] to-white">
                    <FlexStart classname='relative'>
                        <ImageCustom path="about-us" image="image_2" classname="max-w-[1000px] max-h-[600px] w-full object-cover" />
                        <div className="absolute top-1/8 right-20 max-w-[600px]">
                            <FlexStart classname='flex-col' gap="gap-4">
                                <TextCustom type="heading_1_600" leading="leading-18">
                                    100% Trusted Organic Food Store
                                </TextCustom>
                                <TextCustom type="body_md_400" textColor='text-gray-600'>
                                    Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat.
                                </TextCustom>
                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    <IconLabel
                                        title="100% Organic food"
                                        desc="100% healthy & Fresh food."
                                        classname="flex items-center"
                                        size="2rem"
                                        iconColor="#00B207"
                                        icon={LuLeaf}
                                    />
                                    <IconLabel
                                        title="Great Support 24/7"
                                        desc="Instant access to Contact"
                                        classname="flex items-center"
                                        size="2rem"
                                        iconColor="#00B207"
                                        icon={LuHeadset}
                                    />
                                    <IconLabel
                                        title="Customer Feedback"
                                        desc="Our happy customer"
                                        classname="flex items-center"
                                        size="2rem"
                                        iconColor="#00B207"
                                        icon={LuStar}
                                    />
                                    <IconLabel
                                        title="100% Sucure Payment"
                                        desc="We ensure your money is save"
                                        classname="flex items-center"
                                        size="2rem"
                                        iconColor="#00B207"
                                        icon={LuShoppingBag}
                                    />
                                    <IconLabel
                                        title="Free Shipping"
                                        desc="Free shipping with discount"
                                        classname="flex items-center"
                                        size="2rem"
                                        iconColor="#00B207"
                                        icon={LuTruck}
                                    />
                                    <IconLabel
                                        title="100% Organic Food"
                                        desc="100% healthy & Fresh food."
                                        classname="flex items-center"
                                        size="2rem"
                                        iconColor="#00B207"
                                        icon={LuPackage}
                                    />
                                </div>
                            </FlexStart>
                        </div>
                    </FlexStart>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-2">
                        <FlexStart classname='flex-col justify-center max-w-[500px] h-full' gap='gap-6'>
                            <TextCustom type="heading_2_600" leading="leading-18">
                                We Delivered, You Enjoy Your Order.
                            </TextCustom>
                            <TextCustom type="body_md_400" textColor='text-gray-600'>
                                Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
                            </TextCustom>
                            <FlexStart classname='flex-col' gap='gap-4'>
                                <FlexCenter>
                                    <BsCheckCircleFill color="#2C742F" size="20px" />
                                    <TextCustom type="body_sm_400" textColor='text-gray-600'>Sed in metus pellentesque.</TextCustom>
                                </FlexCenter>
                                <FlexCenter>
                                    <BsCheckCircleFill color="#2C742F" size="20px" />
                                    <TextCustom type="body_sm_400" textColor='text-gray-600'>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</TextCustom>
                                </FlexCenter>
                                <FlexCenter>
                                    <BsCheckCircleFill color="#2C742F" size="20px" />
                                    <TextCustom type="body_sm_400" textColor='text-gray-600'>Maecenas ut nunc fringilla erat varius.</TextCustom>
                                </FlexCenter>
                            </FlexStart>
                            <Button category="shop" classname="w-1/3 text-white">shop now</Button>
                        </FlexStart>
                    </div>
                    <div className="col-span-3">
                        <ImageCustom path="about-us" image="image_3" classname="max-w-[895px] min-h-[550px] w-full object-cover object-left" />
                    </div>
                </div>
            </>
        )
    }
}

export default AboutFragment