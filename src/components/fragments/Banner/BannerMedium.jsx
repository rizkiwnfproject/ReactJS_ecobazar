import { BsArrowRight } from 'react-icons/bs'
import Button from '../../elements/Button/Button'
import { FlexStart } from '../../elements/Flex/Flex'
import ImageCustom from '../../elements/Image/Image'
import TextCustom from '../../elements/Text/Text'
const BannerMedium = () => {
    return (
        <>
            <div className="relative">
                <ImageCustom
                    path="banner"
                    image="Discount_Bannar"
                    name="Discount"
                    classname="w-full h-[358px] object-[0%_97%] object-cover rounded-2xl"
                />
                <FlexStart
                    gap="gap-4"
                    classname="absolute top-0 right-16 w-[441px] h-full flex-col text-left justify-center px-10 text-white">
                    <FlexStart classname="flex-col" gap="gap-1">
                        <TextCustom
                            type="body_sm_500"
                            textTransform="uppercase"
                            textColor="text-white"
                            classname="tracking-[3%]">Summer Sale
                        </TextCustom>
                        <TextCustom
                            type="heading_1_600"
                            textColor="text-orange-warning"
                            classname="flex items-center"
                        >37%
                            <TextCustom
                                type="span"
                                textTransform="uppercase"
                                textColor="text-white"
                                classname="text-[56px]"
                            >off</TextCustom>
                        </TextCustom>
                    </FlexStart>
                    <TextCustom type="body_md_400" textColor="text-white" classname="opacity-70">
                        Free on all your order, Free Shipping and  30 days money-back guarantee
                    </TextCustom>
                    <Button
                        typeButton="textIcon"
                        textColor="text-white"
                        textType='body_sm_500'
                        bgColor="bg-green-success"
                        icon={BsArrowRight}
                        classname="w-6/12 mt-3 cursor-pointer"
                        justify='justify-center w-full'
                        padding='px-8 py-3.5'
                        iconSize='1.2rem'
                        label='Shop Now'
                        reverse={true}
                    />
                </FlexStart>
            </div>
        </>
    )
}

export default BannerMedium