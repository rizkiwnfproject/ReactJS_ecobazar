
const UserSection = ({ children, classname, padding }) => {
    return (
        <div className={`col-span-3 ${classname} ${padding}`}>
            {children}
        </div>
    )
}


export default UserSection