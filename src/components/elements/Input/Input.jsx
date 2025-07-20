import { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FlexCenter } from '../Flex/Flex';
import TextCustom from '../Text/Text';

const InputCustom = ({
    type = "",
    gap = "gap-2",
    placeholder = "",
    name = "",
    classname = "",
    rounded = "rounded-lg",
    ref,
    padding = "px-4 py-3.5",
    bgColor = "bg-white",
    border = "border border-green-100",
    focus = "focus:border-green-success focus:outline focus:outline-green-success",
    textColor = "text-gray-600",
    textType = "body_sm_400",
    label = "",
    respText,
    alignItems
}) => {
    const [visible, setVisible] = useState(false);

    if (type === "text" || type === "email" || type === "number") {
        return (
            <input className={`w-full ${classname} ${bgColor} ${border} ${focus} ${rounded} ${padding} ${textColor}`} type={type} name={name} placeholder={placeholder} ref={ref} />
        )
    } else if (type === "checkbox") {
        return (
            <FlexCenter gap={gap}>
                <input
                    type="checkbox"
                    className={`${classname} ${padding} checkbox w-4 h-4 rounded-xs checked:border-green-success-dark checked:bg-green-success checked:text-white`}
                />
                <TextCustom type={textType} respText={respText} textColor={textColor} classname="pt-0.5">{label}</TextCustom>
            </FlexCenter>
        )
    } else if (type === "radio") {
        return (
            <FlexCenter gap="gap-1" alignItems={alignItems}>
                <input type="radio" name="radio-5" className="radio radio-xs border-green-400 checked:text-green-success" />
                <TextCustom type={textType} textColor={textColor} classname="pt-0.5">{label}</TextCustom>
            </FlexCenter>
        )
    } else if (type === "range") {
        return (
            <input type="range" min={0} max="100" value="40" className="range text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]" />
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