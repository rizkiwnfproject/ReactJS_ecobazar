import { BsChatSquare, BsPerson, BsTag } from "react-icons/bs"
import { FlexStart } from "../Flex/Flex"
import TextIcon from "./TextIcon"

const NewsIcon = ({
    category = "",
    writter = "",
    comments = "",
}) => {
    return (
        <>
            <FlexStart classname="flex-wrap" gap="gap-3">
                <TextIcon icon={BsTag} respText='text-sm' text={category} />
                <TextIcon icon={BsPerson} respText='text-sm' text={<><span className="text-gray-500">by </span>{writter}</>}>
                </TextIcon>
                <TextIcon icon={BsChatSquare} respText='text-sm' text={comments} />
            </FlexStart>
        </>
    )
}

export default NewsIcon