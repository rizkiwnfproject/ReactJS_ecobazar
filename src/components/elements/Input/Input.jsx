import { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FlexCenter } from '../Flex/Flex';
import TextCustom from '../Text/Text';

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
    focus = "focus:border-green-success focus:outline focus:outline-green-success",
    textColor = "text-gray-600",
    label
}) => {
    const [visible, setVisible] = useState(false);

    if (type === "text" || type === "email" || type === "number") {
        return (
            <input className={`w-full ${classname} ${bgColor} ${border} ${focus} ${rounded} ${padding} ${textColor}`} type={type} name={name} placeholder={placeholder} ref={ref} />
        )
    } else if (type === "checkbox") {
        return (
            <FlexCenter gap="gap-1">
                <input type="checkbox" name={name} className={`${classname} ${padding} bg-white border w-4 h-4 `} />
                <TextCustom type="body_sm_400" textColor="text-gray-500" classname="pt-0.5">{label}</TextCustom>
            </FlexCenter>
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
    } else if (type === "textarea") {
        return (
            <textarea name={name} placeholder={placeholder} className={`max-h-50 min-h-24 ${classname} ${bgColor} ${border} ${focus} ${rounded} ${padding} ${textColor}`} />
        )
    }
}

export default InputCustom