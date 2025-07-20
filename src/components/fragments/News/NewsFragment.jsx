import { BsArrowRight, BsChatSquare, BsPerson, BsTag } from "react-icons/bs";
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import { newsData } from "../../../constants/Constant";
import TextCustom from "../../elements/Text/Text";
import Card from "../../elements/Card/Card";
import ImageCustom from "../../elements/Image/Image";
import Button from "../../elements/Button/Button";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import NewsIcon from "../../elements/Text/NewsIcon";

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

const NewsCard = () => {
    const [itemsToShow, setItemsToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1023) {
                setItemsToShow(3);
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(1);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <FlexCenter classname="justify-between mb-10">
                <TextCustom type="heading_3_600" respText="text-3xl" classname="w-full text-left md:text-center">Latest News</TextCustom>
                <Link to="blog">
                    <TextCustom type="body_sm_500" textColor="text-green-success" classname="flex md:hidden items-center gap-2">More <BsArrowRight /> </TextCustom>
                </Link>
            </FlexCenter>
            <FlexStart classname="justify-between">
                {newsData.slice(0, itemsToShow).map((data, index) => (
                    <Card key={index} type="flexStart" classname="w-[350px] xl:w-[415px] xl:h-[494px] flex-col rounded-xl" padding="p-0">
                        <div className="relative">
                            <ImageCustom path="news" image={data.image} alt={data.title} classname="w-full"/>
                            <button className="absolute bottom-5 left-5 bg-white rounded text-center w-[58px] h-[58px] flex flex-col justify-center">
                                <TextCustom
                                    type="body_xl_500"
                                    respText="text-lg"
                                >
                                    {data.date.day}
                                </TextCustom>
                                <TextCustom
                                    type="body_xs_400" respText="text-xs"
                                    textTransform="uppercase"
                                    textColor="text-gray-500"
                                    classname='tracking-[3%]'>
                                    {data.date.month}</TextCustom>
                            </button>
                        </div>
                        <FlexStart classname="flex-col p-6 h-full justify-between" gap="gap-4">
                            <FlexStart classname="flex-col">
                                <FlexStart classname="flex-col justify-between" gap="gap-6">
                                    <NewsIcon comments='190 comments' category='food' writter='carolina' />
                                    <TextCustom type="body_lg_500" textColor="text-green-success-dark" leading="leading-6">
                                        {data.title.slice(0,50)} ... 
                                    </TextCustom>
                                </FlexStart>
                            </FlexStart>
                            <Link to="blog/1">
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
            </FlexStart>
        </>
    )
}

NewsFragment.NewsCard = NewsCard

export default NewsFragment