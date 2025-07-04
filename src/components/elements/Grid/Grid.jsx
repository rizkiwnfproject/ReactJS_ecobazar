const Grid = (props) => {
    const { children, gap = "gap-2", cols, classname } = props
    return (
        <>
            <div className={`grid ${cols} items-center ${gap} ${classname}`}>
                {children}
            </div>
        </>
    )
}
 
export default Grid