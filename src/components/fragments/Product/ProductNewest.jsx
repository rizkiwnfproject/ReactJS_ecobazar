import { BsArrowLeft, BsArrowRight, BsEye } from "react-icons/bs"
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import TextCustom from "../../elements/Text/Text"
import { productsData } from "../../../constants/Constant"
import Card from "../../elements/Card/Card"
import ImageCustom from "../../elements/Image/Image"
import Rating from "../../elements/Rating/Rating"
import Button from "../../elements/Button/Button"
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi2"
import { Link } from "react-router"
import ModalPreviewProduct from "../../elements/Modal/ModalPreviewProduct"
import { useRef } from "react"
import SwiperCustom from "../../elements/Swiper/Swiper"
import { SwiperSlide } from "swiper/react"

const ProductNewest = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <TextCustom type="heading_3_600" respText='text-3xl' classname="w-full md:text-center mb-5 md:mb-10">Newest Products</TextCustom>
            <div className="md:relative w-full" data-aos="fade-down">
                <SwiperCustom
                    prevRef={prevRef}
                    nextRef={nextRef}
                    swiperProps={{
                        spaceBetween: 5,
                        slidesPerView: 1,
                        loop: true,
                        breakpoints: {
                            200: { slidesPerView: 1 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 }
                        }
                    }}
                >
                    {productsData.slice(0, 10).map((data, index) => (
                        <SwiperSlide key={index} className="py-3 pl-2">
                            <Card key={index} type="flexStart" classname="group relative min-h-[339px] md:max-w-[240px] flex-col justify-start p-3 md:p-0">
                                <Link to="shop/produk-detail">
                                    <ImageCustom
                                        path="products"
                                        image={data.image}
                                        name={data.name}
                                        classname='mx-auto w-[246px] h-[246px] rounded-lg' />
                                    <FlexCenter classname="relative justify-between px-3">
                                        <FlexStart classname="flex-col" gap="gap-1">
                                            <TextCustom
                                                type="body_sm_400"
                                                respText="text-sm"
                                                textColor="text-gray-700">
                                                {data.name}
                                            </TextCustom>
                                            <TextCustom
                                                type="body_md_500"
                                                respText="text-sm"
                                                >
                                                {data.price}
                                            </TextCustom>
                                            <Rating rate={data.rate} />
                                        </FlexStart>
                                        <Button typeButton="icon" bgColor="bg-gray-50" hover={true} padding="" iconSize="1.5rem" classname="absolute right-3 w-10 h-10" icon={HiOutlineShoppingBag} />
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
                <FlexCenter classname="flex">
                    <Button
                        typeButton="icon"
                        ref={prevRef}
                        padding="p-3 md:p-6"
                        bgColor="bg-green-success"
                        shadow="shadow-md"
                        iconColor="text-white"
                        classname='swiper-prev-nw-mob absolute top-1/2 md:top-2/5 -left-3 md:-left-12 z-1 border border-gray-100'
                        iconSize="25px"
                        icon={BsArrowLeft}
                    />
                    <Button
                        typeButton="icon"
                        ref={nextRef}
                        padding="p-3 md:p-6"
                        bgColor="bg-green-success"
                        shadow="shadow-md"
                        iconColor="text-white"
                        classname='swiper-next-nw-mob absolute top-1/2 md:top-2/5 -right-5 md:-right-13 z-1 border border-gray-100'
                        iconSize="25px"
                        icon={BsArrowRight}
                    />
                </FlexCenter>
                <ModalPreviewProduct />
            </div>
        </>
    )
}

export default ProductNewest