const FooterFragment = (props) => {
    const { children, classname, padding = "py-15" } = props
    return (
        <>
            <div className={`${classname} ${padding}`}>
                <div className="max-w-10/12 mx-auto">
                    {children}
                </div>
            </div>
        </>
    )
}

export default FooterFragment