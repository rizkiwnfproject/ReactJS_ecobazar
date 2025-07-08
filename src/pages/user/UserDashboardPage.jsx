import { FlexStart } from '../../components/elements/Flex/Flex'
import UserBillingFragment from '../../components/fragments/User/UserBillingFragment'
import UserProfileFragment from '../../components/fragments/User/UserProfileFragment'
import UserTableFragment from '../../components/fragments/User/UserTableFragment'
import UserSection from '../../components/sections/User/UserSection'

const UserDashboardPage = () => {
  return (
    <UserSection>
      <FlexStart gap="gap-6">
        <UserProfileFragment type="dashboard" />
        <UserBillingFragment type="dashboard" />
      </FlexStart>
      <UserTableFragment type="dashboard" title="Recent Order History" classname="mt-6"/>
    </UserSection>
  )
}

export default UserDashboardPage