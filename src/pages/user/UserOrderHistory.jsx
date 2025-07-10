import UserTableFragment from "../../components/fragments/User/UserTableFragment"
import UserSection from "../../components/sections/User/UserSection"

const UserOrderHistory = () => {
  return (
    <UserSection padding="pb-15">
      <UserTableFragment type="history" title="Order History" />
    </UserSection>
  )
}

export default UserOrderHistory