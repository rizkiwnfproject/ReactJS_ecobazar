import { FlexStart } from "../../elements/Flex/Flex"
import ImageCustom from "../../elements/Image/Image"
import TextCustom from "../../elements/Text/Text"

const AboutFirst = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-x-14.5 items-center">
                <FlexStart classname='flex-col' width="max-w-[600px]" gap='gap-8'>
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
}

export default AboutFirst