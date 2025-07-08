
const UserSection = ({ children, classname }) => {
    return (
        <div className={`col-span-3 ${classname}`}>
            {children}
        </div>
    )
}


export default UserSection