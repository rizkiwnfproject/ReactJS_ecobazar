import Input from "./Input";

const InputForm = (props) => {
  const { type, placeholder, name, classname } = props;
  return (
    <>
      <div className="">
        <Input classname={classname} name={name} type={type} placeholder={placeholder} />
      </div>
    </>
  )
}

export default InputForm