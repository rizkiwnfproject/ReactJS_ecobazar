const NavbarFragment = ({
  children,
  height,
  color = "bg-white border-green-100",
  classname = ""
}) => {
  return (
    <div className={`${classname} min-w-screen border-b ${color}`}>
      <div className={`flex flex-col justify-start w-full mx-auto items-start md:flex-row md:justify-between md:w-7xl md:items-center ${height}`}>
        {children}
      </div>
    </div>
  )
}

export default NavbarFragment