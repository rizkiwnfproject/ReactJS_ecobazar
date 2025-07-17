import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


const SwiperCustom = ({
    children,
    swiperRef,
    prevRef,
    nextRef,
    withPagination = false,
    paginationConfig = {},
    swiperProps = {},
}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            onBeforeInit={(swiper) => {
                if (prevRef?.current && nextRef?.current) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }
            }}
            navigation={
                prevRef && nextRef
                    ? {
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }
                    : false
            }
            pagination={withPagination ? paginationConfig : false}
            {...swiperProps}
            ref={swiperRef}
        >
            {children}
        </Swiper>
    )
}

export default SwiperCustom