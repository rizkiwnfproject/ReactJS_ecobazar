import { useState } from "react";
import { DropdownCustom } from "../../elements/Dropdown/Dropdown";
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import TextCustom from "../../elements/Text/Text"
import { LuCalendar, LuSettings2 } from "react-icons/lu";
import InputCustom from "../../elements/Input/Input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../../elements/Button/Button";
import Card from "../../elements/Card/Card";
import ImageCustom from "../../elements/Image/Image";
import { BsCalendar } from "react-icons/bs";

const FilterFragment = ({ children }) => {
    return (
        <>
            <FlexStart classname="flex-col" gap="gap-4">
                {children}
            </FlexStart>
        </>
    )
}
export const FilterTop = () => {
    const [sort, setSort] = useState("")
    return (
        <>
            <div className="grid grid-cols-6 mb-8">
                <div className="col-span-2">
                    <div className="w-32 bg-green-success px-8 py-3.5 rounded-full ">
                        <TextCustom type="body_sm_600" textColor="text-white" classname="flex items-center justify-between">filter <LuSettings2 size="20px" /></TextCustom>
                    </div>
                </div>
                <div className="col-span-4 flex justify-between items-center">
                    <DropdownCustom
                        label="sort by:"
                        options={["latest", "oldest", "A → Z", "Singapore"]}
                        selected={sort}
                        onSelect={setSort}
                        placeholder="Filter"
                        widthClass="min-w-[120px]"
                        padding="py-2 px-3"
                        flexDirection="flex flex-row items-center gap-x-2"
                        margin="mt-52"
                    />
                    <TextCustom type="body_md_400" textColor="text-gray-600"> <span className="font-semibold text-gray-900">52</span> Results Found</TextCustom>
                </div>
            </div>
        </>
    )
}

export const FilterSearch = () => {
    return (
        <>
            <div className="relative pb-7 border-b border-gray-100">
                <InputCustom padding="px-10 py-2" type="text" placeholder="Search" />
                <div className="navbar__middle_icon absolute top-3 left-4">
                    <HiMagnifyingGlass size={"18px"} color="" />
                </div>
            </div>
        </>
    )
}
export const FilterCategories = () => {
    return (
        <>
            <div className=" pb-7 border-b border-gray-100">
                <FlexStart gap="gap-4" classname="flex-col">
                    <TextCustom type="body_xl_500">Top Categories</TextCustom>
                    <TextCustom type="body_sm_400" classname="flex justify-between items-center">Fresh Fruit<span className="text-gray-500">(150)</span></TextCustom>
                    <TextCustom type="body_sm_400" classname="flex justify-between items-center">Vegetables<span className="text-gray-500">(54)</span></TextCustom>
                    <TextCustom type="body_sm_400" classname="flex justify-between items-center">Cooking<span className="text-gray-500">(47)</span></TextCustom>
                    <TextCustom type="body_sm_400" classname="flex justify-between items-center">Snacks<span className="text-gray-500">(43)</span></TextCustom>
                    <TextCustom type="body_sm_400" classname="flex justify-between items-center">Beverages<span className="text-gray-500">(38)</span></TextCustom>
                    <TextCustom type="body_sm_400" classname="flex justify-between items-center">Beauty & Health<span className="text-gray-500">(134)</span></TextCustom>
                    <TextCustom type="body_sm_400" classname="flex justify-between items-center">Bread & Bakery<span className="text-gray-500">(15)</span></TextCustom>
                </FlexStart>
            </div>
        </>
    )
}
export const FilterTags = () => {
    const foodCategories = [
        { id: 1, name: "Healthy" },
        { id: 2, name: "Low fat" },
        { id: 3, name: "Vegetarian" },
        { id: 4, name: "Bread" },
        { id: 5, name: "Kid foods" },
        { id: 6, name: "Vitamins" },
        { id: 7, name: "Snacks" },
        { id: 8, name: "Tiffin" },
        { id: 9, name: "Meat" },
        { id: 10, name: "Launch" },
        { id: 11, name: "Dinner" }
    ]
    const [tag, setTag] = useState("")
    console.log(tag)
    console.log(setTag)
    return (
        <>
            <div className=" pb-7 border-b border-gray-100">
                <FlexStart gap="gap-4" classname="flex-col">
                    <TextCustom type="body_xl_500">Popular Tag</TextCustom>
                    <FlexStart classname="flex-wrap">
                        {foodCategories.map((item, index) => {
                            let isActive = tag === item.name;
                            console.log("clicked:", item.name)
                            console.log("isActive:", isActive)
                            console.log("selected tag:", tag)
                            return (
                                < Button key={index} classname="cursor-pointer" color={`${isActive ? "bg-green-success" : "bg-gray-50"}`} shadow="" padding="px-4 py-2.5" onClick={() => setTag(item.name)}>
                                    <TextCustom type="body_sm_400" textColor={`${isActive ? "text-white" : "text-gray-900"}`}>{item.name}</TextCustom>
                                </Button>
                            )
                        })}
                    </FlexStart>
                </FlexStart>
            </div >
        </>
    )
}
export const FilterRecentlyAdd = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Curabitur porttitor orci eget neque accumsan.",
            date: "Apr 25, 2021",
            image: "image_1", // pastikan path sesuai folder kamu
        },
        {
            id: 2,
            title: "Donec mattis arcu faucibus suscipit viverra.",
            date: "Apr 25, 2021",
            image: "image_2",
        },
        {
            id: 3,
            title: "Quisque posuere tempus rutrum. Integer velit ex.",
            date: "Apr 25, 2021",
            image: "image_3",
        },
    ];
    return (
        <>
            <div className="">
                <FlexStart gap="gap-4" classname="flex-col">
                    <TextCustom type="body_xl_500">Popular Tag</TextCustom>
                    {blogPosts.map((item, index) => (
                        <Card key={index} type="center" padding="p-1" rounded="rounded-lg">
                            <ImageCustom path="blog" image={item.image} />
                            <FlexStart classname="flex-col justify-start">
                                <TextCustom type="body_md_500">{item.title}</TextCustom>
                                <FlexStart classname="text-green-success">
                                    <LuCalendar />
                                    <TextCustom type="body_sm_400" textColor="text-gray-600">{item.date}</TextCustom>
                                </FlexStart>
                            </FlexStart>
                        </Card>
                    ))}
                </FlexStart>
            </div >
        </>
    )
}

export default FilterFragment