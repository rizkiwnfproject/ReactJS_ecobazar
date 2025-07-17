import TextCustom from "../Text/Text";
import TextIcon from "../Text/textIcon";

const Button = ({
    children,
    classname = "",
    height = "",
    typeButton = "",
    type = "button",
    rounded = "rounded-full",
    bgColor = "bg-green-success",
    textType = "",
    textColor = "text-gray-900",
    iconType = "",
    iconColor = "",
    onClick = () => { },
    ref,
    hover = false,
    padding = "py-4 px-8",
    shadow = "shadow-md",
    btn = "btn",
    iconSize = "",
    icon: Icon,
    label = "",
    reverse = false,
    justify = "",
    elementHover = "hover:text-white hover:bg-green-success hover:drop-shadow-green-success hover:shadow-lg transition-all duration-300"
}) => {
    if (typeButton === "input") {
        return (
            <button className={`absolute top-0 right-0 ${height} ${classname} ${bgColor} ${rounded} ${padding}`} type={type} onClick={onClick}>
                <TextCustom type={textType} textColor={textColor}>{children}</TextCustom>
            </button>
        )
    } else if (typeButton === "textIcon") {
        return (
            <button className={`${classname} ${bgColor} ${textColor} ${rounded} ${padding}`}>
                <TextIcon
                    justify={justify}
                    type={textType}
                    iconType={iconType}
                    textType={textType}
                    textColor={textColor}
                    iconSize={iconSize}
                    iconColor={iconColor}
                    icon={Icon}
                    text={label}
                    reverse={reverse}
                />
            </button>
        )
    } else if (typeButton === "icon") {
        return (
            <button
                onClick={onClick}
                ref={ref}
                className={`${classname} ${bgColor} ${textColor} ${rounded} ${padding} w-10 h-10 flex justify-center items-center ${hover ? `${elementHover}` : ""}`}>
                <Icon size={iconSize} className="shrink-0" />
            </button>
        )
    } else if (typeButton === "hoverButton") {
        return (
            <button ref={ref} className={`${btn} ${classname} ${bgColor} ${textColor} ${rounded} ${padding} ${shadow} ${hover === true ? `${elementHover}` : ""}`} onClick={onClick}>
                {children}
            </button>
        )
    } else if (typeButton === "buttonBasic") {
        return (
            <button ref={ref} className={`${btn} ${classname} ${bgColor} ${rounded} ${padding} ${shadow}`} onClick={onClick}>
                <TextCustom type={textType} textColor={textColor}>{label}</TextCustom>
            </button>
        )
    }
};



export default Button;