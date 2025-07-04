import { FlexCenter, FlexStart } from "../Flex/Flex"

const Card = (props) => {
  const {
    children,
    classname,
    gap,
    type,
    padding = "pt-1"
  } = props
  if (type === "start") {
    return (
      <>
        <FlexStart classname={`${classname} ${gap} ${padding} bg-white border border-gray-100 rounded-md hover:border-green-success hover:scale-101  hover:drop-shadow-green-success hover:shadow-md transition-all duration-300`}>
          {children}
        </FlexStart>
      </>
    )
  }
  else if (type === "center") {
    return (
      <>
        <FlexCenter classname={`${classname} ${gap} border border-gray-100 rounded-md ${padding} hover:border-green-success hover:scale-101  hover:drop-shadow-green-success hover:shadow-md transition-all duration-300`}>
          {children}
        </FlexCenter>
      </>
    )
  }
}

export default Card