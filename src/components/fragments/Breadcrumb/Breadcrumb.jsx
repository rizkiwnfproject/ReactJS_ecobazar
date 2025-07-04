import React from 'react'

const BreadcrumbFragment = (props) => {
    const { items } = props
    return (
        <nav className="flex space-x-1 text-gray-700" aria-label="Breadcrumb">
            {items.map((item, index) => (
                <BreadcrumbItem
                    key={index}
                    label={item.label}
                    to={item.to}
                    isLast={index === items.length - 1}
                />
            ))}
        </nav>
    )
}

export default BreadcrumbFragment