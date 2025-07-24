import { HiOutlineX } from "react-icons/hi";
import Button from "../../elements/Button/Button";
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import ImageCustom from "../../elements/Image/Image";
import TextCustom from "../../elements/Text/Text";
import UserSection from "../../sections/User/UserSection"
import { LuFacebook, LuTwitter } from "react-icons/lu";
import { FaInstagram, FaPinterestP } from "react-icons/fa6";
import Card from "../../elements/Card/Card";

const WishlistFragment = () => {
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
        <>
            <TextCustom type="body_xxl_600" classname="text-center pb-8" >My Wishlist</TextCustom>
            {/* Desktop - Table layout */}
            <div className="border rounded-lg border-gray-100 overflow-hidden hidden lg:block">
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
                                        <TextCustom type="body_sm_400" textColor="text-green-success-dark" classname="w-3/4 xl:w-3/7 bg-[rgba(0,178,7,0.2)] px-3 py-1 rounded">In Stock</TextCustom>
                                    ) : (
                                        <TextCustom type="body_sm_400" textColor="text-red-error" classname="xl:w-3/5 bg-[rgba(234,75,72,0.2)] px-3 py-1 rounded">Out of Stock</TextCustom>
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
            </div>

            {/* Mobile & Tablet - Card layout */}
            <div className="flex flex-col gap-4 lg:hidden">
                {wishlistData.map((item, index) => (
                    <Card type="flexStart" key={index} classname="p-4">
                        <div className="flex items-center gap-4 md:gap-10">
                            <ImageCustom
                                path="products"
                                image={item.image}
                                name={item.name}
                                classname="w-[100px] md:w-[150px] h-[100px] md:h-[150px] object-cover rounded"
                            />
                            <div className="flex flex-col gap-2 w-full">
                                <TextCustom type="body_sm_500">{item.name}</TextCustom>
                                <div className="text-sm text-gray-500">Price</div>
                                <FlexCenter gap="gap-2">
                                    <TextCustom type="body_md_500">${item.price.toFixed(2)}</TextCustom>
                                    {item.priceOld && (
                                        <TextCustom
                                            type="body_md_400"
                                            textColor="text-gray-400"
                                            classname="line-through"
                                        >
                                            ${item.priceOld.toFixed(2)}
                                        </TextCustom>
                                    )}
                                </FlexCenter>

                                <div className="text-sm text-gray-500">Stock</div>
                                {item.stock ? (
                                    <TextCustom
                                        type="body_sm_400"
                                        textColor="text-green-success-dark"
                                        classname="w-fit bg-[rgba(0,178,7,0.2)] px-3 py-1 rounded"
                                    >
                                        In Stock
                                    </TextCustom>
                                ) : (
                                    <TextCustom
                                        type="body_sm_400"
                                        textColor="text-red-error"
                                        classname="w-fit bg-[rgba(234,75,72,0.2)] px-3 py-1 rounded"
                                    >
                                        Out of Stock
                                    </TextCustom>
                                )}

                                <div className="flex justify-between pt-2">
                                    <Button
                                        typeButton="buttonBasic"
                                        bgColor={item.stock ? "bg-green-success" : "bg-gray-50"}
                                        textColor={item.stock ? "text-white" : "text-gray-400"}
                                        padding="px-5 py-2"
                                        shadow=""
                                        classname=""
                                        textType="body_sm_600"
                                        label="Add to Cart"
                                        rounded="rounded-lg"
                                    />
                                    <Button
                                        typeButton="icon"
                                        bgColor="hover:bg-red-error"
                                        padding=""
                                        classname="border border-gray-50"
                                        textColor="text-gray-400 hover:text-white"
                                        icon={HiOutlineX}
                                        iconSize="18px"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}

                {/* Share Buttons */}
                <div className="px-2 pt-2">
                    <FlexCenter gap="gap-2">
                        <TextCustom type="body_sm_400">Share:</TextCustom>
                        <Button typeButton="icon" bgColor="" padding="" icon={LuFacebook} iconSize="22px" />
                        <Button typeButton="icon" bgColor="" padding="" icon={LuTwitter} iconSize="22px" />
                        <Button typeButton="icon" bgColor="" padding="" icon={FaPinterestP} iconSize="22px" />
                        <Button typeButton="icon" bgColor="" padding="" icon={FaInstagram} iconSize="22px" />
                    </FlexCenter>
                </div>
            </div>
        </>
    )
}

export default WishlistFragment