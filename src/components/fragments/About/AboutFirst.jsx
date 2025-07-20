import { FlexStart } from "../../elements/Flex/Flex"
import ImageCustom from "../../elements/Image/Image"
import TextCustom from "../../elements/Text/Text"

const AboutFirst = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 gap-x-14.5 items-center">
                <FlexStart classname='order-2 md:order-1 flex-col' width="max-w-[600px]" gap='md:gap-8'>
                    <TextCustom type="heading_1_600" respText="text-2xl lg:text-3xl" leading="xl:leading-18" classname="py-3 md:py-0">
                        100% Trusted Organic Food Store
                    </TextCustom>
                    <TextCustom type="body_lg_400" respText="text-sm" textColor='text-gray-600' classname="text-justify md:text-left">
                        Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
                    </TextCustom>
                </FlexStart>
                <ImageCustom path="about-us" image="image_1" classname="order-1 md:order-2 max-w-[700px] w-full object-cover" />
            </div>
        </>
    )
}

export default AboutFirst