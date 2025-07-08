import { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const InputCustom = ({
    type,
    placeholder,
    name,
    classname,
    rounded = "rounded-lg",
    ref,
    padding = "px-4 py-3.5", 
    bgColor = "bg-white",
    border = "border border-green-100", 
    focus = "focus:border-green-success focus:outline focus:outline-greensborder-green-success",
    textColor = "text-gray-400"

}) => {
    const [visible, setVisible] = useState(false);

    if (type === "text" || type === "email" || type === "number") {
        return (
            <input className={`w-full ${classname} ${bgColor} ${border} ${focus} ${rounded} ${padding} ${textColor}`} type={type} name={name} placeholder={placeholder} ref={ref} />
        )
    } else if (type === "checkbox") {
        return (
            <input type="checkbox" name={name} className={`${classname} ${padding} bg-white border w-4 h-4 `} />
        )
    } else if (type === "password") {
        return (
            <div className="relative w-full">
                <input
                    type={visible ? "text" : "password"}
                    name={name}
                    placeholder={placeholder}
                    className={`w-full ${classname} ${bgColor} ${border} ${focus} ${rounded} ${padding} ${textColor}`}
                />
                <div
                    className="absolute top-5 right-5 cursor-pointer text-gray-500"
                    onClick={() => setVisible(!visible)}
                >
                    {visible ? <BsEyeSlash /> : <BsEye />}
                </div>
            </div>
        )
    }
}

export default InputCustom