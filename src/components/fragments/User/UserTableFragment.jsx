import Card from "../../elements/Card/Card"
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex"
import TableCustom from "../../elements/Table/Table"
import TextCustom from "../../elements/Text/Text"
import { dashboardHistoryOrder, detailOrderItems, historyOrder, tableThead } from "../../../constants/Constant"
import { BsArrowLeft, BsArrowRight, BsDot } from "react-icons/bs"
import Button from "../../elements/Button/Button"
import { Link } from "react-router"
import Grid from "../../elements/Grid/Grid"
import ImageCustom from "../../elements/Image/Image"

const UserTableFragment = ({ type, title, classname }) => {
    return (
        <>
            <Card type="flexStart" hover={false} classname={`flex-col justify-between text-left ${classname}`} padding="" gap="">
                <TableNavigation type={type} title={title} />
            </Card>
        </>
    )
}

const TableNavigation = ({ type, title }) => {
    if (type === "dashboard") {
        return (
            <>
                <FlexCenter classname="w-full justify-between p-3">
                    <TextCustom type="body_xl_600" >{title}</TextCustom>
                    <TextCustom type="body_md_500" textColor="text-green-success"> view all</TextCustom>
                </FlexCenter>
                <TableCustom thead="Order History" data={dashboardHistoryOrder} />
            </>
        )
    } else if (type === "history") {
        return (
            <>
                <TextCustom type="body_xl_600" classname="p-3" >{title}</TextCustom>
                <TableCustom thead="Order History" data={historyOrder} />
                <FlexCenter classname="justify-center">
                    <Button classname="cursor-pointer text-gray-300" shadow="" color="bg-gray-50"><BsArrowLeft /></Button>
                    <FlexCenter gap="">
                        <Button classname="cursor-pointer" shadow="" padding="py-2 px-4"><TextCustom type="body_md_500" textColor="text-white">1</TextCustom></Button>
                        <Button classname="cursor-pointer" shadow="" color="bg-white" padding="py-2 px-4"><TextCustom type="body_md_500">2</TextCustom></Button>
                    </FlexCenter>
                    <Button classname="cursor-pointer border border-gray-50" shadow="" color="bg-white" ><BsArrowRight /></Button>
                </FlexCenter>
            </>
        )
    } else {
        const titleHead = tableThead.filter(item => item.title === "Order Details").flatMap(item => item.element);
        return (
            <>
                <div className="border-b border-b-gray-100">
                    <FlexCenter classname="w-full justify-between p-3">
                        <FlexCenter classname="items-center">
                            <TextCustom type="body_xl_600" >{title}</TextCustom>
                            <BsDot size="1.4rem" />
                            <TextCustom type="body_sm_400" textColor="text-gray-700">April 24, 2021</TextCustom>
                            <BsDot size="1.4rem" />
                            <TextCustom type="body_sm_400" textColor="text-gray-700">3 Products</TextCustom>
                        </FlexCenter>
                        <Link to="/user/order-history"><TextCustom type="body_md_500" textColor="text-green-success">back to list</TextCustom></Link>
                    </FlexCenter>
                </div>
                <div className="">
                    <Grid cols="grid-cols-3" gap="gap-6">
                        <div className="col-span-2">
                            <Card type="start_basic" padding="" classname="h-[280px]">
                                <table className="w-full text-sm text-left">
                                    <thead className="border-b border-b-gray-100">
                                        <tr>
                                            <th className="px-6 py-3 border-r border-gray-100">
                                                <TextCustom type="body_sm_500" textTransform="uppercase" textColor="text-gray-400">Billing Address</TextCustom>
                                            </th>
                                            <th className="px-6 py-3">
                                                <TextCustom type="body_sm_500" textTransform="uppercase" textColor="text-gray-400">Shipping Address</TextCustom>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-6 border-r border-gray-100">
                                                <FlexStart classname="flex-col">
                                                    <FlexStart classname="flex-col">
                                                        <TextCustom type="body_md_500">Dainne Russell</TextCustom>
                                                        <TextCustom type="body_sm_400" textColor="text-gray-600" >4140 Parker Rd. Allentown, New Mexico 31134</TextCustom>
                                                    </FlexStart>
                                                    <FlexStart classname="flex-col mt-6">
                                                        <TextCustom type="body_xs_500" textColor="text-gray-400" textTransform="uppercase">Email</TextCustom>
                                                        <TextCustom type="body_sm_400">dainne.ressell@gmail.com</TextCustom>
                                                    </FlexStart>
                                                    <FlexStart classname="flex-col">
                                                        <TextCustom type="body_xs_500" textColor="text-gray-400" textTransform="uppercase">Phone</TextCustom>
                                                        <TextCustom type="body_sm_400">(671) 555-0110</TextCustom>
                                                    </FlexStart>
                                                </FlexStart>
                                            </td>
                                            <td className="px-6">
                                                <FlexStart classname="flex-col">
                                                    <FlexStart classname="flex-col">
                                                        <TextCustom type="body_md_500">Dainne Russell</TextCustom>
                                                        <TextCustom type="body_sm_400" textColor="text-gray-600" >4140 Parker Rd. Allentown, New Mexico 31134</TextCustom>
                                                    </FlexStart>
                                                    <FlexStart classname="flex-col mt-6">
                                                        <TextCustom type="body_xs_500" textColor="text-gray-400" textTransform="uppercase">Email</TextCustom>
                                                        <TextCustom type="body_sm_400">dainne.ressell@gmail.com</TextCustom>
                                                    </FlexStart>
                                                    <FlexStart classname="flex-col">
                                                        <TextCustom type="body_xs_500" textColor="text-gray-400" textTransform="uppercase">Phone</TextCustom>
                                                        <TextCustom type="body_sm_400">(671) 555-0110</TextCustom>
                                                    </FlexStart>
                                                </FlexStart>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Card>
                        </div>
                        <Card type="start_basic" classname="flex-col h-[280px]">
                            <FlexStart classname="border-b border-b-gray-100 px-5 py-2.5 justify-between">
                                <FlexStart classname="flex-col" gap="gap-0.5">
                                    <TextCustom type="body_sm_500" textTransform="uppercase" textColor="text-gray-400">order id:</TextCustom>
                                    <TextCustom type="body_sm_400">#4152</TextCustom>
                                </FlexStart>
                                <FlexStart classname="flex-col border-l border-l-gray-100 pl-7" gap="gap-0.5">
                                    <TextCustom type="body_sm_500" textTransform="uppercase" textColor="text-gray-400">payment method:</TextCustom>
                                    <TextCustom type="body_sm_400">#4152</TextCustom>
                                </FlexStart>
                            </FlexStart>
                            <div className="px-5">
                                <FlexStart classname="flex-col justify-between">
                                    <FlexCenter classname="justify-between py-3 border-b border-b-gray-100">
                                        <TextCustom type="body_sm_400" textColor="text-gray-600">subtotal</TextCustom>
                                        <TextCustom type="body_sm_500">$365.00</TextCustom>
                                    </FlexCenter>
                                    <FlexCenter classname="justify-between py-3 border-b border-b-gray-100">
                                        <TextCustom type="body_sm_400" textColor="text-gray-600">Discount</TextCustom>
                                        <TextCustom type="body_sm_500">20%</TextCustom>
                                    </FlexCenter>
                                    <FlexCenter classname="justify-between py-3 border-b border-b-gray-100">
                                        <TextCustom type="body_sm_400" textColor="text-gray-600">Shipping</TextCustom>
                                        <TextCustom type="body_sm_500">Free</TextCustom>
                                    </FlexCenter>
                                    <FlexCenter classname="justify-between pb-3">
                                        <TextCustom type="body_lg_400">Total</TextCustom>
                                        <TextCustom type="body_lg_600" textColor="text-green-success-dark">$365.00</TextCustom>
                                    </FlexCenter>
                                </FlexStart>
                            </div>
                        </Card>
                    </Grid >
                </div >

                <div className="">
                    {/* <StepsFragment /> */}
                </div>

                <table className='w-full'>
                    <thead className=''>
                        <tr className='bg-gray-50 uppercase text-sm text-gray-700 '>
                            {titleHead.map((item, index) => (
                                <th key={index} className='px-4 py-3'><TextCustom type="body_sm_500" textColor="text-gray-700" textTransform="uppercase">{item.name}</TextCustom></th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {detailOrderItems.map((item, index) => (
                            <tr key={index} className={`${index === detailOrderItems.length - 1 ? "" : "border-b border-b-gray-100"}`}>
                                <td className="p-4">
                                    <FlexCenter>
                                        <ImageCustom path="products" image={item.image} classname="w-[70px] h-[70px]" />
                                        <TextCustom type="body_sm_400">{item.name}</TextCustom>
                                    </FlexCenter>
                                </td>
                                <td className="p-4"><TextCustom type="body_sm_400">$ {item.price}.00</TextCustom></td>
                                <td className="p-4"><TextCustom type="body_sm_400">x{item.quantity}</TextCustom></td>
                                <td className="p-4"><TextCustom type="body_sm_500">$ {item.subtotal}.00</TextCustom></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </>
        )
    }

}
export default UserTableFragment