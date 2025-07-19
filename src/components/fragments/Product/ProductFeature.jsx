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
import { BsArrowLeft, BsArrowRight, BsEye } from "react-icons/bs"
import { Link } from "react-router"
import ModalPreviewProduct from "../../elements/Modal/ModalPreviewProduct"
import { useRef } from "react"

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
            <TextCustom type="body_lg_600" respText="text-lg" textColor="text-gray-800">{title}</TextCustom>
            {products.map((item, idx) => (
                <Card key={idx} type="flexCenter" padding="p-4" classname="rounded-lg hover:border-green-success hover:scale-101 hover:drop-shadow-green-success hover:shadow-lg transition-all duration-300">
                    <ImageCustom path="products" image={item.image} name={item.name} classname="w-16 h-16 object-cover" />
                    <div className="flex flex-col pl-2">
                        <TextCustom type="body_sm_500" respText="text-sm" textColor="text-gray-700">{item.name}</TextCustom>
                        <TextCustom type="body_sm_600" respText="text-sm" >${item.price}</TextCustom>
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
            <Grid cols="grid-cols-1 md:grid-cols-4 pl-2 mt-3" gap="gap-6">
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
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <FlexCenter classname="w-full justify-between h-auto mb-5 md:mb-10">
                <TextCustom type="heading_3_600" respText='text-3xl' classname="w-full">Featured Products</TextCustom>
                <FlexCenter classname="hidden md:flex text-green-success font-medium w-28 capitalize">
                    <Button
                        typeButton="icon"
                        ref={prevRef}
                        padding="p-3"
                        bgColor="bg-white"
                        shadow="shadow-md"
                        classname='swiper-button-prev-custom border border-gray-100'
                        iconSize="25px"
                        icon={BsArrowLeft}
                    />
                    <Button
                        typeButton="icon"
                        ref={nextRef}
                        padding="p-3"
                        textColor="text-white"
                        shadow="shadow-md"
                        classname='swiper-button-prev-custom '
                        iconSize="25px"
                        icon={BsArrowRight}
                    />
                </FlexCenter>
            </FlexCenter>
            <div className="md:relative w-full">
                <SwiperCustom
                    prevRef={prevRef}
                    nextRef={nextRef}
                    swiperProps={{
                        spaceBetween: 5,
                        slidesPerView: 1,
                        loop: true,
                        breakpoints: {
                            // 200: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 5 },
                        }
                    }}
                >
                    {productsData.slice(0, 10).map((data, index) => (
                        <SwiperSlide key={index} className="py-3 pl-2">
                            <Card key={index} type="flexStart" classname="group relative h-[339px] md:max-w-[240px] flex-col justify-start p-3 md:p-0">
                                <Link to="shop/produk-detail">
                                    <ImageCustom
                                        path="products"
                                        image={data.image}
                                        name={data.name}
                                        classname='mx-auto w-[246px] h-[246px] rounded-lg' />
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
                                    </FlexCenter>
                                </Link>
                                <div className="absolute top-3 right-3 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button typeButton="icon" bgColor="bg-white" padding="" classname='w-10 h-10 border border-gray-100' hover={true} iconSize="1.5rem" icon={HiOutlineHeart} />
                                    <Button typeButton="icon" bgColor="bg-white" padding="" classname='z-10 border border-gray-100' hover={true} iconSize="1.5rem" icon={BsEye} onClick={() => document.getElementById('preview_product').showModal()} />
                                </div>
                            </Card>
                        </SwiperSlide>
                    ))}
                </SwiperCustom>
                <FlexCenter classname="flex md:hidden">
                    <Button
                        typeButton="icon"
                        ref={prevRef}
                        padding="p-3"
                        bgColor="bg-green-success"
                        shadow="shadow-md"
                        iconColor="text-white"
                        classname='swiper-prev-custom absolute top-1/10 -left-3 z-1 border border-gray-100'
                        iconSize="25px"
                        icon={BsArrowLeft}
                    />
                    <Button
                        typeButton="icon"
                        ref={nextRef}
                        padding="p-3"
                        bgColor="bg-green-success"
                        shadow="shadow-md"
                        iconColor="text-white"
                        classname='swiper-next-custom absolute top-1/10 -right-5 z-1 border border-gray-100'
                        iconSize="25px"
                        icon={BsArrowRight}
                    />
                </FlexCenter>
                <ModalPreviewProduct />
            </div>
        </>
    )
}
export default ProductFeature
