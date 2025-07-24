import { FlexStart } from '../../components/elements/Flex/Flex'
import TableNavigation from '../../components/fragments/User/TableNavigation'
import UserBillingFragment from '../../components/fragments/User/UserBillingFragment'
import UserProfileFragment from '../../components/fragments/User/UserProfileFragment'
import UserTableFragment from '../../components/fragments/User/UserTableFragment'
import UserSection from '../../components/sections/User/UserSection'

const UserDashboardPage = () => {
  return (
    <UserSection padding='pb-15'>
      <FlexStart classname='flex-col xl:flex-row' gap="gap-6">
        <UserProfileFragment type="dashboard" />
        <UserBillingFragment type="dashboard" />
      </FlexStart>
      <UserTableFragment classname="mt-6">
        <TableNavigation type="dashboard" title="Recent Order History" />
      </UserTableFragment>
    </UserSection>
  )
}

export default UserDashboardPage