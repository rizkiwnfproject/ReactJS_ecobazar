
const ProductFragment = (props) => {
  const { children, classname } = props
  return (
    <>
      <div data-aos="zoom-in" className={`${classname}`}>
        {children}
      </div>
    </>
  )
}

export default ProductFragment