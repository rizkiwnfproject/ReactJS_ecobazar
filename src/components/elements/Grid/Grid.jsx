const Grid = ({
    children,
    gap = "gap-2",
    cols,
    classname
}) => {
    return (
        <>
            <div className={`grid ${cols} items-center ${gap} ${classname}`}>
                {children}
            </div>
        </>
    )
}

export default Grid