import { Link } from "react-router"
import { tableThead } from "../../../constants/Constant"
import TextCustom from "../Text/Text"

const TableCustom = ({ thead, data }) => {
    const titleHead = tableThead.filter(item => item.title === thead).flatMap(item => item.element);
    return (
        <table className='w-full'>
            <thead className=''>
                <tr className='bg-gray-50 uppercase text-sm text-gray-700'>
                    {titleHead.map((item, index) => (
                        <th key={index} className={`px-4 py-2 font-medium ${item.name === "total" ? "hidden lg:table-cell" : "table-cell"
                            }`}>{item.name}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="px-4 py-4"><TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-800">{item.id}</TextCustom></td>
                        <td className="px-4 py-4"><TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-800">{item.date}</TextCustom></td>
                        <td className="px-4 py-4 hidden lg:block"><TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-800" textTransform="none"><strong className="font-medium">{item.total}</strong> ({item.products} Product{item.products > 1 ? 's' : ''})</TextCustom></td>
                        <td className="px-4 py-4"><TextCustom type="body_sm_400" respText="text-sm" textColor="text-gray-800">{item.status}</TextCustom></td>
                        <td className="pr-2 xl:pr-0"><Link to="/user/order-details"><TextCustom type="body_sm_500" respText="text-sm" textColor="text-green-success">detail</TextCustom></Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableCustom