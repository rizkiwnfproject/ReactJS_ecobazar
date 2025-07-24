import Card from "../../elements/Card/Card"
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import TextCustom from "../../elements/Text/Text"
import { detailOrderItems, tableThead } from "../../../constants/Constant"
import { BsDot } from "react-icons/bs"
import { Link } from "react-router"
import Grid from "../../elements/Grid/Grid"
import ImageCustom from "../../elements/Image/Image"

const DetailOrderFragment = ({ title }) => {
    const titleHead = tableThead.filter(item => item.title === "Order Details").flatMap(item => item.element);
    return (
        <>
            <div className="border-b border-b-gray-100">
                <FlexCenter classname="w-full justify-between p-3">
                    <FlexCenter alignItems="lg:items-center" classname="flex-col lg:flex-row">
                        <TextCustom type="body_xl_600" respText="text-lg" >{title}</TextCustom>
                        <BsDot size="1.4rem" className="hidden lg:block" />
                        <TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-700">April 24, 2021</TextCustom>
                        <BsDot size="1.4rem" className="hidden lg:block" />
                        <TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-700">3 Products</TextCustom>
                    </FlexCenter>
                    <Link to="/user/order-history"><TextCustom type="body_md_500" textColor="text-green-success">back to list</TextCustom></Link>
                </FlexCenter>
            </div>
            <div className="">
                <Grid cols="xl:grid-cols-3" gap="gap-6" classname="m-5">
                    <div className="xl:col-span-2">
                        <Card type="flexStart" padding="" classname="min-h-[280px]" hover={false}>
                            <div className="grid lg:grid-cols-2 w-full">
                                <div className="">
                                    <div className="title border-b border-b-gray-100 px-6 py-3">
                                        <TextCustom type="body_sm_500" respText="text-sm" textTransform="uppercase" textColor="text-gray-400">Billing Address</TextCustom>
                                    </div>
                                    <div className="field px-6 py-3">
                                        <FlexStart classname="flex-col">
                                            <FlexStart classname="flex-col">
                                                <TextCustom type="body_md_500" respText="text-sm" >Dainne Russell</TextCustom>
                                                <TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-600" >4140 Parker Rd. Allentown, New Mexico 31134</TextCustom>
                                            </FlexStart>
                                            <FlexStart classname="flex-col mt-6">
                                                <TextCustom type="body_xs_500" respText="text-xs" textColor="text-gray-400" textTransform="uppercase">Email</TextCustom>
                                                <TextCustom type="body_sm_400" respText="text-sm">dainne.ressell@gmail.com</TextCustom>
                                            </FlexStart>
                                            <FlexStart classname="flex-col">
                                                <TextCustom type="body_xs_500" respText="text-xs" textColor="text-gray-400" textTransform="uppercase">Phone</TextCustom>
                                                <TextCustom type="body_sm_400" respText="text-sm">(671) 555-0110</TextCustom>
                                            </FlexStart>
                                        </FlexStart>
                                    </div>
                                </div>
                                <div className="lg:border-l border-l-gray-100">
                                    <div className="border-y lg:border-b border-y-gray-100 lg:border-b-gray-100 px-6 py-3">
                                        <TextCustom type="body_sm_500" respText="text-sm" textTransform="uppercase" textColor="text-gray-400">Shipping Address</TextCustom>
                                    </div>
                                    <div className="field px-6 py-3">
                                        <FlexStart classname="flex-col">
                                            <FlexStart classname="flex-col">
                                                <TextCustom type="body_md_500" respText="text-sm" >Dainne Russell</TextCustom>
                                                <TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-600" >4140 Parker Rd. Allentown, New Mexico 31134</TextCustom>
                                            </FlexStart>
                                            <FlexStart classname="flex-col mt-6">
                                                <TextCustom type="body_xs_500" respText="text-xs" textColor="text-gray-400" textTransform="uppercase">Email</TextCustom>
                                                <TextCustom type="body_sm_400" respText="text-sm">dainne.ressell@gmail.com</TextCustom>
                                            </FlexStart>
                                            <FlexStart classname="flex-col">
                                                <TextCustom type="body_xs_500" respText="text-xs" textColor="text-gray-400" textTransform="uppercase">Phone</TextCustom>
                                                <TextCustom type="body_sm_400" respText="text-sm">(671) 555-0110</TextCustom>
                                            </FlexStart>
                                        </FlexStart>
                                    </div>
                                </div>

                            </div>
                        </Card>
                    </div>
                    <Card type="flexStart" padding="" classname="flex-col min-h-[280px] h-auto" hover={false}>
                        <FlexStart classname="border-b border-b-gray-100 px-5 py-2.5 justify-between">
                            <FlexStart classname="flex-col" gap="gap-0.5">
                                <TextCustom type="body_sm_500" respText="text-sm" textTransform="uppercase" textColor="text-gray-400">order id:</TextCustom>
                                <TextCustom type="body_sm_400" respText="text-sm">#4152</TextCustom>
                            </FlexStart>
                            <FlexStart classname="flex-col border-l border-l-gray-100 pl-7" gap="gap-0.5">
                                <TextCustom type="body_sm_500" respText="text-sm" textTransform="uppercase" textColor="text-gray-400">payment method:</TextCustom>
                                <TextCustom type="body_sm_400" respText="text-sm">#4152</TextCustom>
                            </FlexStart>
                        </FlexStart>
                        <div className="px-5">
                            <FlexStart classname="flex-col justify-between">
                                <FlexCenter classname="justify-between py-3 border-b border-b-gray-100">
                                    <TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-600">subtotal</TextCustom>
                                    <TextCustom type="body_sm_500" respText="text-sm">$365.00</TextCustom>
                                </FlexCenter>
                                <FlexCenter classname="justify-between py-3 border-b border-b-gray-100">
                                    <TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-600">Discount</TextCustom>
                                    <TextCustom type="body_sm_500" respText="text-sm">20%</TextCustom>
                                </FlexCenter>
                                <FlexCenter classname="justify-between py-3 border-b border-b-gray-100">
                                    <TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-600">Shipping</TextCustom>
                                    <TextCustom type="body_sm_500" respText="text-sm">Free</TextCustom>
                                </FlexCenter>
                                <FlexCenter classname="justify-between pb-3">
                                    <TextCustom type="body_lg_400" respText="text-sm">Total</TextCustom>
                                    <TextCustom type="body_lg_600" respText="text-sm" textColor="text-green-success-dark">$365.00</TextCustom>
                                </FlexCenter>
                            </FlexStart>
                        </div>
                    </Card>
                </Grid >
            </div >

            <div className="">
                {/* <StepsFragment /> */}
            </div>

            {/* desktop laptop */}
            <FlexStart classname="hidden lg:flex flex-col">
                <div className="grid grid-cols-5 px-4 py-3 border-b border-b-gray-100">
                    {titleHead.map((item, index) => (
                        <div key={index} className={`${index === 0 ? "col-span-2" : "col-span-1"}`}>
                            <TextCustom type="body_sm_500" textColor="text-gray-700" textTransform="uppercase">
                                {item.name}
                            </TextCustom>
                        </div>
                    ))}
                </div>
                <FlexStart>
                    <div className="grid grid-cols-1 w-full ">
                        {detailOrderItems.map((item, index) => (
                            <div key={index} className='px-4 py-3'>
                                <FlexCenter classname="grid grid-cols-5">
                                    <FlexCenter classname="col-span-2">
                                        <ImageCustom path="products" image={item.image} classname="w-[70px] h-[70px]" />
                                        <TextCustom type="body_sm_400">{item.name}</TextCustom>
                                    </FlexCenter>
                                    <TextCustom type="body_sm_400">$ {item.price}.00</TextCustom>
                                    <TextCustom type="body_sm_400">x{item.quantity}</TextCustom>
                                    <TextCustom type="body_sm_500">$ {item.subtotal}.00</TextCustom>
                                </FlexCenter>
                            </div>
                        ))}
                    </div>
                </FlexStart>
            </FlexStart>
            {/* tablet mobile */}
            <FlexStart classname="flex flex-col gap-4 lg:hidden m-3">
                {detailOrderItems.map((item, index) => (
                    <Card type="flexCenter" key={index} padding="p-4" className="">
                        <div className="flex items-center gap-4">
                            <ImageCustom path="products" image={item.image} classname="w-[70px] h-[70px] object-cover" />
                            <div className="flex flex-col gap-2 w-full">
                                <div>
                                    <TextCustom type="body_md_500" respText="text-base" textColor="text-gray-700">{item.name}</TextCustom>
                                </div>
                                <div className="grid grid-cols-3 text-sm gap-y-1">
                                    <TextCustom type="body_sm_400" classname="col-span-2">Harga</TextCustom>
                                    <TextCustom type="body_sm_400">$ {item.price}.00</TextCustom>

                                    <TextCustom type="body_sm_400" classname="col-span-2">Jumlah</TextCustom>
                                    <TextCustom type="body_sm_400">x{item.quantity}</TextCustom>

                                    <TextCustom type="body_sm_400" classname="col-span-2">Subtotal</TextCustom>
                                    <TextCustom type="body_sm_400">$ {item.subtotal}.00</TextCustom>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </FlexStart>

        </>
    )
}

export default DetailOrderFragment