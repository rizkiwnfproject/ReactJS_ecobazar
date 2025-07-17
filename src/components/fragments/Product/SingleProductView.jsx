import { useState } from "react";
import ImageCustom from "../../elements/Image/Image";
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import TextCustom from "../../elements/Text/Text";
import Rating from "../../elements/Rating/Rating";
import { LuDot, LuFacebook, LuHeart, LuMinus, LuPlus, LuTwitter } from "react-icons/lu";
import Button from "../../elements/Button/Button";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaInstagram, FaPinterestP } from "react-icons/fa6";

const SingleProductView = () => {
    const [activeImage, setActiveImage] = useState("image_14");
    const productImages = [
        "image_14",
        "image_1",
        "image_2",
        "image_3"
    ];
    let [counter, setCounter] = useState(0)
    return (
        <>
            <div className="max-w-11/12 w-full mx-auto grid grid-cols-8 gap-5 p-6 items-center">
                <div className="col-span-1 flex flex-col gap-3 items-center overflow-y-auto max-h-[400px]">
                    {productImages.map((img, index) => (
                        <div
                            key={index}
                            className={`p-1 border rounded cursor-pointer ${activeImage === img ? "border-green-success" : "border-transparent"
                                }`}
                            onClick={() => setActiveImage(img)}
                        >
                            <ImageCustom path="products" image={img} classname="w-14 h-14 object-cover rounded" />
                        </div>
                    ))}
                </div>
                <div className="col-span-3">
                    <ImageCustom path="products" image={activeImage} classname="max-w-2xl w-[450px] h-[450px] object-cover" />
                </div>
                <FlexStart classname="flex-col col-span-4">
                    <FlexStart classname="flex-col" gap="gap-3" >
                        <TextCustom type="heading_4_600" classname="flex items-center gap-2">Chinese Cabbage <span className="rounded text-sm px-2 py-1 font-normal text-green-success-dark bg-[rgba(0,178,7,0.2)]">In Stock</span></TextCustom>
                        <FlexCenter >
                            <Rating rate={5} fontSize="text-base" />
                            <TextCustom type="body_sm_400" textColor="text-gray-600">4 Review</TextCustom>
                            <div className="text-gray-300">
                                <LuDot size="2rem" />
                            </div>
                            <TextCustom type="body_sm_500">SKU: <span className="text-gray-600">2,51,594</span></TextCustom>
                        </FlexCenter>
                        <FlexCenter classname="pb-7 border-b border-b-gray-100">
                            <TextCustom type="body_xl_400" textColor="text-gray-300" classname="line-through">$48.00</TextCustom>
                            <TextCustom type="body_xxl_500" textColor="text-green-success-dark">$17.28</TextCustom>
                            <TextCustom type="body_sm_500" textColor="text-red-error" classname="bg-[rgba(234,75,72,0.2)] px-3 py-1 rounded-full">64% Off</TextCustom>
                        </FlexCenter>
                    </FlexStart>
                    <FlexCenter classname="flex-col pt-3 pb-7 border-b border-b-gray-50" gap="gap-4">
                        <FlexStart classname="w-full justify-between">
                            <FlexCenter >
                                <TextCustom type="body_sm_400">Brand:</TextCustom>
                                <ImageCustom path="brand" image="image_1" />
                            </FlexCenter>
                            <FlexCenter>
                                <TextCustom type="body_sm_400">Share item:</TextCustom>
                                <FlexCenter>
                                    <Button
                                        typeButton="icon"
                                        hover={true}
                                        bgColor=''
                                        shadow=''
                                        padding=''
                                        classname=""
                                        icon={LuFacebook}
                                        iconSize='22px' />
                                    <Button
                                        typeButton="icon"
                                        hover={true}
                                        bgColor=''
                                        shadow=''
                                        padding=''
                                        classname=""
                                        icon={LuTwitter}
                                        iconSize='22px' />
                                    <Button
                                        typeButton="icon"
                                        hover={true}
                                        bgColor=''
                                        shadow=''
                                        padding=''
                                        classname=""
                                        icon={FaPinterestP}
                                        iconSize='22px' />
                                    <Button
                                        typeButton="icon"
                                        hover={true}
                                        bgColor=''
                                        shadow=''
                                        padding=''
                                        classname=""
                                        icon={FaInstagram}
                                        iconSize='22px' />
                                </FlexCenter>
                            </FlexCenter>
                        </FlexStart>
                        <TextCustom type="body_sm_400" textColor="text-gray-500" classname="text-justify">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. </TextCustom>
                    </FlexCenter>
                    <FlexCenter classname="w-full pt-3 pb-7 border-b border-b-gray-50">
                        <FlexCenter classname="border p-2 border-gray-100 rounded-full" gap="gap-3">
                            <Button typeButton="icon" hover={false} bgColor='' shadow='' padding='' btn="" classname="bg-gray-50" icon={LuMinus} iconSize="18px" onClick={() => { counter === 0 ? 0 : setCounter(counter - 1) }} />
                            <TextCustom type="body_md_400">{counter}</TextCustom>
                            <Button typeButton="icon" hover={false} bgColor='' shadow='' padding='' btn="" classname="bg-gray-50" icon={LuPlus} iconSize="18px" onClick={() => { setCounter(counter + 1) }} />
                        </FlexCenter>
                        <Button
                            typeButton="textIcon"
                            textColor="text-white"
                            classname="w-full"
                            label="Add to Cart"
                            icon={HiOutlineShoppingBag}
                            textType='body_md_500'
                            justify='justify-center w-full'
                            reverse={true} />
                        <Button typeButton="icon" hover={true} bgColor='bg-[rgba(0,178,7,0.2)]' textColor="text-green-success-dark" classname="w-20 h-13" shadow='' padding='' btn="" iconSize="22px" icon={LuHeart} />
                    </FlexCenter>
                    <FlexStart classname="flex-col pt-4">
                        <TextCustom type="body_sm_500" classname="flex items-center">Category: <span className="text-sm font-normal text-gray-500">Vegetables</span></TextCustom>
                        <TextCustom type="body_sm_500" classname="flex items-center">Tag: <span className="text-sm font-normal text-gray-500">Vegetables
                            Healthy
                            Chinese
                            Cabbage
                            Green Cabbage</span></TextCustom>
                    </FlexStart>
                </FlexStart>
            </div>
        </>
    )
}

export default SingleProductView