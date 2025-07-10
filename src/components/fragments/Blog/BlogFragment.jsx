import { newsData } from '../../../constants/Constant'
import ImageCustom from '../../elements/Image/Image'
import Button from '../../elements/Button/Button'
import Card from '../../elements/Card/Card'
import { FlexCenter, FlexStart } from '../../elements/Flex/Flex'
import TextCustom from '../../elements/Text/Text'
import InfoItem from '../../elements/Text/InfoItem'
import { BsArrowLeft, BsArrowRight, BsChatSquare, BsPerson, BsTag } from 'react-icons/bs'
import { Link } from 'react-router'
import { LuDot, LuFacebook, LuLink2, LuTwitter } from 'react-icons/lu'
import { FaInstagram, FaPinterestP } from 'react-icons/fa6'
import InputFormFragment from '../Input/InputFormFragment'
import IconLabel from '../../elements/Text/IconLabel'

export const ListBlogFragment = () => {
    return (
        <div className="">
            <div className='grid grid-cols-2 gap-6'>
                {newsData.map((data, index) => (
                    <Card key={index} type="start" classname="min-w-[390px] min-h-[494px] flex-col rounded-xl" padding="p-0">
                        <div className="relative">
                            <ImageCustom path="news" image={data.image} alt={data.title} />
                            <Button classname="absolute bottom-5 left-5 text-center w-[58px] h-[58px] flex flex-col justify-center" color="bg-white" rounded="rounded">
                                <TextCustom
                                    type="body_xl_500">
                                    {data.date.day}
                                </TextCustom>
                                <TextCustom
                                    type="body_xs_400"
                                    textTransform="uppercase"
                                    textColor="text-gray-500"
                                    classname='tracking-[3%]'>
                                    {data.date.month}</TextCustom>
                            </Button>
                        </div>
                        <FlexStart classname="flex-col p-6 h-full justify-between" gap="gap-4">
                            <FlexStart classname="flex-col">
                                <FlexStart classname="flex-col" gap="gap-6">
                                    <FlexStart gap="gap-3">
                                        <InfoItem icon={<BsTag />} text={data.category} />
                                        <InfoItem icon={<BsPerson />} text={<><span className="text-gray-500">by </span>{data.user}</>}>
                                        </InfoItem>
                                        <InfoItem icon={<BsChatSquare />} text={`${data.comments} comments`} />
                                    </FlexStart>
                                    <TextCustom type="body_lg_500" leading="leading-6">
                                        {data.title}
                                    </TextCustom>
                                </FlexStart>
                            </FlexStart>
                            <Link to="1">
                                <Button color="bg-white text-green-success" padding="p-0" classname="shadow-none capitalize text-left flex items-center gap-3 font-semibold ">read more
                                    <BsArrowRight />
                                </Button>
                            </Link>
                        </FlexStart>
                    </Card>
                ))}
            </div>
            <FlexCenter classname="justify-center py-5">
                <Button classname="cursor-pointer text-gray-300" shadow="" color="bg-gray-50"><BsArrowLeft /></Button>
                <FlexCenter gap="">
                    <Button classname="cursor-pointer" shadow="" padding="py-2 px-4"><TextCustom type="body_md_500" textColor="text-white">1</TextCustom></Button>
                    <Button classname="cursor-pointer" shadow="" color="bg-white" padding="py-2 px-4"><TextCustom type="body_md_500">2</TextCustom></Button>
                </FlexCenter>
                <Button classname="cursor-pointer border border-gray-50" shadow="" color="bg-white" ><BsArrowRight /></Button>
            </FlexCenter>
        </div>
    )
}


