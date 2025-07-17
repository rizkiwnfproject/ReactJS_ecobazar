import { HiOutlineX } from "react-icons/hi";
import Button from "../../components/elements/Button/Button";
import { FlexCenter, FlexStart } from "../../components/elements/Flex/Flex";
import ImageCustom from "../../components/elements/Image/Image";
import TextCustom from "../../components/elements/Text/Text";
import { LuFacebook, LuTwitter } from "react-icons/lu";
import { FaInstagram, FaPinterestP } from "react-icons/fa6";
import SectionWrapper from "../../components/fragments/Wrapper/Wrapper";
import Card from "../../components/elements/Card/Card";
import InputCustom from "../../components/elements/Input/Input";
import { Link } from "react-router";

const UserShoppingCart = () => {
    const wishlistData = [
        {
            image: "image_1",
            name: "Green Capsicum",
            price: 14.99,
            priceOld: 20.99,
            stock: true
        },
        {
            image: "image_2",
            name: "Chinese Cabbage",
            price: 45.0,
            priceOld: null,
            stock: true
        },
        {
            image: "image_3",
            name: "Fresh Sujapuri Mango",
            price: 9.0,
            priceOld: null,
            stock: false
        }
    ];
    return (
        <SectionWrapper>
            <TextCustom type="body_xxl_600" classname="text-center pb-8" >My Wishlist</TextCustom>
            <div className="grid grid-cols-8 gap-5">
                <FlexStart gap="gap-5" classname="col-span-6 flex-col">
                    <Card type="flexStart" hover={false} classname="overflow-hidden">
                        <table className="table w-full">
                            <thead>
                                <tr className="text-left border-b text-gray-500 text-sm uppercase ">
                                    <th className="font-medium p-4">Product</th>
                                    <th className="font-medium">Price</th>
                                    <th className="font-medium">Stock Status</th>
                                    <th className="font-medium"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlistData.map((item, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="">
                                            <FlexCenter gap="gap-3">
                                                <ImageCustom
                                                    path="products"
                                                    image={item.image}
                                                    name={item.name}
                                                    classname="w-25 h-25 object-cover"
                                                />
                                                <TextCustom type="body_md_400">{item.name}</TextCustom>
                                            </FlexCenter>
                                        </td>
                                        <td>
                                            <FlexCenter gap="gap-2">
                                                <TextCustom type="body_md_500">${item.price.toFixed(2)}</TextCustom>
                                                {item.priceOld && (
                                                    <TextCustom type="body_md_400" textColor="text-gray-400" classname="line-through">
                                                        ${item.priceOld.toFixed(2)}
                                                    </TextCustom>
                                                )}
                                            </FlexCenter>
                                        </td>
                                        <td>
                                            {item.stock ? (
                                                <TextCustom type="body_sm_400" textColor="text-green-success-dark" classname="w-3/5 bg-[rgba(0,178,7,0.2)] px-3 py-1 rounded">In Stock</TextCustom>
                                            ) : (
                                                <TextCustom type="body_sm_400" textColor="text-red-error" classname="w-6/7 bg-[rgba(234,75,72,0.2)] px-3 py-1 rounded">Out of Stock</TextCustom>
                                            )}
                                        </td>
                                        <td>
                                            <FlexCenter gap="gap-2">
                                                <Button
                                                    typeButton="buttonBasic"
                                                    bgColor={item.stock ? "bg-green-success" : "bg-gray-50"}
                                                    textColor={item.stock ? "text-white" : "text-gray-400"}
                                                    padding="px-5 py-2"
                                                    shadow=""
                                                    classname=""
                                                    textType="body_sm_600"
                                                    label="Add to Cart"
                                                />
                                                <Button typeButton="icon" bgColor="hover:bg-red-error" padding="" classname="border border-gray-50" textColor="text-gray-400 hover:text-white" icon={HiOutlineX} iconSize="18px" />
                                            </FlexCenter>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>
                                        <FlexCenter>
                                            <TextCustom type="body_sm_400">Share:</TextCustom>
                                            <FlexCenter>
                                                <Button
                                                    typeButton="icon"
                                                    hover={true}
                                                    bgColor=''
                                                    shadow=''
                                                    padding=''
                                                    classname=""
                                                    icon={LuFacebook}
                                                    iconSize='22px' />
                                                <Button
                                                    typeButton="icon"
                                                    hover={true}
                                                    bgColor=''
                                                    shadow=''
                                                    padding=''
                                                    classname=""
                                                    icon={LuTwitter}
                                                    iconSize='22px' />
                                                <Button
                                                    typeButton="icon"
                                                    hover={true}
                                                    bgColor=''
                                                    shadow=''
                                                    padding=''
                                                    classname=""
                                                    icon={FaPinterestP}
                                                    iconSize='22px' />
                                                <Button
                                                    typeButton="icon"
                                                    hover={true}
                                                    bgColor=''
                                                    shadow=''
                                                    padding=''
                                                    classname=""
                                                    icon={FaInstagram}
                                                    iconSize='22px' />
                                            </FlexCenter>
                                        </FlexCenter>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                    <Card type="flexCenter" hover={false} padding="px-5 py-5" classname="w-full" gap="gap-5">
                        <TextCustom type="body_xl_500" classname="w-46">Coupon Code</TextCustom>
                        <div className="w-full h-13 relative">
                            <InputCustom classname="px-6 py-3" rounded="rounded-full" type="text" placeholder="Enter code" name="subscribe" />
                            <Button typeButton="input" padding="px-10" height="h-13.5" textType="body_sm_600" bgColor="bg-gray-800" textColor="text-white">Apply Coupon</Button>
                        </div>
                    </Card>
                </FlexStart>
                <Card hover={false} type="flexStart" classname="col-span-2 flex-col max-h-[300px]" padding="px-3 py-5" gap="gap-0">
                    <TextCustom type="body_xl_500" classname="pb-4" >cart total</TextCustom>
                    <FlexCenter classname="justify-between border-b border-b-gray-100 py-3">
                        <TextCustom type="body_sm_400" textColor="text-gray-800">sub total: </TextCustom>
                        <TextCustom type="body_sm_500">$84.00</TextCustom>
                    </FlexCenter>
                    <FlexCenter classname="justify-between border-b border-b-gray-100 py-3">
                        <TextCustom type="body_sm_400" textColor="text-gray-800">Shipping: </TextCustom>
                        <TextCustom type="body_sm_500">Free</TextCustom>
                    </FlexCenter>
                    <FlexCenter classname="justify-between py-3">
                        <TextCustom type="body_sm_400" textColor="text-gray-800">Total: </TextCustom>
                        <TextCustom type="body_sm_500">$84.00</TextCustom>
                    </FlexCenter>
                    <Link to="/user/checkout">
                        <Button typeButton="buttonBasic" padding="py-6" classname="w-full mt-8" textColor="text-white" label="Proceed to checkout" />
                    </Link>
                </Card>

            </div>
        </SectionWrapper>
    )
}

export default UserShoppingCart