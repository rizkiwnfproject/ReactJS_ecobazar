const LabelForm = (props) => {
    const { htmlFor, children } = props;
    return (
        <label htmlFor={htmlFor} className=''>{children}</label>
    )
}

export default LabelForm