export const SingleBlogFragment = () => {
    return (
        <>
            <FlexStart classname='flex-col'>
                <FlexStart classname='flex-col'>
                    <ImageCustom path="blog" image="image_4" />
                    <FlexStart classname='flex-col py-6 border-b border-b-gray-100' gap='gap-3'>
                        <FlexStart gap="gap-3">
                            <InfoItem icon={<BsTag />} text="Food" textColor="text-green-success" />
                            <InfoItem icon={<BsPerson />} textColor="text-green-success" text={<><span className="text-gray-500">by </span>Admin</>}>
                            </InfoItem>
                            <InfoItem icon={<BsChatSquare />} text="65 Comments" textColor="text-green-success" />
                        </FlexStart>
                        <TextCustom type="heading_5_500">Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.</TextCustom>
                        <FlexCenter classname='justify-between'>
                            <IconLabel
                                title="Cameron Williamson"
                                desc={<>4 April, 2021 <span><LuDot size="22px" /></span>6 min read</>}
                                classname="flex items-center"
                                size="w-13 h-13"
                                iconColor="#00B207"
                                path="users"
                                icon="image_1"
                            />
                            <FlexCenter>
                                <Button hover={true} color='' shadow='' padding='' classname="h-10 w-10 flex justify-center items-center"><LuFacebook size="22px" /></Button>
                                <Button hover={true} color='' shadow='' padding='' classname="h-10 w-10 flex justify-center items-center"><LuTwitter size="22px" /></Button>
                                <Button hover={true} color='' shadow='' padding='' classname="h-10 w-10 flex justify-center items-center"><FaPinterestP size="22px" /></Button>
                                <Button hover={true} color='' shadow='' padding='' classname="h-10 w-10 flex justify-center items-center"><FaInstagram size="22px" /></Button>
                                <Button hover={true} color='' shadow='' padding='' classname="h-10 w-10 flex justify-center items-center"><LuLink2 size="22px" /></Button>
                            </FlexCenter>
                        </FlexCenter>
                    </FlexStart>
                    <FlexStart classname='flex-col py-6' gap='gap-3'>
                        <TextCustom type="body_xl_500">Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.</TextCustom>
                        <TextCustom type="body_lg_400" textColor='text-gray-500'>Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.</TextCustom>
                        <FlexStart classname='justify-between max-w-[830px]'>
                            <ImageCustom path="blog" image="image_5" classname="w-[400px] object-cover" />
                            <ImageCustom path="blog" image="image_6" classname="w-[400px] object-cover" />
                        </FlexStart>
                        <TextCustom type="body_lg_400" textColor='text-gray-500'>Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus. Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.</TextCustom>
                        <TextCustom type="body_lg_400" textColor='text-gray-500'>Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.
                        </TextCustom>
                        <ImageCustom path="banner" image="Bannar_7" />
                    </FlexStart>
                    <FlexStart classname='flex-col' gap='gap-4'>
                        <TextCustom type="body_xxl_500" >Leave a Comment</TextCustom>
                        <FlexStart classname='pt-4'>
                            <InputFormFragment label="full name" type="text" name="full_name" placeholder="John" />
                            <InputFormFragment label="email" type="email" name="email" placeholder="example@gmail.com" />
                        </FlexStart>
                        <InputFormFragment label="message" type="textarea" name="message" placeholder="write your message" />
                        <InputFormFragment label="Save my name and email in this browser for the next time I comment." textColor="text-gray-500" type="checkbox" name="email" />
                        <Button classname="w-1/4" shadow=''><TextCustom type="body_md_600" textColor='text-white'>Post Comments</TextCustom></Button>
                    </FlexStart>
                    <FlexStart classname='flex-col pt-10' gap='gap-4'>
                        <TextCustom type="body_xxl_500" >Comments</TextCustom>
                        <FlexStart classname='items-start py-6 border-b border-b-gray-100' gap='gap-3'>
                            <ImageCustom path="users" image="image_1" />
                            <FlexStart classname='flex-col' gap='gap-1'>
                                <TextCustom type="body_sm_500" classname="flex items-center">Annette Black
                                    <span><LuDot size="22px" /></span>
                                    <span className='font-normal text-gray-400'>4 April, 2021</span>
                                </TextCustom>
                                <TextCustom type="body_sm_400" textColor='text-gray-600'>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</TextCustom>
                            </FlexStart>
                        </FlexStart>
                        <FlexStart classname='items-start py-6 border-b border-b-gray-100' gap='gap-3'>
                            <ImageCustom path="users" image="image_1" />
                            <FlexStart classname='flex-col' gap='gap-1'>
                                <TextCustom type="body_sm_500" classname="flex items-center">Annette Black
                                    <span><LuDot size="22px" /></span>
                                    <span className='font-normal text-gray-400'>4 April, 2021</span>
                                </TextCustom>
                                <TextCustom type="body_sm_400" textColor='text-gray-600'>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</TextCustom>
                            </FlexStart>
                        </FlexStart>
                        <FlexStart classname='items-start py-6 border-b border-b-gray-100' gap='gap-3'>
                            <ImageCustom path="users" image="image_1" />
                            <FlexStart classname='flex-col' gap='gap-1'>
                                <TextCustom type="body_sm_500" classname="flex items-center">Annette Black
                                    <span><LuDot size="22px" /></span>
                                    <span className='font-normal text-gray-400'>4 April, 2021</span>
                                </TextCustom>
                                <TextCustom type="body_sm_400" textColor='text-gray-600'>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</TextCustom>
                            </FlexStart>
                        </FlexStart>
                        <Button classname="w-1/4" color='bg-white border-2 border-green-success' shadow=''><TextCustom type="body_md_600" textColor='text-green-success'>Load More</TextCustom></Button>
                    </FlexStart>
                </FlexStart>
            </FlexStart>
        </>
    )
}