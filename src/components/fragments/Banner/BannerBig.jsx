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
                <div className="relative bg-green-50 mb-5 md:mb-15 rounded-lg p-5 md:p-0">
                    <FlexCenter classname="flex-col md:flex-row w-full md:min-h-[705px] justify-start md:pl-20">
                        <div className="max-w-xl order-2 md:order-1">
                            <TextCustom
                                type="body_sm_500"
                                respText='text-sm'
                                textTransform="uppercase"
                                textColor="text-green-success"
                                classname="tracking-[2%]">
                                Welcome to shopery
                            </TextCustom>
                            <TextCustom
                                type="title_semibold"
                                respText='text-3xl'
                                leading="leading-[120%]">
                                Fresh & Healthy Organic Food
                            </TextCustom>
                            <TextCustom
                                type="heading_5_400"
                                respText='text-lg'
                                leading="leading-[120%]"
                                classname="mt-4 md:mt-9 flex gap-3 items-center">Sale up to
                                <span className="text-orange-warning font-semibold">30% OFF</span>
                            </TextCustom>
                            <TextCustom
                                type="body_sm_400"
                                respText='text-sm'
                                textColor="text-gray-500"
                                classname="mt-3">Free shipping on all your order. we deliver, you enjoy
                            </TextCustom>
                            <Button
                                typeButton="textIcon"
                                iconSize='1.2rem'
                                textColor="text-white"
                                textType='body_md_500'
                                respText='text-sm'
                                classname="md:w-4/12 mt-4 md:mt-10"
                                label='Shop Now'
                                icon={BsArrowRight}
                                justify='justify-center w-full'
                                reverse={true}
                            />
                        </div>
                        <div className="md:absolute right-0 w-[350px] md:w-[800px] order-1 md:order-2">
                            <ImageCustom path="banner" image="Image" name="banner" />
                        </div>
                    </FlexCenter>
                    <div className="w-11/12 hidden md:flex md:absolute -bottom-15 translate-x-1/22 h-[128px] justify-between items-center mt-6 p-10 shadow-sm rounded-xl bg-white">
                        {children}
                    </div>
                </div>
                <div className="w-full flex flex-col md:hidden justify-between items-center pt-10 pb-5 px-10 border border-gray-50 md:border-0 shadow-sm rounded-xl bg-white">
                    {children}
                </div>

            </>
        </>
    )
}

export default BannerBig