
const UserSection = ({ children, classname, padding }) => {
    return (
        <div className={`${classname} ${padding}`}>
            {children}
        </div>
    )
}


export default UserSection