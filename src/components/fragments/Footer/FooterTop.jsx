import Button from "../../elements/Button/Button"
import { FlexStart } from "../../elements/Flex/Flex"
import Grid from "../../elements/Grid/Grid"
import InputCustom from "../../elements/Input/Input"
import TextCustom from "../../elements/Text/Text"
import ImageLogo from "../../elements/Image/ImageLogo"
const FooterTop = () => {
    return (
        <>
            <Grid cols="grid-cols-1 md:grid-cols-5" gap="gap-4" classname="" >
                <div className="">
                    <ImageLogo />
                </div>
                <FlexStart classname="w-full md:col-span-2 flex-col text-left pl-0 md:pl-10" align="items-start">
                    <TextCustom type="body_xxl_500" classname='text-left'>Subcribe our Newsletter</TextCustom >
                    <TextCustom type="body_sm_400" textColor="text-gray-400">Pellentesque eu nibh eget mauris congue mattis matti.</TextCustom>
                </FlexStart>
                <div className="md:col-span-2 md:w-[535px] md:h-13 relative">
                    <InputCustom classname="text-xs md:text-base px-6 py-3" rounded="rounded-full" type="text" placeholder="Your email address" name="subscribe" />
                    <Button typeButton="input" padding="px-7 md:px-10" height="h-full md:h-13.5" textType="body_sm_600" textColor="text-white">subscribe</Button>
                </div>
            </Grid>
        </>
    )
}

export default FooterTop