import React from 'react'
import ImageCustom from '../components/elements/Image/Image'
import TextCustom from '../components/elements/Text/Text'
import { FlexCenter } from '../components/elements/Flex/Flex'
import Button from '../components/elements/Button/Button'

const ErrorPage = () => {
    return (
        <>
            <FlexCenter classname="flex-col pt-12 justify-center" gap='gap-5' >
                <ImageCustom path="404" image="image_1" />
                <TextCustom type="heading_3_600">Oops! page not found</TextCustom>
                <TextCustom type="body_md_400" textColor='text-gray-400' classname="w-[612px] text-center">Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</TextCustom>
                <Button padding='px-10 py-3.5'><TextCustom type="body_sm_600" textColor='text-white'>Back to Home</TextCustom></Button>
                
            </FlexCenter>
        </>
    )
}

export default ErrorPage