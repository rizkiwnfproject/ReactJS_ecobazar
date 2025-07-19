import ImageCustom from "../../elements/Image/Image";
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import TextCustom from "../../elements/Text/Text";
import Rating from "../../elements/Rating/Rating";
import Button from "../../elements/Button/Button";

const FeedbackProduct = () => {
    return (
        <>
            <div className="mx-auto">
                <FlexStart classname="flex-col md:max-w-[760px]" gap="gap-4">
                    <FlexStart classname="flex-col border-b border-b-gray-100 py-4" gap="gap-3">
                        <FlexCenter classname="justify-between">
                            <FlexCenter>
                                <ImageCustom path="users" image="image_1" classname="w-10 h-10" />
                                <FlexStart classname="flex-col" gap="gap-0.5">
                                    <TextCustom type="body_sm_500">Kristin Watson</TextCustom>
                                    <Rating rate={5} />
                                </FlexStart>
                            </FlexCenter>
                            <TextCustom type="body_sm_400" respText="text-xs" textColor="text-gray-400">2 min ago</TextCustom>
                        </FlexCenter>
                        <TextCustom type="body_sm_400" textColor="text-gray-500">
                            Duis at ullamcorper nulla, eu dictum eros.
                        </TextCustom>
                    </FlexStart>
                    <FlexStart classname="flex-col border-b border-b-gray-100 py-4" gap="gap-3">
                        <FlexCenter classname="justify-between">
                            <FlexCenter>
                                <ImageCustom path="users" image="image_1" classname="w-10 h-10" />
                                <FlexStart classname="flex-col" gap="gap-0.5">
                                    <TextCustom type="body_sm_500">Kristin Watson</TextCustom>
                                    <Rating rate={3} />
                                </FlexStart>
                            </FlexCenter>
                            <TextCustom type="body_sm_400" respText="text-xs" textColor="text-gray-400">30 Apr, 2021</TextCustom>
                        </FlexCenter>
                        <TextCustom type="body_sm_400" textColor="text-gray-500">
                            Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.
                        </TextCustom>
                    </FlexStart>
                    <FlexStart classname="flex-col py-4" gap="gap-3">
                        <FlexCenter classname="justify-between">
                            <FlexCenter>
                                <ImageCustom path="users" image="image_1" classname="w-10 h-10" />
                                <FlexStart classname="flex-col" gap="gap-0.5">
                                    <TextCustom type="body_sm_500">Ralph Edwards</TextCustom>
                                    <Rating rate={5} />
                                </FlexStart>
                            </FlexCenter>
                            <TextCustom type="body_sm_400" respText="text-xs" textColor="text-gray-400">2 min ago</TextCustom>
                        </FlexCenter>
                        <TextCustom type="body_sm_400" textColor="text-gray-500">
                            200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA
                        </TextCustom>
                    </FlexStart>
                    <Button typeButton="buttonBasic" bgColor="bg-white" classname="md:w-1/5 border-2 border-green-success" shadow="" textType="body_sm_600" textColor="text-green-success" respText="text-sm" label="Load More"  hover={false}/>
                </FlexStart>
            </div>
        </>
    )
}

export default FeedbackProduct