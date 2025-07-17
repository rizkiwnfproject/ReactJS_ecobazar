import ImageCustom from "../Image/Image"
import { FlexCenter, FlexStart } from "../Flex/Flex"
import TextCustom from "../Text/Text"
import Button from "../Button/Button"
import InputCustom from "../Input/Input"
import { LuX } from "react-icons/lu"

const ModalNewsLetter = () => {
    return (
        <>
            <dialog id="newsletter" className="modal">
                <div className="modal-box w-11/12 max-w-4xl mx-auto p-2">
                    <div className="grid grid-cols-5 gap-5">
                        <div className="col-span-2">
                            <ImageCustom path="newsletter" image="image_1" />
                        </div>
                        <div className="col-span-3 ">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><LuX size="1.5rem" /></button>
                            </form>
                            <FlexCenter classname="flex-col text-center mt-5">
                                <TextCustom type="heading_3_600" >
                                    Subcribe to Our Newsletter
                                </TextCustom>
                                <TextCustom type="body_md_400" textColor="text-gray-400">
                                    Subscribe to our newlletter and Save your 20% money with discount code today.
                                </TextCustom>
                                <div className="w-[428px] relative mt-6">
                                    <InputCustom classname="px-6 py-3" rounded="rounded-full" type="text" placeholder="Your email address" name="subscribe" />
                                    <Button category="input" classname="px-10 rounded-full">subscribe</Button>
                                </div>
                                <FlexStart gap="gap-0.5" classname="mt-8">
                                    <InputCustom type="checkbox" textColor="text-gray-400" padding="" name="remember" classname="mx-2.5" label="Do not show this window" />
                                </FlexStart>
                            </FlexCenter>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}


export default ModalNewsLetter