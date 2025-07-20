import ImageCustom from '../components/elements/Image/Image'
import TextCustom from '../components/elements/Text/Text'
import { FlexCenter } from '../components/elements/Flex/Flex'
import Button from '../components/elements/Button/Button'

const ErrorPage = () => {
    return (
        <>
            <FlexCenter classname="flex-col py-12 justify-center max-w-screen px-10 md:px-0" gap='gap-5' >
                <ImageCustom path="404" image="image_1" classname=''/>
                <TextCustom type="heading_3_600" respText='text-2xl' classname='text-center'>Oops! page not found</TextCustom>
                <TextCustom type="body_md_400" respText='text-sm' textColor='text-gray-400' classname="md:w-[612px] text-center">Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</TextCustom>
                <Button padding='px-10 py-3.5'><TextCustom type="body_sm_600" textColor='text-white'>Back to Home</TextCustom></Button>
            </FlexCenter>
        </>
    )
}

export default ErrorPage