import { FlexCenter, FlexStart } from "../Flex/Flex"

const Card = ({
  children,
  classname = "",
  gap = "",
  type = "",
  padding = "pt-1",
  rounded = "rounded-md",
  shadow = "",
  hover = true
}) => {
  if (type === "flexStart") {
    return (
      <>
        <FlexStart classname={`${classname} ${padding} bg-white border border-gray-100 ${rounded} ${shadow} ${hover ? "hover:border-green-success hover:scale-101  hover:drop-shadow-green-success hover:shadow-md transition-all duration-300" : ""}`} gap={gap}>
          {children}
        </FlexStart>
      </>
    )
  }
  else if (type === "flexCenter") {
    return (
      <>
        <FlexCenter classname={`${classname} ${padding} bg-white border border-gray-100 ${rounded} ${hover ? "hover:border-green-success hover:scale-101  hover:drop-shadow-green-success hover:shadow-md transition-all duration-300" : ""}`} gap={gap}>
          {children}
        </FlexCenter>
      </>
    )
  }
}

export default Card