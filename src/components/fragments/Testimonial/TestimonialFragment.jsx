import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { BiSolidQuoteAltRight } from "react-icons/bi"
import { useRef } from "react"
import SwiperCustom from "../../elements/Swiper/Swiper"
import { SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { testimonialsData } from "../../../constants/Constant"
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import TextCustom from "../../elements/Text/Text"
import Button from "../../elements/Button/Button"
import ImageCustom from "../../elements/Image/Image"
import Rating from "../../elements/Rating/Rating"


const TestimonialFragment = (props) => {
    const { children } = props
    return (
        <>
            <div className="">
                {children}
            </div>
        </>
    )
}

const TestimonialCard = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <div className="relative pb-10">
                <TextCustom type="heading_3_600" respText='text-3xl' classname="w-full">Client Testimonials</TextCustom>
                <div className="mt-8 flex justify-between">
                    <SwiperCustom
                        prevRef={prevRef}
                        nextRef={nextRef}
                        swiperProps={{
                            spaceBetween: 30,
                            slidesPerView: 1,
                            loop: true,
                            breakpoints: {
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2 },
                                1280: { slidesPerView: 3 }
                            }
                        }}
                    >
                        {testimonialsData.map((data, index) => (
                            <SwiperSlide key={index}>
                                <FlexStart gap="gap-4" classname="flex-col bg-white max-w-[415px] min-h-[200px] p-6 my-2 rounded-lg shadow">
                                    <BiSolidQuoteAltRight size={32} className="text-green-success opacity-30" />
                                    <TextCustom type="body_sm_400" respText='text-sm' textColor="text-gray-700">{data.comment}</TextCustom>
                                    <FlexCenter classname="w-full justify-between">
                                        <FlexCenter gap="gap-3" classname="justify-start">
                                            <ImageCustom path="users" image={data.image} name="user" classname="w-10 xl:w-14" />
                                            <FlexStart gap="gap-0.5" classname="flex-col">
                                                <TextCustom type="body_md_500" respText='text-sm'>{data.name.slice(0,8)}..</TextCustom>
                                                <TextCustom type="body_sm_400" respText='text-xs' textColor="text-gray-400">{data.role}</TextCustom>
                                            </FlexStart>
                                        </FlexCenter>
                                        <FlexStart gap="gap-0.5" classname="text-orange-warning text-lg">
                                            <Rating fontSize="text-xs xl:text-sm" rate={data.rating} />
                                        </FlexStart>
                                    </FlexCenter>
                                </FlexStart>
                            </SwiperSlide>
                        ))}
                    </SwiperCustom>
                </div >
                <FlexCenter classname="flex absolute md:pt-0 -bottom-3 left-2/5 md:top-0 md:right-0 md:left-auto md:bottom-auto">
                    <Button
                        typeButton="icon"
                        ref={prevRef}
                        padding="p-3"
                        bgColor="bg-white"
                        shadow="shadow-md"
                        classname='swiper-prev-tm-mob border border-gray-100'
                        iconSize="25px"
                        icon={BsArrowLeft}
                    />
                    <Button
                        typeButton="icon"
                        ref={nextRef}
                        padding="p-3"
                        textColor="text-white"
                        shadow="shadow-md"
                        classname='swiper-next-tm-mob'
                        iconSize="25px"
                        icon={BsArrowRight}
                    />
                </FlexCenter>
            </div>
        </>
    )
}

TestimonialFragment.TestimonialCard = TestimonialCard

export default TestimonialFragment