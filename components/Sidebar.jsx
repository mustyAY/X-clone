import {
    HomeIcon,
    InboxIcon,
    BookmarkIcon,
    SearchIcon,
    ClipboardListIcon,
    BellIcon,
    UserIcon,
    DotsCircleHorizontalIcon
} from "@heroicons/react/outline"
import Image from "next/image"

export default function Sidebar() {
    return (
        <div className="h-full hidden sm:flex flex-col fixed sm:ml-[8px] xl:ml-[64px]">
            <nav className="h-full relative xl:space-y-1.5 mx-auto">
                <div className="flex justify-center items-center xl:justify-start py-3 xl:p-3">
                    <Image src={"/assets/Xlogo.png"} width={34} height={34} alt="" />
                </div>
                <SidebarLink Icon={HomeIcon} text={"Home"} />
                <SidebarLink Icon={SearchIcon} text={"Explore"} />
                <SidebarLink Icon={BellIcon} text={"Notifications"} />
                <SidebarLink Icon={InboxIcon} text={"Messages"} />
                <SidebarLink Icon={ClipboardListIcon} text={"Lists"} />
                <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
                <SidebarLink Icon={UserIcon} text={"Profile"} />
                <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
                <button className="hidden xl:inline bg-[#1d9bf0] rounded-full mt-2 h-[52px] w-[250px] text-lg font-bold text-white">Post</button>
            <div className="absolute bottom-0">User</div>
            </nav>
        </div>
    )
}

function SidebarLink({ text, Icon }) {
    return (
        <li className="hoverAnimation flex mb-3 justify-center xl:justify-start items-center text-xl space-x-3">
            <Icon className="h-7" />
            <span className="hidden xl:inline">{text}</span>
        </li>
    )
}