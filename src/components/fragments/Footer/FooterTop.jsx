import Button from "../../elements/Button/Button"
import { FlexStart } from "../../elements/Flex/Flex"
import Grid from "../../elements/Grid/Grid"
import InputCustom from "../../elements/Input/Input"
import TextCustom from "../../elements/Text/Text"
import ImageLogo from "../../elements/Image/ImageLogo"
const FooterTop = () => {
    return (
        <>
            <Grid cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" gap="gap-4" classname="" >
                <div className="">
                    <ImageLogo respText="text-3xl"/>
                </div>
                <FlexStart classname="w-full xl:col-span-2 flex-col text-left pl-0 xl:pl-10" align="items-start">
                    <TextCustom type="body_xxl_500" respText="text-xl" classname='text-left'>Subcribe our Newsletter</TextCustom >
                    <TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-400">Pellentesque eu nibh eget mauris congue mattis matti.</TextCustom>
                </FlexStart>
                <div className="md:col-span-2 lg:col-span-1 xl:col-span-2 xl:w-[535px] h-11.5 xl:h-13 relative">
                    <InputCustom classname="text-xs xl:text-base xl:px-6 py-3" rounded="rounded-full" type="text" placeholder="Your email address" name="subscribe" />
                    <Button typeButton="input" padding="px-7 xl:px-10" height="h-full xl:h-13.5" textType="body_sm_600" respText="text-xs lg:text-sm" textColor="text-white">subscribe</Button>
                </div>
            </Grid>
        </>
    )
}

export default FooterTop