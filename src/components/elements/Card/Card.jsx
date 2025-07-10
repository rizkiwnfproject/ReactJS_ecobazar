import { FlexCenter, FlexStart } from "../Flex/Flex"

const Card = ({
  children,
  classname,
  gap,
  type,
  padding = "pt-1", 
  rounded = "rounded-md",
  shadow
}) => {
  if (type === "start") {
    return (
      <>
        <FlexStart classname={`${classname} ${gap} ${padding} bg-white border border-gray-100 ${rounded} hover:border-green-success hover:scale-101  hover:drop-shadow-green-success hover:shadow-md transition-all duration-300`}>
          {children}
        </FlexStart>
      </>
    )
  }
  else if (type === "center") {
    return (
      <>
        <FlexCenter classname={`${classname} ${gap} border border-gray-100 ${rounded} ${padding} hover:border-green-success hover:scale-101  hover:drop-shadow-green-success hover:shadow-md transition-all duration-300`}>
          {children}
        </FlexCenter>
      </>
    )
  } else if (type === "center_basic") {
    return (
      <>
        <FlexCenter classname={`${classname} ${gap} border border-gray-100 ${rounded} ${padding} ${shadow}`}>
          {children}
        </FlexCenter>
      </>
    )
  } else if (type === "start_basic") {
    return (
      <>
        <FlexStart classname={`${classname} ${gap} border border-gray-100 ${rounded} ${padding} ${shadow}`}>
          {children}
        </FlexStart>
      </>
    )
  }
}

export default Card