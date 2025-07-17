import { productsData } from "../../../constants/Constant"
import Card from "../../elements/Card/Card"
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import ImageCustom from "../../elements/Image/Image"
import Rating from "../../elements/Rating/Rating"
import SwiperCustom from "../../elements/Swiper/Swiper"
import { SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import TextCustom from "../../elements/Text/Text"
import Button from "../../elements/Button/Button"
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi2"
import Grid from "../../elements/Grid/Grid"
import { BsEye } from "react-icons/bs"

export const ProductFeatureGroup = ({
    limit,
    title,
    category
}) => {
    const products = productsData
        .filter(item => item.category === category)
        .slice(0, limit)
    return (
        <FlexStart classname="flex-col" gap="gap-4">
            <TextCustom type="body_lg_600" textColor="text-gray-800">{title}</TextCustom>
            {products.map((item, idx) => (
                <Card key={idx} type="flexCenter" padding="p-4" classname="rounded-lg hover:border-green-success hover:scale-101 hover:drop-shadow-green-success hover:shadow-lg transition-all duration-300">
                    <ImageCustom path="products" image={item.image} name={item.name} classname="w-16 h-16 object-cover" />
                    <div className="flex flex-col">
                        <TextCustom type="body_sm_500" textColor="text-gray-700">{item.name}</TextCustom>
                        <TextCustom type="body_sm_600" >${item.price}</TextCustom>
                        <Rating rate={item.rate} />
                    </div>
                </Card>
            ))}
        </FlexStart>
    )
}

export const ProductDeal = ({
    children
}) => {
    return (
        <>
            <Grid cols="grid-cols-4 pl-2 mt-3" gap="gap-6">
                <ProductFeatureGroup title="Hot Deals" category="hot_deals" limit={3} />
                <ProductFeatureGroup title="Best Seller" category="best_sellers" limit={3} />
                <ProductFeatureGroup title="Top Rated" category="top_rated" limit={3} />
                <div className="flex items-center justify-center">
                    {children}
                </div>
            </Grid>
        </>
    )
}

const ProductFeature = () => {
    return (
        <>
            <TextCustom type="heading_3_600" classname="w-full text-center mb-10">Featured Products</TextCustom>
            <SwiperCustom
                swiperProps={{
                    spaceBetween: 0,
                    slidesPerView: 1,
                    loop: true,
                    breakpoints: {
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 5 },
                    }
                }}
            >
                {productsData.slice(0, 10).map((data, index) => (
                    <SwiperSlide key={index} className="py-3 pl-2">
                        <Card type="flexStart" key={index} classname="group relative h-[339px] max-w-[240px] flex-col justify-start">
                            <ImageCustom
                                path="products"
                                image={data.image}
                                name={data.name}
                                classname='w-[246px] h-[246px]' />
                            <FlexCenter classname="justify-between px-3">
                                <FlexStart classname="flex-col" gap="gap-1">
                                    <TextCustom
                                        type="body_sm_400"
                                        textColor="text-gray-700">
                                        {data.name}
                                    </TextCustom>
                                    <TextCustom
                                        type="body_md_500">
                                        {data.price}
                                        <TextCustom type="span" textColor='text-gray-400' classname='text-base line-through'>$20.99</TextCustom></TextCustom>
                                    <Rating rate={data.rate} />
                                </FlexStart>
                                <Button typeButton="icon" bgColor="bg-gray-50" hover={true} padding="" iconSize="1.5rem" classname="w-10 h-10" icon={HiOutlineShoppingBag} />
                                <div className="absolute top-3 right-3 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button typeButton="icon" bgColor="bg-white" padding="" classname='w-10 h-10 border border-gray-100' hover={true} iconSize="1.5rem" icon={HiOutlineHeart} />
                                    <Button typeButton="icon" bgColor="bg-white" padding="" classname='w-10 h-10 border border-gray-100' hover={true} iconSize="1.5rem" icon={BsEye} />
                                </div>
                            </FlexCenter>
                        </Card>
                    </SwiperSlide>
                ))}
            </SwiperCustom>

        </>
    )
}
export default ProductFeature
