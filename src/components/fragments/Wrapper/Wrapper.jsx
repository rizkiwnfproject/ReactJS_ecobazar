import { FlexStart } from "../../elements/Flex/Flex";

const SectionWrapper = ({ children, classname = "", maxWidth = "max-w-10/12", padding = "pt-15", bg = "bg-white" }) => {
  return (
    <div className={`${bg} ${padding}`}>
      <div className={`flex flex-col mx-auto ${maxWidth} ${classname}`}>
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;