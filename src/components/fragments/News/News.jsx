import { BsArrowRight, BsChatSquare, BsPerson, BsTag } from "react-icons/bs";
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import { newsData } from "../../../constants/Constant";
import TextCustom from "../../elements/Text/Text";
import Card from "../../elements/Card/Card";
import ImageCustom from "../../elements/Image/Image";
import Button from "../../elements/Button/Button";

const NewsFragment = (props) => {
    const { children } = props
    return (
        <>
            <div className="mb-10">
                {children}
            </div>
        </>
    )
}

const InfoItem = (props) => {
    const { icon, text } = props
    return (
        <FlexCenter gap="gap-2">
            <TextCustom type="body_md_400" textColor="text-gray-300">{icon}</TextCustom>
            <TextCustom type="body_small_400" textColor="text-gray-700">{text}</TextCustom>
        </FlexCenter>
    )
};

const NewsCard = () => {
    return (
        <>
            <TextCustom type="heading_3_600" classname="w-full text-center mb-10">Latest News</TextCustom>
            <FlexStart classname="justify-between">
                {newsData.slice(0, 3).map((data, index) => (
                    <Card key={index} type="start" classname="max-w-[415px] min-h-[494px] flex-col rounded-xl" padding="p-0">
                        <div className="relative">
                            <ImageCustom path="news" image={data.image} alt={data.title} />
                            <Button classname="absolute bottom-5 left-5 text-center w-[58px] h-[58px] flex flex-col justify-center" color="bg-white" rounded="rounded">
                                <TextCustom
                                    type="body_xl_500">
                                    {data.date.day}
                                </TextCustom>
                                <TextCustom
                                    type="body_xs_400"
                                    textTransform="uppercase"
                                    textColor="text-gray-500"
                                    classname='tracking-[3%]'>
                                    {data.date.month}</TextCustom>
                            </Button>
                        </div>
                        <FlexStart classname="flex-col p-6" gap="gap-4">
                            <FlexStart classname="flex-col">
                                <FlexStart classname="flex-col" gap="gap-6">
                                    <FlexStart gap="gap-3">
                                        <InfoItem icon={<BsTag />} text={data.category} />
                                        <InfoItem icon={<BsPerson />} text={<><span className="text-gray-500">by </span>{data.user}</>}>
                                        </InfoItem>
                                        <InfoItem icon={<BsChatSquare />} text={`${data.comments} comments`} />
                                    </FlexStart>
                                    <TextCustom type="body_lg_500" textColor="text-green-success-dark" leading="leading-6">
                                        {data.title}
                                    </TextCustom>
                                </FlexStart>
                            </FlexStart>
                            <Button color="bg-white text-green-success" padding="p-0" classname="shadow-none capitalize text-left flex items-center gap-3 font-semibold ">read more <BsArrowRight /></Button>
                        </FlexStart>
                    </Card>
                ))}
            </FlexStart>
        </>
    )
}

NewsFragment.NewsCard = NewsCard

export default NewsFragment