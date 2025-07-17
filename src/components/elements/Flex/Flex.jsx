export const FlexCenter = ({
  children,
  gap = "gap-2",
  classname = "",
  justify = "",
  width = "",
  alignItems = "items-center"
}) => {
  return (
    <div className={`flex ${gap} ${alignItems}  ${classname} ${justify} ${width}`}>
      {children}
    </div>
  )
}

export const FlexStart = ({
  children,
  gap = "gap-2",
  classname = "",
  justify = "",
  width = ""
}) => {
  return (
    <div className={`flex ${gap} ${classname} ${justify} ${width}`}>
      {children}
    </div>
  )
}

