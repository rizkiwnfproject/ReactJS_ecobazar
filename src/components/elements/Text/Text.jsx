import React from 'react'

const TextCustom = (props) => {
    return (
        <TextType {...props} />
    )
}

const TextType = (props) => {
    const {
        children,
        type,
        classname,
        textColor = "text-gray-900",
        bgColor,
        isHover = false,
        textTransform = "capitalize",
        leading
    } = props

    if (type === "title_reguler") {
        return (
            <p className={`text-7xl  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "title_semibold") {
        return (
            <p className={`text-7xl font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "heading_1_400") {
        return (
            <p className={`text-[56px]  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "heading_1_600") {
        return (
            <p className={`text-[56px] font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "heading_2_400") {
        return (
            <p className={`text-5xl  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "heading_2_600") {
        return (
            <p className={`text-5xl font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "heading_3_400") {
        return (
            <p className={`text-[40px] ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "heading_3_600") {
        return (
            <p className={`text-[40px] font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "heading_4_400") {
        return (
            <p className={`text-4xl ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "heading_4_600") {
        return (
            <p className={`text-4xl font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "heading_5_400") {
        return (
            <p className={`text-[32px] ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "heading_5_600") {
        return (
            <p className={`text-[32px] font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_xxl_400") {
        return (
            <p className={`text-2xl ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_xxl_500") {
        return (
            <p className={`text-2xl font-medium ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_xxl_600") {
        return (
            <p className={`text-2xl font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_xl_400") {
        return (
            <p className={`text-xl ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_xl_500") {
        return (
            <p className={`text-xl font-medium ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_xl_600") {
        return (
            <p className={`text-xl font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_lg_400") {
        return (
            <p className={`text-lg ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_lg_500") {
        return (
            <p className={`text-lg font-medium ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_lg_600") {
        return (
            <p className={`text-lg font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_md_400") {
        return (
            <p className={`text-base ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_md_500") {
        return (
            <p className={`text-base font-medium ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_md_600") {
        return (
            <p className={`text-base font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_sm_400") {
        return (
            <p className={`text-sm ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_sm_500") {
        return (
            <p className={`text-sm font-medium ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_sm_600") {
        return (
            <p className={`text-sm font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_xs_400") {
        return (
            <p className={`text-xs ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_xs_500") {
        return (
            <p className={`text-xs font-medium ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "body_xs_600") {
        return (
            <p className={`text-xs font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    } else if (type === "span") {
        return (
            <span className={`${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</span>
        )
    } else {
        return (
            <p className={`${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
        )
    }
}

export default TextCustom