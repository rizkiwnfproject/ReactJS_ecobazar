import React from 'react'

const ImageCustom = (props) => {
    const { classname, path, name, image, format = "png" } = props
    return (
        <img src={`assets/images/${path}/${image}.${format}`} alt={name} className={classname} />
    )
}

export default ImageCustom