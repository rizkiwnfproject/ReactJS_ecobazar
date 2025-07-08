import React from 'react'
import UserSection from '../../components/sections/User/UserSection'
import UserCardFragment from '../../components/fragments/User/UserCardFragment'
import { FlexStart } from '../../components/elements/Flex/Flex'

const UserSettings = () => {
    return (
        <>
            <UserSection>
                <FlexStart classname="flex-col" gap="gap-5">
                    <UserCardFragment type="profile" classname="" title="Account Settings" />
                    <UserCardFragment type="billing" classname="" title="Billing Address" />
                    <UserCardFragment type="password" classname="" title="Change Password" />
                </FlexStart>
            </UserSection>
        </>
    )
}

export default UserSettings