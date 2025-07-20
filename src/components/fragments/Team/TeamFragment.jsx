import { useRef } from "react";
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import TextCustom from "../../elements/Text/Text"
import { teamData } from "../../../constants/Constant";
import Button from "../../elements/Button/Button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import SwiperCustom from "../../elements/Swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import Card from "../../elements/Card/Card";
import ImageCustom from "../../elements/Image/Image";
import { LuFacebook, LuTwitter } from "react-icons/lu";
import { FaInstagram, FaPinterestP } from "react-icons/fa6";

const TeamFragment = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    return (
        <>
            <FlexCenter classname="flex-col" gap="gap-10">
                <FlexCenter classname="flex-col justify-center max-w-[640px] mx-auto text-center" gap="gap-3">
                    <TextCustom type="heading_2_600" respText="text-2xl">Our Awesome Team</TextCustom>
                    <TextCustom type="body_md_400" respText="text-sm" textColor="text-gray-600">Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.</TextCustom>
                </FlexCenter>
                <div className="relative w-full max-w-7xl">
                    <Button typeButton="icon" ref={prevRef} padding="" bgColor="bg-white" classname="absolute left-3 md:-left-15 top-1/2 -translate-y-1/2 z-10 border border-gray-100 shadow" icon={BsArrowLeft} />
                    <Button typeButton="icon" ref={nextRef} padding="" bgColor="bg-white" classname="absolute right-3 md:-right-15 top-1/2 -translate-y-1/2 z-10 border border-gray-100 shadow" icon={BsArrowRight} />
                    <SwiperCustom
                        prevRef={prevRef}
                        nextRef={nextRef}
                        withPagination={false}
                        swiperProps={{
                            spaceBetween: 0,
                            slidesPerView: 1,
                            loop: true,
                            breakpoints: {
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 },
                            },
                        }}
                    >
                        {teamData.map((item, index) => (
                            <SwiperSlide key={index} className="py-3">
                                <Card type="flexStart" classname="group relative flex-col w-[306px] mx-auto" padding="" rounded="rounded-lg">
                                    <div className="group relative">
                                        <ImageCustom path="team" image={item.image} classname="max-h-[280px] w-full object-cover" />
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg" />
                                    </div>
                                    <FlexStart classname="flex-col py-3 px-4" gap="">
                                        <TextCustom type="body_lg_500">{item.name}</TextCustom>
                                        <TextCustom type="body_sm_400" textColor="text-gray-400">{item.role}</TextCustom>
                                    </FlexStart>
                                    <FlexCenter classname="absolute top-1/3 right-1/5 z-10 gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Button hover={true} color="" shadow="" padding="" classname="h-10 w-10 flex justify-center items-center text-white">
                                            <LuFacebook size="22px" />
                                        </Button>
                                        <Button hover={true} color="" shadow="" padding="" classname="h-10 w-10 flex justify-center items-center text-white">
                                            <LuTwitter size="22px" />
                                        </Button>
                                        <Button hover={true} color="" shadow="" padding="" classname="h-10 w-10 flex justify-center items-center text-white">
                                            <FaPinterestP size="22px" />
                                        </Button>
                                        <Button hover={true} color="" shadow="" padding="" classname="h-10 w-10 flex justify-center items-center text-white">
                                            <FaInstagram size="22px" />
                                        </Button>
                                    </FlexCenter>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </SwiperCustom>
                </div>
            </FlexCenter>
        </>
    )
}

export default TeamFragment