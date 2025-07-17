import UserTableFragment from "../../components/fragments/User/UserTableFragment"
import UserSection from "../../components/sections/User/UserSection"

const UserOrderHistory = () => {
  return (
    <UserSection >
      <UserTableFragment type="history" title="Order History" />
    </UserSection>
  )
}

export default UserOrderHistory