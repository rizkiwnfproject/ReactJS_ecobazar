import { HiOutlineHeart, HiOutlineShoppingBag } from 'react-icons/hi2'
import { productsData } from '../../../constants/Constant'
import Button from '../../elements/Button/Button'
import Card from '../../elements/Card/Card'
import { FlexCenter, FlexStart } from '../../elements/Flex/Flex'
import ImageCustom from '../../elements/Image/Image'
import Rating from '../../elements/Rating/Rating'
import TextCustom from '../../elements/Text/Text'
import ModalCustom from '../../elements/Modal/ModalNewsLetter'
import { Link } from 'react-router'
import { BsEye } from 'react-icons/bs'
import ModalPreviewProduct from '../../elements/Modal/ModalPreviewProduct'
const ShopProductFragment = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-2">
                {productsData.map((data, index) => (
                    <Card type="flexStart" key={index} classname="group relative h-[339px] flex-col justify-start">
                        <Link to="produk-detail">
                            <ImageCustom
                                path="products"
                                image={data.image}
                                name={data.name}
                                classname='h-[246px] flex items-center justify-center object-cover' />
                            <FlexCenter classname="justify-between px-3 py-2">
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
                                <Button typeButton="icon" bgColor="bg-gray-50" hover={true} iconSize="1.5rem" padding="" icon={HiOutlineShoppingBag} />
                            </FlexCenter>
                        </Link>
                        <div className="absolute top-3 right-3  flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button typeButton="icon" bgColor="bg-white" padding="" classname='border border-gray-100' hover={true} iconSize="1.5rem" icon={HiOutlineHeart} />
                            <Button typeButton="icon" bgColor="bg-white" padding="" classname='z-10 border border-gray-100' hover={true} iconSize="1.5rem" icon={BsEye} onClick={() => document.getElementById('preview_product').showModal()} />
                        </div>
                    </Card>
                ))}
            </div>
            <ModalPreviewProduct />
        </>
    )
}

export default ShopProductFragment