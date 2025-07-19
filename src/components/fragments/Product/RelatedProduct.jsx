import { useRef } from 'react'
import { productsData } from '../../../constants/Constant'
import { FlexCenter, FlexStart } from '../../elements/Flex/Flex'
import TextCustom from '../../elements/Text/Text'
import Card from '../../elements/Card/Card'
import ImageCustom from '../../elements/Image/Image'
import Button from '../../elements/Button/Button'
import { HiOutlineHeart, HiOutlineShoppingBag } from 'react-icons/hi2'
import { BsArrowLeft, BsArrowRight, BsEye } from 'react-icons/bs'
import Rating from '../../elements/Rating/Rating'
import ModalPreviewProduct from '../../elements/Modal/ModalPreviewProduct'
import SwiperCustom from '../../elements/Swiper/Swiper'
import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router'

const RelatedProduct = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <TextCustom type="heading_3_600" respText='text-3xl' classname="w-full md:text-center mb-5 md:mb-10">Related Products</TextCustom>
            <div className="relative w-full">
                <SwiperCustom
                    prevRef={prevRef}
                    nextRef={nextRef}
                    swiperProps={{
                        spaceBetween: 5,
                        slidesPerView: 1,
                        loop: true,
                        breakpoints: {
                            200: { slidesPerView: 1 },
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
                <FlexCenter classname="flex">
                    <Button
                        typeButton="icon"
                        ref={prevRef}
                        padding="p-3"
                        bgColor="bg-green-success"
                        shadow="shadow-md"
                        iconColor="text-white"
                        classname='swiper-prev-ft-mob absolute top-2/5 -left-3 md:-left-12 z-1 border border-gray-100'
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
                        classname='swiper-next-ft-mob absolute top-2/5 -right-5 md:-right-13 z-1 border border-gray-100'
                        iconSize="25px"
                        icon={BsArrowRight}
                    />
                </FlexCenter>
                <ModalPreviewProduct />
            </div>
        </>
    )
}

export default RelatedProduct