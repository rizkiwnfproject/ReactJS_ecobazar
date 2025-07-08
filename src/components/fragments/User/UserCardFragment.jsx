import React from 'react'
import TextCustom from '../../elements/Text/Text'
import Card from '../../elements/Card/Card'
import { FlexCenter, FlexStart } from '../../elements/Flex/Flex'
import ImageCustom from '../../elements/Image/Image'
import Button from '../../elements/Button/Button'
import InputFormFragment from '../Input/InputFormFragment'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'


const UserCardFragment = ({ classname, type, title }) => {
    return (
        <Card type="start_basic" classname={`flex-col justify-between text-left`} padding="" gap="">
            <div className="border-b border-b-gray-100 p-5">
                <TextCustom type="body_xl_500" classname="">{title}</TextCustom>
            </div>
            <CardNavigation classname={classname} type={type} />
        </Card>
    )
}

const CardNavigation = ({ type }) => {
    if (type === "profile") {
        return (
            <>
                <div className="p-5">
                    <FlexCenter classname="" gap='gap-[112px]'>
                        <FlexStart classname='w-[512px] flex-col' gap='gap-4'>
                            <InputFormFragment label="first name" type="text" name="first_name" placeholder="John" />
                            <InputFormFragment label="last name" type="text" name="last_name" placeholder="Doe" />
                            <InputFormFragment label="email" type="email" name="email" placeholder="example@gmail.com" />
                            <InputFormFragment label="phone number" type="number" name="phone_number" placeholder="625894756122" />
                            <Button classname="w-1/3 text-white font-medium text-sm">save changes</Button>
                        </FlexStart>
                        <FlexCenter classname="flex-col justify-center" gap='gap-4'>
                            <ImageCustom path="users" image="image_4" alt="user" />
                            <Button classname="px-10 py-3 cursor-pointer" color="bg-transparent border-2 border-green-success" shadow=''>
                                <TextCustom type="body_sm_600" textColor='text-green-success'>choose image</TextCustom>
                            </Button>
                        </FlexCenter>
                    </FlexCenter>
                </div>
            </>
        )
    } else if (type === "billing") {
        return (
            <>
                <div className="p-5">
                    <FlexStart classname='w-full flex-col' gap='gap-4'>
                        <FlexStart>
                            <InputFormFragment label="first name" type="text" name="first_name" placeholder="John" />
                            <InputFormFragment label="last name" type="text" name="last_name" placeholder="Doe" />
                            <InputFormFragment label="company name" span="(optional)" type="text" name="company_name" placeholder="Microsoft" />
                        </FlexStart>
                        <InputFormFragment label="Street Address" type="text" name="address" placeholder="4140 Par|" />
                        <FlexStart>
                            <InputFormFragment label="Country / Region" type="text" name="country" placeholder="United States" />
                            {/* <div className="">
                                <Dropdown>
                                    <DropdownButton outline>
                                        Options
                                        <ChevronDownIcon />
                                    </DropdownButton>
                                    <DropdownMenu>
                                        <DropdownItem href="/users/1">View</DropdownItem>
                                        <DropdownItem href="/users/1/edit">Edit</DropdownItem>
                                        <DropdownItem onClick={() => ("")}>Delete</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div> */}
                            <InputFormFragment label="States" type="text" name="states" placeholder="Washington DC" />
                            <InputFormFragment label="ZIP code" type="number" name="zip" placeholder="20033" />
                        </FlexStart>
                        <FlexStart>
                            <InputFormFragment label="email" type="email" name="email" placeholder="example@gmail.com" />
                            <InputFormFragment label="phone number" type="number" name="phone_number" placeholder="625894756122" />
                        </FlexStart>
                        <Button classname="w-1/5 text-white font-medium text-sm">save changes</Button>
                    </FlexStart>
                </div>
            </>
        )
    } else if (type === "password") {
        return (
            <>
                <div className="p-5">
                    <FlexStart classname='w-full flex-col' gap='gap-4'>
                        <InputFormFragment label="Current Password" type="password" name="password" placeholder="Password" />
                        <FlexStart>
                            <InputFormFragment label="New Password" type="password" name="password" placeholder="Password" />
                            <InputFormFragment label="Confirm Password" type="password" name="password" placeholder="Password" />
                        </FlexStart>
                        <Button classname="w-1/5 text-white font-medium text-sm">Change Password</Button>
                    </FlexStart>
                </div>
            </>
        )
    }
}

export default UserCardFragment