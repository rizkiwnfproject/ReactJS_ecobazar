import { FlexCenter, FlexStart } from '../../elements/Flex/Flex'
import TextCustom from '../../elements/Text/Text'
import ImageCustom from '../../elements/Image/Image'
import { BsCheckCircleFill } from 'react-icons/bs'
import Button from '../../elements/Button/Button'

const AboutThird = () => {
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

export default AboutThird