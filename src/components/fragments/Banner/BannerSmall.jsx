import { BsArrowRight } from 'react-icons/bs'
import { bannerData, countdownData } from '../../../constants/Constant'
import Button from '../../elements/Button/Button'
import { FlexCenter, FlexStart } from '../../elements/Flex/Flex'
import ImageCustom from '../../elements/Image/Image'
import TextCustom from '../../elements/Text/Text'
import { CountdownList } from '../Countdown/Countdown'

const BannerSmall = () => {
    return (
        <>
            <FlexCenter gap="gap-6" classname='flex-col md:flex-row'>
                {bannerData.map((item, index) => (
                    <div key={index} className="relative md:w-1/3">
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
                                respText='text-xs'
                                textTransform="uppercase"
                                textColor={`${index === 2 ? "text-black" : "text-white"}`}
                                classname="tracking-[3%]">
                                {item.subtitle}
                            </TextCustom>
                            <TextCustom
                                type="heading_3_600"
                                respText='text-base lg:text-2xl'
                                textColor={`${index === 2 ? "text-black" : "text-white"}`}>
                                {item.title}
                            </TextCustom>
                            {index !== 0 && <div>
                                <TextCustom
                                    type="body_xxl_400"
                                    respText='text-base lg:text-lg'
                                    textColor={`${index === 1 ? "text-white " : "text-black"} flex justify-center items-center gap-2`}
                                > {item.text}
                                    <TextCustom
                                        type="span"
                                        classname={`text-base lg:text-xl`}
                                        bgColor={`${index === 1 ? "" : "bg-black px-3 py-1 rounded"}`}
                                        textColor={`${index === 1 ? "text-orange-warning" : "text-[#FCC900]"}`}>{item.span}
                                    </TextCustom>
                                </TextCustom>
                            </div>}
                            {index === 0 && <div>
                                <CountdownList data={countdownData} />
                            </div>}
                            <Button
                                typeButton="textIcon"
                                iconSize='1.2rem'
                                classname={`xl:w-5/12 mx-auto mt-3 cursor-pointer ${index === 1 ? "mt-6" : ""}`}
                                bgColor="bg-white"
                                textColor="text-green-success"
                                textType='body_sm_500'
                                respText='text-sm'
                                label='Shop Now'
                                icon={BsArrowRight}
                                justify='justify-center w-full'
                                padding='px-8 py-3.5'
                                reverse={true}
                            />
                        </FlexStart>
                    </div >
                ))}
            </FlexCenter >
        </>
    )
}

export default BannerSmall