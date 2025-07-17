
import SectionWrapper from "../components/fragments/Wrapper/Wrapper";
import SidebarProfile from "../components/fragments/Sidebar/Sidebar";
import { Outlet } from "react-router";

const UserSidebarLayouts = () => {
    return (
        <>
            <SectionWrapper classname="grid grid-cols-4 gap-5">
                <SidebarProfile />
                <div className="col-span-3">
                    <Outlet />
                </div>
            </SectionWrapper>
        </>
    )
}

export default UserSidebarLayouts