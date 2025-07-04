import { useRef } from 'react'
import Card from '../../elements/Card/Card'
import TextCustom from '../../elements/Text/Text'
import { categoriesData, productsData } from '../../../constants/Constant'
import { BsArrowRight, BsArrowLeft, BsEye, BsStarFill, BsStar } from "react-icons/bs";
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Button from "../../elements/Button/Button";
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import SwiperCustom from "../../elements/Swiper/Swiper";
import { HiOutlineHeart, HiOutlineShoppingBag } from 'react-icons/hi2';
import ImageCustom from '../../elements/Image/Image';
import Rating from '../../elements/Rating/Rating';
import Grid from '../../elements/Grid/Grid';

const ProductFragment = (props) => {
  const { children, classname } = props
  return (
    <>
      <div className={`${classname}`}>
        {children}
      </div>
    </>
  )
}

const ProductCategories = (props) => {
  const {
    width,
    classname,
    gap,
  } = props
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <TextCustom type="heading_3_600" classname="w-full text-center mb-10">Top Category</TextCustom>
      <Button ref={prevRef} color="bg-white" classname="absolute left-0 top-1/2 -translate-y-1/2 z-10 border border-gray-100 shadow"                 >
        <BsArrowLeft />
      </Button>
      <Button ref={nextRef} color="bg-white" classname="absolute right-0 top-1/2 -translate-y-1/2 z-10 border border-gray-100 shadow">
        <BsArrowRight />
      </Button>
      <FlexStart classname=" max-w-7xl mx-auto" gap="gap-0">
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
              <Card type="center" gap={gap} classname={classname}>
                <img
                  src={`assets/images/categories/${data.image}.png`}
                  alt={data.name}
                  className={width}
                />
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

const ProductFeature = () => {
  return (
    <>
      <TextCustom type="heading_3_600" classname="w-full text-center mb-10">Featured Products</TextCustom>
      <SwiperCustom
        swiperProps={{
          spaceBetween: 0,
          slidesPerView: 1,
          loop: true,
          breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }
        }}
      >
        {productsData.slice(0, 10).map((data, index) => (
          <SwiperSlide key={index} className="py-3 pl-2">
            <Card type="start" key={index} classname="h-[339px] max-w-[240px] flex-col justify-start">
              <ImageCustom
                path="products"
                image={data.image}
                name={data.name}
                classname='w-[246px] h-[246px]' />
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
                <Button color="bg-gray-50" hover={true}>
                  <HiOutlineShoppingBag size={"1.5rem"} />
                </Button>
              </FlexCenter>
            </Card>
          </SwiperSlide>
        ))}
      </SwiperCustom>

    </>
  )
}

const ProductFeatureGroup = (props) => {
  const { limit, title, category } = props
  const products = productsData
    .filter(item => item.category === category)
    .slice(0, limit)

  return (
    <FlexStart classname="flex-col" gap="gap-4">
      <TextCustom type="body_lg_600" textColor="text-gray-800">{title}</TextCustom>
      {products.map((item, idx) => (
        <Card key={idx} type="center" padding="p-4" classname="rounded-lg hover:border-green-success hover:scale-101 hover:drop-shadow-green-success hover:shadow-lg transition-all duration-300">
          <img src={`assets/images/products/${item.image}.png`} alt={item.name} className="w-16 h-16 object-cover" />
          <div className="flex flex-col">
            <h5 className="text-sm text-gray-700 font-medium">{item.name}</h5>
            <p className="text-sm font-semibold text-gray-900">${item.price}</p>
            <Rating rate={item.rate} />
          </div>
        </Card>
      ))}
    </FlexStart>
  )
}

const ProductDeal = (props) => {
  const {children} = props
  const hotDeals = productsData.filter(item => item.category === "hot_deals");
  console.log(hotDeals)
  return (
    <>
      <Grid cols="grid-cols-4 pl-2 mt-3" gap="gap-6">
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

const ProductNewest = () => {
  return (
    <>
      <FlexCenter classname=" w-full justify-between mb-10">
        <TextCustom type="heading_3_600" classname="w-full">Newest Products</TextCustom>
        <FlexCenter classname="text-green-success font-medium w-28 capitalize">
          view all
          <BsArrowRight />
        </FlexCenter>
      </FlexCenter>
      <FlexStart classname="flex-wrap justify-between">
        {productsData.filter(data => data.new === false).splice(0, 5).map((data, index) => (
          <Card type="start" key={index} classname="group relative h-[339px] max-w-[240px] flex-col justify-start">
            <ImageCustom
              path="products"
              image={data.image}
              name={data.name}
              classname='w-[246px] h-[246px]' />
            <FlexCenter classname="justify-between px-3">
              <FlexStart classname="flex-col" gap="gap-1">
                <TextCustom type="body_sm_400" textColor="text-gray-700">{data.name}</TextCustom>
                <TextCustom type="body_md_500">{data.price}</TextCustom>
                <Rating rate={data.rate} />
              </FlexStart>
              <Button color="bg-gray-50" hover={true}>
                <HiOutlineShoppingBag size={"1.5rem"} />
              </Button>
              <div className="absolute top-3 right-3 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button color="bg-white" classname='border border-gray-100' hover={true}>
                  <HiOutlineHeart size={"1.5rem"} />
                </Button>
                <Button color="bg-white" classname='border border-gray-100' hover={true}>
                  <BsEye size={"1.5rem"} />
                </Button>
              </div>
            </FlexCenter>
          </Card>
        ))}
      </FlexStart>
    </>
  )
}

ProductFragment.ProductCategories = ProductCategories
ProductFragment.ProductFeature = ProductFeature
ProductFragment.ProductDeal = ProductDeal
ProductFragment.ProductNewest = ProductNewest
export default ProductFragment