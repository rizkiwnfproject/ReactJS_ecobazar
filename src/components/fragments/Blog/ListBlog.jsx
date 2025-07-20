import { BsArrowLeft, BsArrowRight, BsChatSquare, BsPerson, BsTag } from "react-icons/bs"
import { newsData } from "../../../constants/Constant"
import Button from "../../elements/Button/Button"
import Card from "../../elements/Card/Card"
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import ImageCustom from "../../elements/Image/Image"
import TextCustom from "../../elements/Text/Text"
import TextIcon from "../../elements/Text/TextIcon"
import { Link } from "react-router"

const ListBlog = ({ isFilterOpen }) => {
    return (
        <div className="">
            <div className={`grid ${isFilterOpen ? "md:grid-cols-2"  : "md:grid-cols-3"} gap-3 md:gap-6`}>
                {newsData.map((data, index) => (
                    <Card key={index} type="flexStart" classname="md:min-w-[390px] md:min-h-[494px] flex-col rounded-xl" padding="p-0">
                        <div className="relative">
                            <ImageCustom path="news" image={data.image} alt={data.title} classname="md:w-full" />
                            <button className="absolute bottom-5 left-5 bg-white rounded text-center w-[58px] h-[58px] flex flex-col justify-center">
                                <TextCustom
                                    type="body_xl_500"
                                    respText="text-lg"
                                    >
                                    {data.date.day}
                                </TextCustom>
                                <TextCustom
                                    type="body_xs_400"
                                    respText="text-xs"
                                    textTransform="uppercase"
                                    textColor="text-gray-500"
                                    classname='tracking-[3%]'>
                                    {data.date.month}
                                </TextCustom>
                            </button>
                        </div>
                        <FlexStart classname="flex-col p-6 h-full justify-between" gap="gap-4">
                            <FlexStart classname="flex-col">
                                <FlexStart classname="flex-col" gap="gap-6">
                                    <FlexStart gap="gap-3">
                                        <TextIcon icon={BsTag} respText="text-sm" text={data.category} />
                                        <TextIcon icon={BsPerson} respText="text-sm" text={<><span className="text-gray-500">by </span>{data.user}</>}>
                                        </TextIcon>
                                        <TextIcon icon={BsChatSquare} respText="text-sm" text={`${data.comments} comments`} />
                                    </FlexStart>
                                    <TextCustom type="body_lg_500" leading="leading-6">
                                        {data.title}
                                    </TextCustom>
                                </FlexStart>
                            </FlexStart>
                            <Link to="1">
                                <Button
                                    typeButton="textIcon"
                                    iconSize='1.2rem'
                                    textType='body_sm_500'
                                    textColor="text-green-success"
                                    label='read more'
                                    classname={`cursor-pointer`}
                                    bgColor="bg-white"
                                    icon={BsArrowRight}
                                    justify='w-full'
                                    reverse={true}
                                    shadow=""
                                    padding=""
                                />
                            </Link>
                        </FlexStart>
                    </Card>
                ))}
            </div>
            <FlexCenter classname="justify-center py-5">
                <Button typeButton="icon" classname="cursor-pointer" padding="" textColor="text-gray-300" shadow="" bgColor="bg-gray-50" icon={BsArrowLeft} />
                <FlexCenter >
                    <Button typeButton='buttonBasic' classname="cursor-pointer w-10 h-10" shadow="" padding="" textType="body_md_500" textColor="text-white" label="1" />
                    <Button typeButton='buttonBasic' classname="cursor-pointer w-10 h-10 border border-gray-100" shadow="" padding="" bgColor="bg-white" textType="body_md_500" label="2" />
                </FlexCenter>
                <Button typeButton="icon" classname="cursor-pointer border border-gray-100" padding="" shadow="" bgColor="bg-white" icon={BsArrowRight} />
            </FlexCenter>
        </div>
    )
}
export default ListBlog