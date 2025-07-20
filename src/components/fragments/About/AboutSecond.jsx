import { iconAboutPage } from "../../../constants/Constant"
import { FlexStart } from "../../elements/Flex/Flex"
import ImageCustom from "../../elements/Image/Image"
import IconLabel from "../../elements/Text/IconLabel"
import TextCustom from "../../elements/Text/Text"

const AboutSecond = () => {
    return (
        <>
            <div className="bg-white md:bg-linear-to-r from-[#FAFAFA] to-white">
                <FlexStart classname='flex-col md:flex-row md:relative'>
                    <div className="max-w-[400px] md:max-w-[600px] md:h-[600px] lg:h-auto lg:max-w-[600px] xl:max-w-[1000px] max-h-[600px] ">
                        <ImageCustom path="about-us" image="image_2" classname="w-full h-full object-cover md:object-right" />
                    </div>
                    <div className="md:absolute md:top-8 lg:top-4 xl:top-1/8 right-4 xl:right-20 md:max-w-[300px] lg:max-w-[500px] xl:max-w-[600px]">
                        <FlexStart classname='flex-col' gap="gap-4">
                            <TextCustom type="heading_1_600" respText="text-2xl lg:text-3xl" leading="xl:leading-18" classname="py-3 xl:py-0">
                                100% Trusted Organic Food Store
                            </TextCustom>
                            <TextCustom type="body_md_400" respText="text-sm" classname="text-justify md:text-left" textColor='text-gray-600'>
                                Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat.
                            </TextCustom>
                            <div className="grid lg:grid-cols-2 gap-2 md:gap-3 lg:gap-2 xl:gap-6 xl:pt-4">
                                {iconAboutPage.map((item, index) => (
                                    <IconLabel
                                        key={index}
                                        title={item.title}
                                        respText="text-sm"
                                        desc={item.desc}
                                        classname=""
                                        size="2rem"
                                        iconColor="#00B207"
                                        icon={item.icon}
                                    />
                                ))}
                            </div>
                        </FlexStart>
                    </div>
                </FlexStart>
            </div>
        </>
    )
}

export default AboutSecond