const Grid = ({
    children,
    gap = "gap-2",
    cols = "",
    classname = "",
    itemDirection
}) => {
    return (
        <>
            <div className={`grid ${cols} ${itemDirection} ${gap} ${classname}`}>
                {children}
            </div>
        </>
    )
}

export default Grid