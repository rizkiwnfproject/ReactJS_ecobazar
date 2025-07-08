import { FlexStart } from "../../elements/Flex/Flex"
import InputCustom from "../../elements/Input/Input"
import LabelForm from "../../elements/Label/LabelForm"
import TextCustom from "../../elements/Text/Text"

const InputFormFragment = ({
    label,
    type,
    name,
    placeholder,
    direction = "flex-col",
    span,
    ref
}) => {
    return (
        <FlexStart gap="gap-1" classname={`${direction} w-full`}>
            <LabelForm htmlFor={name}>
                <TextCustom type="body_sm_400">{label} <span className="text-gray-400">{span}</span> </TextCustom>
            </LabelForm>
            <InputCustom name={name} type={type} placeholder={placeholder} ref={ref} />
        </FlexStart>
    )
}

export default InputFormFragment