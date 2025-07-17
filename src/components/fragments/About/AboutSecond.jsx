import { iconAboutPage } from "../../../constants/Constant"
import { FlexStart } from "../../elements/Flex/Flex"
import ImageCustom from "../../elements/Image/Image"
import IconLabel from "../../elements/Text/IconLabel"
import TextCustom from "../../elements/Text/Text"

const AboutSecond = () => {
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
                                {iconAboutPage.map((item, index) => (
                                    <IconLabel
                                        key={index}
                                        title={item.title}
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