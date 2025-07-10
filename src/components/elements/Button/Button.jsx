import { BsArrowRight } from "react-icons/bs";

const Button = ({
    children,
    classname,
    category,
    rounded = "rounded-full",
    color = "bg-green-success",
    onClick = () => { },
    type = "button",
    ref,
    hover = false,
    padding = "p-3",
    shadow = "shadow-md"
}) => {
    if (category === "input") {
        return (
            <button className={`absolute top-0 right-0 ${classname} h-full ${color} text-white font-semibold capitalize`} type={type} onClick={onClick}>{children}</button>
        )
    } else if (category === "shop") {
        return (
            <button className={`${classname} ${color} flex justify-center items-center gap-2 font-semibold rounded-full py-4 px-8`}>
                <h1 className="text-sm capitalize">{children}</h1>
                <BsArrowRight size={"1.2rem"} />
            </button>
        )
    } else {
        return (
            <button ref={ref} className={`${classname} ${color} ${rounded} ${padding} ${shadow} ${hover === true ? "hover:text-white hover:bg-green-success hover:drop-shadow-green-success hover:shadow-lg transition-all duration-300" : ""}`} onClick={onClick}>
                {children}
            </button>
        )
    }
};



export default Button;