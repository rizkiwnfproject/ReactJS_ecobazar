import { FlexCenter, FlexStart } from '../../elements/Flex/Flex'
import InputFormFragment from '../../fragments/Input/InputFormFragment'
import { DropdownCustom } from '../../elements/Dropdown/Dropdown'
import Button from '../../elements/Button/Button'
import InputCustom from '../../elements/Input/Input'
import TextCustom from '../../elements/Text/Text'
import Card from '../../elements/Card/Card'
import { Link } from 'react-router'
import ImageCustom from '../../elements/Image/Image'
import { useState } from 'react'


const CheckoutFragment = () => {
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")

    return (
        <>
            <div className="grid md:grid-cols-10 gap-5">
                <FlexStart classname='col-span-5 lg:col-span-6 xl:col-span-7 flex-col'>
                    <div className="">
                        <div className="pb-5 md:pb-10 border-b border-b-gray-100">
                            <TextCustom type='body_xxl_500' respText='text-xl' classname='mb-5'>
                                Billing Information
                            </TextCustom>
                            <FlexStart classname='w-full flex-col' gap='gap-4'>
                                <FlexStart classname='flex-col xl:flex-row'>
                                    <InputFormFragment label="first name" type="text" name="first_name" placeholder="John" />
                                    <InputFormFragment label="last name" type="text" name="last_name" placeholder="Doe" />
                                    <InputFormFragment label="company name" span="(optional)" type="text" name="company_name" placeholder="Microsoft" />
                                </FlexStart>
                                <InputFormFragment label="Street Address" type="text" name="address" placeholder="4140 Par|" />
                                <FlexCenter classname='flex-col lg:flex-row'>
                                    <DropdownCustom
                                        label="Country / Region"
                                        options={["United States", "United Kingdom", "Indonesia", "Singapore"]}
                                        selected={country}
                                        onSelect={setCountry}
                                        placeholder="Region"
                                    />
                                    <DropdownCustom
                                        label="States"
                                        options={["Washington DC", "Los Angeles", "Jakarta", "Mumbai"]}
                                        selected={state}
                                        onSelect={setState}
                                        placeholder="State"
                                    />
                                    <InputFormFragment label="ZIP code" type="number" name="zip" placeholder="20033" />
                                </FlexCenter>
                                <FlexStart classname='flex-col lg:flex-row'>
                                    <InputFormFragment label="email" type="email" name="email" placeholder="example@gmail.com" />
                                    <InputFormFragment label="phone number" type="number" name="phone_number" placeholder="625894756122" />
                                </FlexStart>
                                <InputCustom type='checkbox' padding='' label='Ship to a different address' />
                            </FlexStart>
                        </div>
                        <div className="pt-5 md:pt-10">
                            <TextCustom type='body_xxl_500' respText='text-xl' classname='mb-5'>
                                Additional Info
                            </TextCustom>
                            <FlexStart classname='flex-col'>
                                <TextCustom type='body_sm_400'>Order Notes (Optional)</TextCustom>
                                <InputCustom type='textarea' name='additional-info' placeholder='Notes about your order, e.g. special notes for delivery' />
                            </FlexStart>
                        </div>
                    </div>
                </FlexStart>
                <div className="col-span-5 lg:col-span-4 xl:col-span-3">
                    <Card hover={false} type="flexStart" classname="flex-col" padding="px-3 py-5" gap="gap-0">
                        <FlexStart classname='flex-col pb-7'>
                            <TextCustom type="body_xl_500" respText='text-lg' classname="pb-4" >Order Summery</TextCustom>
                            <FlexStart classname='flex-col'>
                                <div className='grid grid-cols-5 items-center'>
                                    <FlexCenter classname='col-span-3'>
                                        <ImageCustom path='products' image='image_1' classname='w-15 h-15' />
                                        <TextCustom type='body_sm_400' respText='text-sm' classname='max-w-15 flex-wrap'>Green Capsicum</TextCustom>
                                    </FlexCenter>
                                    <TextCustom respText='text-sm' type='body_sm_400' classname='flex justify-center'>x 5</TextCustom>
                                    <TextCustom respText='text-sm' type="body_sm_500" classname='flex justify-end'>$70.00</TextCustom>
                                </div>
                            </FlexStart>
                            <FlexStart classname='flex-col'>
                                <FlexCenter classname="justify-between border-b border-b-gray-100 py-3">
                                    <TextCustom type="body_sm_400" respText='text-sm' textColor="text-gray-800">sub total: </TextCustom>
                                    <TextCustom type="body_sm_500" respText='text-sm'>$70.00</TextCustom>
                                </FlexCenter>
                                <FlexCenter classname="justify-between border-b border-b-gray-100 py-3">
                                    <TextCustom type="body_sm_400" respText='text-sm' textColor="text-gray-800">Shipping: </TextCustom>
                                    <TextCustom type="body_sm_500" respText='text-sm'>Free</TextCustom>
                                </FlexCenter>
                                <FlexCenter classname="justify-between py-3">
                                    <TextCustom type="body_sm_400" respText='text-sm' textColor="text-gray-800">Total: </TextCustom>
                                    <TextCustom type="body_sm_500" respText='text-sm'>$70.00</TextCustom>
                                </FlexCenter>
                            </FlexStart>
                            <TextCustom type="body_xl_500" respText='text-lg' classname="pb-4">Payment Method</TextCustom>
                            <FlexStart classname='flex-col' gap='gap-1'>
                                <InputCustom type='radio' respText="text-sm" label='Cash on Delivery' />
                                <InputCustom type='radio' respText="text-sm" label='Paypal' />
                                <InputCustom type='radio' respText="text-sm" label='Amazon Pay' />
                            </FlexStart>
                        </FlexStart>
                        <Link to="">
                            <Button typeButton="buttonBasic" padding="py-6" classname="w-full" textColor="text-white" label="Place Order" />
                        </Link>
                    </Card>
                </div>
            </div >
        </>
    )
}

export default CheckoutFragment