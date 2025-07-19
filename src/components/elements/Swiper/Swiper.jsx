import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState, useEffect } from 'react';

const SwiperCustom = ({
    children,
    swiperRef,
    prevRef,
    nextRef,
    withPagination = false,
    paginationConfig = {},
    swiperProps = {},
}) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (prevRef?.current && nextRef?.current) {
            setIsReady(true);
        }
    }, [prevRef?.current, nextRef?.current]);
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            // onBeforeInit={(swiper) => {
            //     if (prevRef?.current && nextRef?.current) {
            //         swiper.params.navigation.prevEl = prevRef.current;
            //         swiper.params.navigation.nextEl = nextRef.current;
            //     }
            // }}
            navigation={
                // prevRef && nextRef
                //     ? {
                //         prevEl: prevRef.current,
                //         nextEl: nextRef.current,
                //     }
                //     : false
                isReady
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