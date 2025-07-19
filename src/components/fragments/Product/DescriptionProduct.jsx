import { LuCheck, LuLeaf, LuTicketPercent } from "react-icons/lu";
import ImageCustom from "../../elements/Image/Image";
import { FlexStart } from "../../elements/Flex/Flex";
import TextCustom from "../../elements/Text/Text";
import IconLabel from "../../elements/Text/IconLabel";
import InfoOnTab from "./InfoOnTab";

const DescriptionProduct = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-8 mx-auto">
                <FlexStart classname="flex-col col-span-4 text-justify" gap="gap-4">
                    <TextCustom type="body_sm_400" textColor="text-gray-500">
                        Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.
                    </TextCustom>
                    <TextCustom type="body_sm_400" textColor="text-gray-500">
                        Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.
                    </TextCustom>
                    <FlexStart classname="flex-col">
                        <TextCustom type="body_sm_400" textColor="text-gray-500" classname="flex items-center gap-2">
                            <div className="bg-green-success text-white w-6 h-6 rounded-full flex justify-center items-center"><LuCheck /></div> 100 g of fresh leaves provides.
                        </TextCustom>
                        <TextCustom type="body_sm_400" textColor="text-gray-500" classname="flex items-center gap-2">
                            <div className="bg-green-success text-white w-6 h-6 rounded-full flex justify-center items-center"><LuCheck /></div> Aliquam ac est at augue volutpat elementum.
                        </TextCustom>
                        <TextCustom type="body_sm_400" textColor="text-gray-500" classname="flex items-center gap-2">
                            <div className="bg-green-success text-white w-6 h-6 rounded-full flex justify-center items-center"><LuCheck /></div> Aliquam ac est at augue volutpat elementum.
                        </TextCustom>
                        <TextCustom type="body_sm_400" textColor="text-gray-500" classname="flex items-center gap-2">
                            <div className="bg-green-success text-white w-6 h-6 rounded-full flex justify-center items-center"><LuCheck /></div> Quisque nec enim eget sapien molestie.
                        </TextCustom>
                        <TextCustom type="body_sm_400" textColor="text-gray-500" classname="flex items-center gap-2">
                            <div className="bg-green-success text-white w-6 h-6 rounded-full flex justify-center items-center"><LuCheck /></div> Proin convallis odio volutpat finibus posuere.
                        </TextCustom>
                    </FlexStart>
                    <TextCustom type="body_sm_400" textColor="text-gray-500">
                        Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa.
                    </TextCustom>
                </FlexStart>
                <div className=""></div>
                <InfoOnTab />
            </div>
        </>
    )
}

export default DescriptionProduct