import { useState } from "react";
import { DropdownCustom } from "../../elements/Dropdown/Dropdown";
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import TextCustom from "../../elements/Text/Text"
import { LuCalendar, LuSettings2, LuX } from "react-icons/lu";
import InputCustom from "../../elements/Input/Input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../../elements/Button/Button";
import Card from "../../elements/Card/Card";
import ImageCustom from "../../elements/Image/Image";
import { blogTagCategories, filterTopCategories } from "../../../constants/Constant";
import { Range } from "react-range";
import { BsStar, BsStarFill } from "react-icons/bs";
import { ProductFeatureGroup } from "../Product/ProductFeature";

const FilterFragment = ({ children }) => {
    return (
        <>
            <FlexStart classname="flex-col" gap="gap-4">
                {children}
            </FlexStart>
        </>
    )
}
export const FilterTop = ({
    toggleOpen,
    options,
    marginFilter,
    grid = "grid-cols-2 md:grid-cols-6",
    colSpan = "md:col-span-4"
}) => {
    const [sort, setSort] = useState("")
    return (
        <>
            <div className={`grid ${grid} mb-8`}>
                <div className="md:col-span-2">
                    <Button typeButton="textIcon" icon={LuSettings2} textColor="text-white" textType="body_sm_500" padding="px-8 py-3" label="filter" reverse={true} onClick={toggleOpen} />
                </div>
                <div className={`${colSpan} flex justify-between items-center`}>
                    <DropdownCustom
                        label="sort by:"
                        options={options}
                        selected={sort}
                        onSelect={setSort}
                        placeholder="Filter"
                        widthClass="min-w-[120px]"
                        padding="py-2 px-3"
                        flexDirection="flex flex-row items-center gap-x-2"
                        margin={marginFilter}
                    />
                    <TextCustom type="body_md_400" textColor="text-gray-600" classname="hidden md:block"> <span className="font-semibold text-gray-900">52</span> Results Found</TextCustom>
                </div>
            </div>
        </>
    )
}

export const FilterSearch = ({ toggleOpen }) => {
    return (
        <>
            <div className="grid grid-cols-7 md:grid-cols-1 w-full border-b border-gray-100">
                <div className="relative col-span-6 pb-7">
                    <InputCustom padding="px-10 py-2" type="text" placeholder="Search" />
                    <div className="navbar__middle_icon absolute top-3 left-4">
                        <HiMagnifyingGlass size={"18px"} color="" />
                    </div>
                </div>
                <div className="flex justify-center w-full md:hidden">
                    <Button typeButton="icon" icon={LuX} padding="" bgColor="" classname="border border-gray-100" onClick={toggleOpen} />
                </div>
            </div>
        </>
    )
}
export const FilterCategories = ({ type }) => {
    const flexFilter = type === "blog" ? "flex justify-between items-center" : "";
    return (
        <>
            <div className=" pb-7 border-b border-gray-100">
                <FlexStart gap="gap-4" classname="flex-col">
                    <TextCustom type="body_xl_500">Top Categories</TextCustom>
                    {filterTopCategories.map((item, index) => {
                        if (type === "blog") {
                            return (
                                <TextCustom key={index} type="body_sm_400" respText="text-xs" classname={flexFilter}>
                                    {item.name}
                                    <span className="text-gray-500">({item.count})</span>
                                </TextCustom>
                            )
                        } else {
                            return (
                                <InputCustom key={index} type="radio" name="" textColor="text-gray-900" label={
                                    <>
                                        {item.name} <span className="text-gray-500">({item.count})</span>
                                    </>
                                } />
                            )
                        }
                    })}
                </FlexStart>
            </div>
        </>
    )
}

export const FilterRange = () => {
    const STEP = 1;
    const MIN = 0;
    const MAX = 1000;

    const [values, setValues] = useState([0, 1000]);

    return (
        <FlexStart classname="w-full flex-col pb-7 border-b border-gray-100" gap="gap-4">
            <TextCustom type="body_xl_500">Top Categories</TextCustom>
            <Range
                step={STEP}
                min={MIN}
                max={MAX}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="h-2 w-full bg-green-success rounded-full"
                        style={{
                            background: `linear-gradient(
                            to right, 
                            #E5E5E5 ${((values[0] - MIN) / (MAX - MIN)) * 100}%, 
                            #00B207 ${((values[0] - MIN) / (MAX - MIN)) * 100}%, 
                            #00B207 ${((values[1] - MIN) / (MAX - MIN)) * 100}%, 
                            #E5E5E5 ${((values[1] - MIN) / (MAX - MIN)) * 100}%)`,
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className="h-5 w-5 bg-white border-2 border-green-success rounded-full shadow "
                    />
                )}
            />

            <FlexStart classname="text-sm mt-3">
                <TextCustom type="body_sm_400">Price : </TextCustom>
                <TextCustom type="body_sm_500">{values[0].toLocaleString("id-ID")} <span> — </span> {values[1].toLocaleString("id-ID")}</TextCustom>
            </FlexStart>
        </FlexStart>
    );
};

export const FilterRating = () => {
    const ratings = [5, 4, 3, 2, 1];
    return (
        <>
            <FlexStart classname="flex-col" gap="gap-5">
                <TextCustom type="body_xl_500">Rating</TextCustom>
                <FlexStart classname="flex-col">
                    {ratings.map((rating, index) => {
                        const stars = Array.from({ length: 5 }, (_, i) =>
                            i < rating ? (
                                <BsStarFill key={i} className="text-orange-warning" />
                            ) : (
                                <BsStar key={i} className="text-gray-300" />
                            )
                        );
                        return (
                            <InputCustom
                                key={index}
                                type="checkbox"
                                name={`rating-${rating}`}
                                padding=""
                                classname="checked:bg-green-success checked:text-white"
                                label={
                                    <div className="flex items-center gap-1">
                                        {stars}
                                        <TextCustom type="body_sm_400" classname="ml-2">
                                            {rating}.0 & up
                                        </TextCustom>
                                    </div>
                                }
                            />
                        );
                    })}
                </FlexStart>
            </FlexStart>
        </>
    )
}

export const FilterTags = () => {
    const [tag, setTag] = useState("")
    return (
        <>
            <div className=" pb-7 border-b border-gray-100">
                <FlexStart gap="gap-4" classname="flex-col">
                    <TextCustom type="body_xl_500">Popular Tag</TextCustom>
                    <FlexStart classname="flex-wrap">
                        {blogTagCategories.map((item, index) => {
                            let isActive = tag === item.name;
                            return (
                                <Button
                                    typeButton="buttonBasic"
                                    key={index}
                                    classname="cursor-pointer"
                                    bgColor={`${isActive ? "bg-green-success" : "bg-gray-50"}`}
                                    shadow=""
                                    padding="px-4 py-2.5"
                                    onClick={() => setTag(item.name)} label={item.name}
                                    textColor={`${isActive ? "text-white" : "text-gray-900"}`}
                                    textType="body_sm_400"
                                    respText="text-xs"
                                />
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
            image: "image_1",
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
            <div className="hidden md:block">
                <FlexStart gap="gap-4" classname="flex-col">
                    <TextCustom type="body_xl_500">Popular Tag</TextCustom>
                    {blogPosts.map((item, index) => (
                        <Card key={index} type="flexCenter" padding="p-1" rounded="rounded-lg" gap="gap-1.5">
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

export const FilterSaleProduct = () => {
    return (
        <>
            <ProductFeatureGroup title="Best Seller" category="best_sellers" limit={3} />
        </>
    )
}

export default FilterFragment