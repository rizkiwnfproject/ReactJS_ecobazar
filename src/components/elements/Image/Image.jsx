const ImageCustom = (
    { classname, path, name, image, format = "png" }
) => {
    return (
        <img src={`/assets/images/${path}/${image}.${format}`} alt={name} className={classname} />
    )
}

export default ImageCustom