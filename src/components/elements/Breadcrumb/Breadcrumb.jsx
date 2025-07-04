import React from 'react'
import { FlexCenter } from '../Flex/Flex'
import { Link } from 'react-router'

const Breadcrumb = (props) => {
    const { label, to, isLast } = props
    return (
        <FlexCenter classname="text-sm">
            {!isLast ? (
                <>
                    <Link to={to} className="text-blue-600 hover:underline">
                        {label}
                    </Link>
                    <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
                </>
            ) : (
                <span className="text-gray-500">{label}</span>
            )}
        </FlexCenter>
    )
}

export default Breadcrumb