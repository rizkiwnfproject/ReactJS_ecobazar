import { FlexCenter } from '../../elements/Flex/Flex'
import TextCustom from '../../elements/Text/Text'
import Button from '../../elements/Button/Button'
import ImageCustom from '../../elements/Image/Image'
import { BsArrowRight } from 'react-icons/bs'

const BannerBig = ({
    children
}) => {
    return (
        <>
            <>
                <div className="relative bg-green-50 mt-32 mb-15 rounded-lg ">
                    <FlexCenter classname="w-full min-h-[705px] justify-start pl-20">
                        <div className="max-w-xl">
                            <TextCustom
                                type="body_sm_500"
                                textTransform="uppercase"
                                textColor="text-green-success"
                                classname="tracking-[2%]">
                                Welcome to shopery
                            </TextCustom>
                            <TextCustom type="title_semibold" leading="leading-[120%]">Fresh & Healthy Organic Food</TextCustom>
                            <TextCustom
                                type="heading_5_400"
                                leading="leading-[120%]"
                                classname="mt-9 flex gap-3 items-center">Sale up to
                                <span className="text-orange-warning font-semibold">30% OFF</span>
                            </TextCustom>
                            <TextCustom
                                type="body_sm_400"
                                textColor="text-gray-500"
                                classname="mt-3">Free shipping on all your order. we deliver, you enjoy
                            </TextCustom>
                            <Button
                                typeButton="textIcon"
                                iconSize='1.2rem'
                                textColor="text-white"
                                textType='body_md_500'
                                classname="w-4/12 mt-10"
                                label='Shop Now'
                                icon={BsArrowRight}
                                justify='justify-center w-full'
                                reverse={true}
                            />
                        </div>
                        <div className="absolute right-0 w-[800px]">
                            <ImageCustom path="banner" image="Image" name="banner" />
                        </div>
                    </FlexCenter>
                    <div className="w-11/12 absolute -bottom-15 translate-x-1/22 h-[128px] flex justify-between items-center mt-6 p-10 shadow-sm rounded-xl bg-white">
                        {children}
                    </div>
                </div>

            </>
        </>
    )
}

export default BannerBig