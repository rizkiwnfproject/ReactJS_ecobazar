import Card from "../../elements/Card/Card"

const UserTableFragment = ({ children, classname }) => {
    return (
        <>
            <Card type="flexStart" hover={false} classname={`flex-col justify-between text-left ${classname}`} padding="" gap="">
                {children}
            </Card>
        </>
    )
}


export default UserTableFragment