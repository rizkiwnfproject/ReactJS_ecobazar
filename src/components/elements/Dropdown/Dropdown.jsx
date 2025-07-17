import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import TextCustom from '../Text/Text'

export const DropdownCustom = ({
    label = "",
    options = [],
    selected,
    onSelect,
    placeholder = "Select option",
    widthClass = "w-full",
    name = "",
    flexDirection = "flex flex-col",
    gap = "", 
    padding = "py-3.5 px-4",
    margin = "mt-2"
}) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={`dropdown relative ${flexDirection} ${gap} ${widthClass}`}>
            {label && (
                <label htmlFor={name} className="label mb-0">
                    <TextCustom type="body_sm_400" textColor=''>{label}</TextCustom>
                </label>
            )}
            <div
                tabIndex={0}
                role="button"
                onClick={() => setOpen(!open)}
                className={`bg-white border border-green-100 text-gray-600 ${padding} rounded-lg flex justify-between items-center cursor-pointer ${widthClass}`}
            >
                <span>{selected || placeholder}</span>
                <BsChevronDown />
            </div>

            {open && (
                <ul
                    tabIndex={0}
                    className={`dropdown-content menu bg-base-100 rounded-box z-10 ${margin} p-2 shadow border border-gray-200 ${widthClass}`}
                >
                    {options.map((option, index) => (
                        <li key={index}>
                            <a
                                className="block px-4 py-2 hover:bg-gray-100 rounded cursor-pointer"
                                onClick={() => {
                                    onSelect(option)
                                    setOpen(false)
                                }}
                            >
                                <TextCustom>{option}</TextCustom>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

const DropdownNavbar = () => {

}
