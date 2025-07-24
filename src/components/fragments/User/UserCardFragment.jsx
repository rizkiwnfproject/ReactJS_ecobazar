import TextCustom from '../../elements/Text/Text'
import Card from '../../elements/Card/Card'
import { FlexCenter, FlexStart } from '../../elements/Flex/Flex'
import ImageCustom from '../../elements/Image/Image'
import Button from '../../elements/Button/Button'
import InputFormFragment from '../Input/InputFormFragment'
import { DropdownCustom } from '../../elements/Dropdown/Dropdown'
import { useState } from 'react'



const UserCardFragment = ({ classname, type, title }) => {
    return (
        <Card type="flexStart" hover={false} classname={`flex-col justify-between text-left`} padding="" gap="">
            <div className="border-b border-b-gray-100 p-5">
                <TextCustom type="body_xl_500" classname="">{title}</TextCustom>
            </div>
            <CardNavigation classname={classname} type={type} />
        </Card>
    )
}

const CardNavigation = ({ type }) => {
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    if (type === "profile") {
        return (
            <>
                <div className="p-5">
                    <FlexCenter classname="flex-col-reverse xl:flex-row" gap='gap-5 xl:gap-[112px]'>
                        <FlexStart classname='w-full xl:w-[512px] flex-col' gap='gap-4'>
                            <InputFormFragment label="first name" type="text" name="first_name" placeholder="John" />
                            <InputFormFragment label="last name" type="text" name="last_name" placeholder="Doe" />
                            <InputFormFragment label="email" type="email" name="email" placeholder="example@gmail.com" />
                            <InputFormFragment label="phone number" type="number" name="phone_number" placeholder="625894756122" />
                            <Button classname="w-1/3 text-white font-medium text-sm">save changes</Button>
                        </FlexStart>
                        <FlexCenter classname="flex-col justify-center" gap='gap-4'>
                            <ImageCustom path="users" image="image_4" alt="user" />
                            <Button typeButton='buttonBasic' classname="" padding='py-6' textType='body_sm_500' textColor='text-white' label='save changes' />
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
                        <FlexStart classname='flex-col xl:flex-row'>
                            <InputFormFragment label="first name" type="text" name="first_name" placeholder="John" />
                            <InputFormFragment label="last name" type="text" name="last_name" placeholder="Doe" />
                            <InputFormFragment label="company name" span="(optional)" type="text" name="company_name" placeholder="Microsoft" />
                        </FlexStart>
                        <InputFormFragment label="Street Address" type="text" name="address" placeholder="4140 Par|" />
                        <FlexCenter classname='flex-col xl:flex-row'>
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
                        <FlexStart classname='flex-col lg:flex-row'>
                            <InputFormFragment label="email" type="email" name="email" placeholder="example@gmail.com" />
                            <InputFormFragment label="phone number" type="number" name="phone_number" placeholder="625894756122" />
                        </FlexStart>
                        <Button typeButton='buttonBasic' textColor='text-white' textType='body_sm_500' classname="md:w-3/5 lg:w-1/3 xl:w-1/4" label="save changes"/>
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
                        <FlexStart classname='flex-col lg:flex-row'>
                            <InputFormFragment label="New Password" type="password" name="password" placeholder="Password" />
                            <InputFormFragment label="Confirm Password" type="password" name="password" placeholder="Password" />
                        </FlexStart>
                        <Button typeButton='buttonBasic' textColor='text-white' textType='body_sm_500' classname="md:w-3/5 lg:w-1/3 xl:w-1/4" label='Change Password'/>
                    </FlexStart>
                </div>
            </>
        )
    }
}

export default UserCardFragment