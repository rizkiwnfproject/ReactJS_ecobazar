export const FlexCenter = (props) => {
  const { children, gap = "gap-2", classname = ""} = props
  return (
    <div className={`flex ${gap} items-center ${classname}`}>
      {children}
    </div>
  )
}

export const FlexStart = (props) => {
  const { children, gap = "gap-2", classname = ""} = props
  return (
    <div className={`flex ${gap} ${classname}`}>
      {children}
    </div>
  )
}

