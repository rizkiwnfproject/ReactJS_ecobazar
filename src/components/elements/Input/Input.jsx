import React from 'react'

const Input = (props) => {
    const { type, placeholder, name, classname, rounded = "rounded-xl" } = props;
    return (
        <input className={`w-full ${classname} bg-white border border-green-100 ${rounded} focus:border-green-success focus:outline focus:outline-greensborder-green-success`} type={type} name={name} placeholder={placeholder} />
    )
}

export default Input
