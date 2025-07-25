import { FlexCenter, FlexStart } from '../../elements/Flex/Flex'
import TextCustom from '../../elements/Text/Text'
import ImageCustom from '../../elements/Image/Image'
import { BsCheckCircleFill } from 'react-icons/bs'
import Button from '../../elements/Button/Button'

const AboutThird = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center">
                <div className="order-2 md:order-1 lg:col-span-2">
                    <FlexStart classname=' flex-col justify-center md:max-w-[500px] h-full' gap='gap-3 md:gap-6'>
                        <TextCustom type="heading_2_600" respText='text-2xl lg:text-3xl' classname="py-3 md:py-0" leading="xl:leading-18">
                            We Delivered, You Enjoy Your Order.
                        </TextCustom>
                        <TextCustom type="body_md_400" respText='text-sm' classname='text-justify md:text-left' textColor='text-gray-600'>
                            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
                        </TextCustom>
                        <FlexStart classname='flex-col' gap='gap-2 xl:gap-4'>
                            <Button typeButton='textIcon' icon={BsCheckCircleFill} iconColor='text-green-success' iconSize='20px' textType='body_sm_400' textColor='text-gray-600' respText='text-sm' label='Sed in metus pellentesque.' padding='' bgColor=''/>
                            <Button typeButton='textIcon' icon={BsCheckCircleFill} iconColor='text-green-success' iconSize='20px' textType='body_sm_400' textColor='text-gray-600' respText='text-sm' label='Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.' padding='' bgColor='' alignItems="text-left"/>
                            <Button typeButton='textIcon' icon={BsCheckCircleFill} iconColor='text-green-success' iconSize='20px' textType='body_sm_400' textColor='text-gray-600' respText='text-sm' label='Maecenas ut nunc fringilla erat varius.' padding='' bgColor=''/>
                        </FlexStart>
                        <Button category="shop" classname="w-1/3 text-white">shop now</Button>
                    </FlexStart>
                </div>
                <div className="order-1 md:order-2 xl:col-span-3 max-w-screen xl:max-w-[895px] flex justify-end">
                    <ImageCustom path="about-us" image="image_3" classname="xl:min-h-[550px] w-full h-[330px] lg:h-[300px] xl:h-auto object-cover md:object-left" />
                </div>
            </div>
        </>
    )
}

export default AboutThird