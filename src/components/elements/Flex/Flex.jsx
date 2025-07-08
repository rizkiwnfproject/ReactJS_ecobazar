export const FlexCenter = ({
  children,
  gap = "gap-2",
  classname
}) => {
  return (
    <div className={`flex ${gap} items-center ${classname}`}>
      {children}
    </div>
  )
}

export const FlexStart = ({
  children,
  gap = "gap-2",
  classname = ""
}) => {
  return (
    <div className={`flex ${gap} ${classname}`}>
      {children}
    </div>
  )
}

