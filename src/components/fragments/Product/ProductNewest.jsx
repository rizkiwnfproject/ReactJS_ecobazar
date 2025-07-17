import { BsArrowRight, BsEye } from "react-icons/bs"
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import TextCustom from "../../elements/Text/Text"
import { productsData } from "../../../constants/Constant"
import Card from "../../elements/Card/Card"
import ImageCustom from "../../elements/Image/Image"
import Rating from "../../elements/Rating/Rating"
import Button from "../../elements/Button/Button"
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi2"

const ProductNewest = () => {
    return (
        <>
            <FlexCenter classname=" w-full justify-between mb-10">
                <TextCustom type="heading_3_600" classname="w-full">Newest Products</TextCustom>
                <FlexCenter classname="text-green-success font-medium w-28 capitalize">
                    view all
                    <BsArrowRight />
                </FlexCenter>
            </FlexCenter>
            <FlexStart classname="flex-wrap justify-between">
                {productsData.filter(data => data.new === false).splice(0, 5).map((data, index) => (
                    <Card type="flexStart" key={index} classname="group relative h-[339px] max-w-[240px] flex-col justify-start">
                        <ImageCustom
                            path="products"
                            image={data.image}
                            name={data.name}
                            classname='w-[246px] h-[246px]' />
                        <FlexCenter classname="justify-between px-3">
                            <FlexStart classname="flex-col" gap="gap-1">
                                <TextCustom type="body_sm_400" textColor="text-gray-700">{data.name}</TextCustom>
                                <TextCustom type="body_md_500">{data.price}</TextCustom>
                                <Rating rate={data.rate} />
                            </FlexStart>
                            <Button typeButton="icon" bgColor="bg-gray-50" hover={true} iconSize="1.5rem" padding="" icon={HiOutlineShoppingBag} />
                            <div className="absolute top-3 right-3 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Button typeButton="icon" bgColor="bg-white" padding="" classname='border border-gray-100' hover={true} iconSize="1.5rem" icon={HiOutlineHeart} />
                                <Button typeButton="icon" bgColor="bg-white" padding="" classname='border border-gray-100' hover={true} iconSize="1.5rem" icon={BsEye} />
                            </div>
                        </FlexCenter>
                    </Card>
                ))}
            </FlexStart>
        </>
    )
}

export default ProductNewest