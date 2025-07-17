import { useRef } from "react";
import TextCustom from "../../elements/Text/Text";
import Button from "../../elements/Button/Button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FlexStart } from "../../elements/Flex/Flex";
import SwiperCustom from "../../elements/Swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { categoriesData } from "../../../constants/Constant";
import Card from "../../elements/Card/Card";
import ImageCustom from "../../elements/Image/Image";

const ProductCategories = ({
    width,
    classname,
    gap,
}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <TextCustom type="heading_3_600" classname="w-full text-center mb-10">Top Category</TextCustom>
            <Button typeButton="icon" ref={prevRef} bgColor="bg-white" padding="" classname="absolute left-0 top-2/3 -translate-y-1/2 z-10 border border-gray-100" shadow="shadow" icon={BsArrowLeft} />
            <Button typeButton="icon" ref={nextRef} bgColor="bg-white" padding="" classname="absolute right-0 top-2/3 -translate-y-1/2 z-10 border border-gray-100" shadow="shadow" icon={BsArrowRight} />
            <FlexStart classname="max-w-7xl mx-auto" gap="gap-0">
                <SwiperCustom
                    prevRef={prevRef}
                    nextRef={nextRef}
                    withPagination={true}
                    paginationConfig={{
                        el: '.swiper-pagination-custom',
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className} custom-bullet"></span>`;
                        },
                    }}
                    swiperProps={{
                        spaceBetween: 0,
                        slidesPerView: 3,
                        loop: true,
                        breakpoints: {
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 6 },
                        },
                    }}
                >
                    {categoriesData.map((data, index) => (
                        <SwiperSlide key={index} className="py-3 pl-2">
                            <Card type="flexCenter" gap={gap} classname={classname}>
                                <ImageCustom path="categories" image={data.image} name={data.name} classname={width} />
                                <TextCustom type="body_lg_500" classname="text-center">
                                    {data.name}
                                </TextCustom>
                                <TextCustom type="body_sm_400" textColor="text-gray-400">{data.product} Products</TextCustom>
                            </Card>
                        </SwiperSlide>
                    ))}
                </SwiperCustom>
            </FlexStart>
        </>
    )
}

export default ProductCategories