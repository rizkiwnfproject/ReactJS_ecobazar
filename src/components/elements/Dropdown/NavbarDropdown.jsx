import { useState } from "react"
import { BsChevronDown } from "react-icons/bs"
import { Link } from "react-router"

const NavbarDropdown = ({
    label,
    items = [],
    isActive = false
}) => {
    const [open, setOpen] = useState(false)

    return (
        <div
            className="relative group"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                className={`flex items-center gap-1 text-sm font-medium ${isActive ? "text-green-600" : "text-gray-700"
                    } hover:text-green-600 transition`}
            >
                {label}
                <BsChevronDown className="mt-0.5 text-xs" />
            </button>

            {open && (
                <ul className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-md border w-40 z-50 py-2">
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NavbarDropdown