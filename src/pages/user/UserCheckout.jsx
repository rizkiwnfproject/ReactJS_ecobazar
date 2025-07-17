import React, { useState } from 'react'
import SectionWrapper from '../../components/fragments/Wrapper/Wrapper'
import { FlexCenter, FlexStart } from '../../components/elements/Flex/Flex'
import InputFormFragment from '../../components/fragments/Input/InputFormFragment'
import { DropdownCustom } from '../../components/elements/Dropdown/Dropdown'
import Button from '../../components/elements/Button/Button'
import InputCustom from '../../components/elements/Input/Input'
import TextCustom from '../../components/elements/Text/Text'
import Card from '../../components/elements/Card/Card'
import { Link } from 'react-router'
import ImageCustom from '../../components/elements/Image/Image'

const UserCheckout = () => {
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    return (
        <>
            <SectionWrapper>
                <div className="grid grid-cols-10 gap-5">
                    <FlexStart classname='col-span-7 flex-col'>
                        <div className="">
                            <div className="pb-10 border-b border-b-gray-100">
                                <TextCustom type='body_xxl_500' classname='mb-5'>
                                    Billing Information
                                </TextCustom>
                                <FlexStart classname='w-full flex-col' gap='gap-4'>
                                    <FlexStart>
                                        <InputFormFragment label="first name" type="text" name="first_name" placeholder="John" />
                                        <InputFormFragment label="last name" type="text" name="last_name" placeholder="Doe" />
                                        <InputFormFragment label="company name" span="(optional)" type="text" name="company_name" placeholder="Microsoft" />
                                    </FlexStart>
                                    <InputFormFragment label="Street Address" type="text" name="address" placeholder="4140 Par|" />
                                    <FlexCenter>
                                        <DropdownCustom
                                            label="Country / Region"
                                            options={["United States", "United Kingdom", "Indonesia", "Singapore"]}
                                            selected={country}
                                            onSelect={setCountry}
                                            placeholder="Choose Region"
                                        />
                                        <DropdownCustom
                                            label="States"
                                            options={["Washington DC", "Los Angeles", "Jakarta", "Mumbai"]}
                                            selected={state}
                                            onSelect={setState}
                                            placeholder="Choose State"
                                        />
                                        <InputFormFragment label="ZIP code" type="number" name="zip" placeholder="20033" />
                                    </FlexCenter>
                                    <FlexStart>
                                        <InputFormFragment label="email" type="email" name="email" placeholder="example@gmail.com" />
                                        <InputFormFragment label="phone number" type="number" name="phone_number" placeholder="625894756122" />
                                    </FlexStart>
                                    <InputCustom type='checkbox' padding='' label='Ship to a different address' />
                                </FlexStart>
                            </div>
                            <div className="pt-10">
                                <TextCustom type='body_xxl_500' classname='mb-5'>
                                    Additional Info
                                </TextCustom>
                                <FlexStart classname='flex-col'>
                                    <TextCustom type='body_sm_400'>Order Notes (Optional)</TextCustom>
                                    <InputCustom type='textarea' name='additional-info' placeholder='Notes about your order, e.g. special notes for delivery' />
                                </FlexStart>
                            </div>
                        </div>
                    </FlexStart>
                    <div className="col-span-3">
                        <Card hover={false} type="flexStart" classname="flex-col" padding="px-3 py-5" gap="gap-0">
                            <FlexStart classname='flex-col pb-7'>
                                <TextCustom type="body_xl_500" classname="pb-4" >Order Summery</TextCustom>
                                <FlexStart classname='flex-col'>
                                    <FlexCenter classname='justify-between'>
                                        <FlexCenter>
                                            <ImageCustom path='products' image='image_1' classname='w-15 h-15' />
                                            <TextCustom type='body_sm_400'>Green Capsicum <span className='lowercase'>x5</span></TextCustom>
                                        </FlexCenter>
                                        <TextCustom type="body_sm_500">$70.00</TextCustom>
                                    </FlexCenter>
                                    <FlexCenter classname='justify-between'>
                                        <FlexCenter>
                                            <ImageCustom path='products' image='image_2' classname='w-15 h-15' />
                                            <TextCustom type='body_sm_400'>Red Capsicum <span className='lowercase'>x1</span></TextCustom>
                                        </FlexCenter>
                                        <TextCustom type="body_sm_500">$14.00</TextCustom>
                                    </FlexCenter>
                                </FlexStart>
                                <FlexStart classname='flex-col'>
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
                                </FlexStart>
                                <TextCustom type="body_xl_500" classname="pb-4">Payment Method</TextCustom>
                                <FlexStart classname='flex-col' gap='gap-1'>
                                    <InputCustom type='radio' label='Cash on Delivery' />
                                    <InputCustom type='radio' label='Paypal' />
                                    <InputCustom type='radio' label='Amazon Pay' />
                                </FlexStart>
                            </FlexStart>
                            <Link to="">
                                <Button typeButton="buttonBasic" padding="py-6" classname="w-full" textColor="text-white" label="Place Order" />
                            </Link>
                        </Card>
                    </div>
                </div >
            </SectionWrapper >
        </>
    )
}

export default UserCheckout