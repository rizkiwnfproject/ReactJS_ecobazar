import React from 'react'
import UserSection from '../../components/sections/User/UserSection'
import UserTableFragment from '../../components/fragments/User/UserTableFragment'
import DetailOrderFragment from '../../components/fragments/User/DetailOrderFragment'

const UserOrderDetail = () => {
  return (
    <UserSection padding="pb-15">
      <UserTableFragment>
        <DetailOrderFragment title="Order Details" />
      </UserTableFragment>
    </UserSection>
  )
}

export default UserOrderDetail