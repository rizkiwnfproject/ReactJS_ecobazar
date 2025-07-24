import { FlexCenter } from "../../elements/Flex/Flex"
import TableCustom from "../../elements/Table/Table"
import TextCustom from "../../elements/Text/Text"
import { dashboardHistoryOrder, historyOrder } from "../../../constants/Constant"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import Button from "../../elements/Button/Button"

const TableNavigation = ({ type, title }) => {
    if (type === "dashboard") {
        return (
            <>
                <FlexCenter classname="w-full justify-between p-3">
                    <TextCustom type="body_xl_600" respText="text-lg">{title}</TextCustom>
                    <TextCustom type="body_md_500" textColor="text-green-success"> view all</TextCustom>
                </FlexCenter>
                <TableCustom thead="Order History" data={dashboardHistoryOrder} />
            </>
        )
    } else if (type === "history") {
        return (
            <>
                <TextCustom type="body_xl_600" classname="p-3" >{title}</TextCustom>
                <TableCustom thead="Order History" data={historyOrder} />
                <FlexCenter classname="justify-center">
                    <Button classname="cursor-pointer text-gray-300" shadow="" color="bg-gray-50"><BsArrowLeft /></Button>
                    <FlexCenter gap="">
                        <Button classname="cursor-pointer" shadow="" padding="py-2 px-4"><TextCustom type="body_md_500" textColor="text-white">1</TextCustom></Button>
                        <Button classname="cursor-pointer" shadow="" color="bg-white" padding="py-2 px-4"><TextCustom type="body_md_500">2</TextCustom></Button>
                    </FlexCenter>
                    <Button classname="cursor-pointer border border-gray-50" shadow="" color="bg-white" ><BsArrowRight /></Button>
                </FlexCenter>
            </>
        )
    } else {
        return (
            <></>
        )
    }

}

export default TableNavigation