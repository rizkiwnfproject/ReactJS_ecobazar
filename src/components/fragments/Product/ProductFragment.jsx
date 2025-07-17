
const ProductFragment = (props) => {
  const { children, classname } = props
  return (
    <>
      <div className={`${classname}`}>
        {children}
      </div>
    </>
  )
}

export default ProductFragment