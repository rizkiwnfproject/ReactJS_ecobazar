const TabsCustom = ({
    tabs = []
}) => {
    return (
        <>
            <div className="tabs tabs-border flex justify-center w-full mt-12">
                {tabs.map((item, index) => {
                    return (
                        <>
                            <input
                                type="radio"
                                name="my_tabs_2"
                                className="tab"
                                aria-label={item.label}
                                defaultChecked={index === 0} />
                            <div className="tab-content border-t-gray-100 p-10">
                                {item.content}
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default TabsCustom