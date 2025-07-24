
import SectionWrapper from "../components/fragments/Wrapper/Wrapper";
import SidebarProfile from "../components/fragments/Sidebar/Sidebar";
import { Outlet } from "react-router";

const UserSidebarLayouts = () => {
    return (
        <>
            <SectionWrapper classname="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <SidebarProfile />
                <div className="md:col-span-2 lg:col-span-3">
                    <Outlet />
                </div>
            </SectionWrapper>
        </>
    )
}

export default UserSidebarLayouts