import { BsArrowRight } from 'react-icons/bs'
import Button from '../../elements/Button/Button'
import { FlexStart } from '../../elements/Flex/Flex'
import ImageCustom from '../../elements/Image/Image'
import TextCustom from '../../elements/Text/Text'
const BannerMedium = () => {
    return (
        <>
            <div className="relative" data-aos="fade-up" >
                <ImageCustom
                    path="banner"
                    image="Discount_Bannar"
                    name="Discount"
                    classname="w-full h-[358px] object-[90%_90%] md:object-[0%_97%] object-cover rounded-2xl"
                />
                <FlexStart
                    gap="gap-4"
                    classname="absolute top-0 right-0 md:right-0 xl:right-16 w-3/5 md:w-2/5 xl:w-[441px] h-full flex-col md:text-left justify-center px-2 md:px-5 lg:px-10 text-white">
                    <FlexStart classname="flex-col" gap="gap-1">
                        <TextCustom
                            type="body_sm_500"
                            respText='text-sm'
                            textTransform="uppercase"
                            textColor="text-white"
                            classname="tracking-[3%]">Summer Sale
                        </TextCustom>
                        <TextCustom
                            type="heading_1_600"
                            respText='text-3xl'
                            textColor="text-orange-warning"
                            classname="flex items-center"
                        >37% 
                            <TextCustom
                                type="span"
                                textTransform="uppercase"
                                textColor="text-white"
                                classname="text-20px xl:text-[56px]"
                            > off</TextCustom>
                        </TextCustom>
                    </FlexStart>
                    <TextCustom type="body_md_400" respText='text-xs' textColor="text-white" classname="opacity-70">
                        Free on all your order, Free Shipping and  30 days money-back guarantee
                    </TextCustom>
                    <Button
                        typeButton="textIcon"
                        textColor="text-white"
                        textType='body_sm_500'
                        respText='text-xs'
                        bgColor="bg-green-success"
                        icon={BsArrowRight}
                        classname="w-3/4 xl:w-6/12 mt-3 cursor-pointer"
                        justify='justify-center w-full'
                        padding='px-4 md:px-8 py-3.5'
                        iconSize='1rem'
                        label='Shop Now'
                        reverse={true}
                    />
                </FlexStart>
            </div>
        </>
    )
}

export default BannerMedium