import React from 'react'
import { supportData } from '../../../constants/Constant'
import { FlexCenter } from '../../elements/Flex/Flex'
import ImageCustom from '../../elements/Image/Image'

const SupportFragment = (props) => {
    const { children } = props
    return (
        <div>
            {children}
        </div>
    )
}

const SupportCompany = () => {
    return (
        <FlexCenter classname="justify-between">
            {supportData.map((data, index) => (
                <FlexCenter key={index} classname={`
                    px-6 
                    ${index !== supportData.length - 1 ? 'border-r border-gray-200 w-40' : ''}
                    ${index === 0 ? 'justify-start' : index === supportData.length - 1 ? 'justify-end w-56' : 'w-56 justify-center'}
                    `}>
                    <ImageCustom path="supports" image={data.image} name={data.name}/>
                </FlexCenter>
            ))}
        </FlexCenter>
    )
}
SupportFragment.SupportCompany = SupportCompany

export default SupportFragment