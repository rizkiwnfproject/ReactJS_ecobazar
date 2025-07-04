import TextCustom from '../../elements/Text/Text'
import { FlexCenter, FlexStart } from '../../elements/Flex/Flex'
import Button from '../../elements/Button/Button';
import { CountdownList } from '../Countdown/Countdown';
import { bannerData, countdownData } from '../../../constants/Constant';
import ImageCustom from '../../elements/Image/Image';


const BannerFragment = (props) => {
    const { children } = props
    return (
        <div>
            {children}
        </div>
    )
}

const BannerBig = (props) => {
    const { children } = props
    return (
        <>
            <div className="relative bg-green-50 mt-32 mb-15 rounded-lg ">
                <FlexCenter classname="w-full min-h-[705px] justify-start pl-20">
                    <div className="max-w-xl">
                        <TextCustom
                            type="body_sm_500"
                            textTransform="uppercase"
                            textColor="text-green-success"
                            classname="tracking-[2%]">
                            Welcome to shopery
                        </TextCustom>
                        <TextCustom type="title_semibold" leading="leading-[120%]">Fresh & Healthy Organic Food</TextCustom>
                        <TextCustom
                            type="heading_5_400"
                            leading="leading-[120%]"
                            classname="mt-9 flex gap-3 items-center">Sale up to
                            <TextCustom type="span" classname="text-[32px]" textColor="text-orange-warning">30% OFF</TextCustom>
                        </TextCustom>
                        <TextCustom
                            type="body_sm_400"
                            textColor="text-gray-500"
                            classname="mt-3">Free shipping on all your order. we deliver, you enjoy
                        </TextCustom>
                        <Button
                            category="shop"
                            color="text-white bg-green-success"
                            classname="w-4/12 mt-10 ">Shop Now
                        </Button>
                    </div>
                    <div className="absolute right-0 w-[800px]">
                        <ImageCustom path="banner" image="Image" name="banner" />
                    </div>
                </FlexCenter>
                <div className="w-11/12 absolute -bottom-15 translate-x-1/22 h-[128px] flex justify-between items-center mt-6 p-10 shadow-sm rounded-xl bg-white">
                    {children}
                </div>
            </div>

        </>
    )
}

const BannerMedium = () => {
    return (
        <>
            <div className="relative">
                <ImageCustom
                    path="banner"
                    image="Discount_Bannar"
                    name="Discount"
                    classname="w-full h-[358px] object-[0%_97%] object-cover rounded-2xl"
                />
                <FlexStart
                    gap="gap-4"
                    classname="absolute top-0 right-16 w-[441px] h-full flex-col text-left justify-center px-10 text-white">
                    <FlexStart classname="flex-col" gap="gap-1">
                        <TextCustom
                            type="body_sm_500"
                            textTransform="uppercase"
                            textColor="text-white"
                            classname="tracking-[3%]">Summer Sale
                        </TextCustom>
                        <TextCustom
                            type="heading_1_600"
                            textColor="text-orange-warning"
                            classname="flex items-center"
                        >37%
                            <TextCustom
                                type="span"
                                textTransform="uppercase"
                                textColor="text-white"
                                classname="text-[56px]"
                            >off</TextCustom>
                        </TextCustom>
                    </FlexStart>
                    <TextCustom type="body_md_400" textColor="text-white" classname="opacity-70">
                        Free on all your order, Free Shipping and  30 days money-back guarantee
                    </TextCustom>
                    <Button category="shop" color="text-white bg-green-success" classname="w-6/12 mt-3 ">
                        shop now
                    </Button>
                </FlexStart>

            </div>
        </>
    )
}

const BannerSmall = () => {
    return (
        <>
            <FlexCenter gap="gap-6">
                {bannerData.map((item, index) => (
                    <div key={index} className="relative w-1/3">
                        <ImageCustom
                            path="banner"
                            image={item.image}
                            name={item.name}
                        />
                        <FlexStart
                            gap="gap-3"
                            classname="absolute top-0 left-0 w-full text-center flex-col py-7">
                            <TextCustom
                                type="body_sm_500"
                                textTransform="uppercase"
                                textColor={`${index === 2 ? "text-black" : "text-white"}`}
                                classname="tracking-[3%]">
                                {item.subtitle}
                            </TextCustom>
                            <TextCustom
                                type="heading_3_600"
                                textColor={`${index === 2 ? "text-black" : "text-white"}`}>
                                {item.title}
                            </TextCustom>
                            {index !== 0 && <div>
                                <TextCustom
                                    type="body_xxl_400"
                                    textColor={`${index === 1 ? "text-white " : "text-black"} flex justify-center items-center gap-2`}
                                > {item.text}
                                    <TextCustom
                                        type="span"
                                        classname={`text-xl`}
                                        bgColor={`${index === 1 ? "" : "bg-black px-3 py-1 rounded"}`}
                                        textColor={`${index === 1 ? "text-orange-warning" : "text-[#FCC900]"}`}>{item.span}
                                    </TextCustom>
                                </TextCustom>
                            </div>}
                            {index === 0 && <div>
                                <CountdownList data={countdownData} />
                            </div>}
                            <Button
                                category="shop"
                                classname={`w-5/12 mx-auto mt-3 cursor-pointer ${index === 1 ? "mt-6" : ""}`}
                                color="text-green-success bg-white">Shop Now
                            </Button>
                        </FlexStart>
                    </div >
                ))}
            </FlexCenter >
        </>
    )
}

const BannerSmallest = () => {
    return (
        <>
            <div className='relative'>
                <ImageCustom
                    path="banner"
                    image="Bannar_6"
                    name="Summer Sale"
                    classname="h-[370px]"
                />
                <FlexStart
                    gap="gap-3"
                    classname="absolute top-0 left-0 w-full text-center flex-col py-7">
                    <TextCustom
                        type="body_sm_500"
                        textTransform="uppercase"
                        classname="tracking-[3%]">
                        Summer Sale
                    </TextCustom>
                    <TextCustom
                        type="heading_3_600" textColor="text-green-success">
                        75% off
                    </TextCustom>
                    <Button
                        category="shop"
                        classname={`mx-auto mt-3 cursor-pointer`}
                        color="text-green-success bg-white">Shop Now
                    </Button>
                </FlexStart>
            </div >
        </>
    )
}
BannerFragment.BannerBig = BannerBig;
BannerFragment.BannerSmall = BannerSmall;
BannerFragment.BannerSmallest = BannerSmallest;
BannerFragment.BannerMedium = BannerMedium;


export default BannerFragment