import { auth } from "@/firebase";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";
import { signOutUser } from "@/redux/userSlice";
import {
    HomeIcon,
    InboxIcon,
    BookmarkIcon,
    SearchIcon,
    ClipboardListIcon,
    BellIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon
} from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {

    const dispatch = useDispatch();

    const user = useSelector(state => state.user);
    
    async function handleSignOut() {
        await signOut(auth);
        dispatch(signOutUser());
        dispatch(closeSignupModal());
        dispatch(closeLoginModal());
    };
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
                <button className="hidden xl:inline bg-[#1d9bf0] rounded-full
                 mt-2 h-[52px] w-[250px] text-lg font-bold text-white">
                    Post
                </button>
                <div 
                onClick={handleSignOut}
                className="absolute bottom-4 flex justify-between xl:w-[250px] items-center
                 space-x-3 xl:p-3 hover:bg-black hover:bg-opacity-10
                 rounded-full cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <img
                            src={user.photoURL || "/assets/Xpfp.jpeg"}
                            className="w-10 h-10 rounded-full object-cover" />
                        <div className="hidden xl:inline">
                            <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
                            <h1 className="text-gray-500">@{user.username}</h1>
                        </div>
                    </div>
                    <DotsHorizontalIcon className="h-5 hidden xl:inline" />
                </div>
            </nav>
        </div>
    )
};

function SidebarLink({ text, Icon }) {
    return (
        <li className="hoverAnimation flex mb-3 justify-center xl:justify-start items-center text-xl space-x-3">
            <Icon className="h-7" />
            <span className="hidden xl:inline">{text}</span>
        </li>
    )
};