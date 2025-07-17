import { FlexStart } from "../../elements/Flex/Flex";

const SectionWrapper = ({
  children,
  classname = "",
  maxWidth = "max-w-10/12",
  padding = "py-15",
  bgColor = "bg-white" }) => {
  return (
    <div className={`${bgColor} ${padding}`}>
      <FlexStart width={maxWidth} classname={`flex-col mx-auto ${classname}`}>
        {children}
      </FlexStart>
    </div>
  );
};

export default SectionWrapper;