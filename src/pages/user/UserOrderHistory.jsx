import TableNavigation from "../../components/fragments/User/TableNavigation"
import UserTableFragment from "../../components/fragments/User/UserTableFragment"
import UserSection from "../../components/sections/User/UserSection"

const UserOrderHistory = () => {
  return (
    <UserSection >
      <UserTableFragment>
        <TableNavigation  type="history" title="Order History"  />
      </UserTableFragment>
    </UserSection>
  )
}

export default UserOrderHistory