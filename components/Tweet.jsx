import { openCommentModal } from "@/redux/modalSlice";
import {
    ChartBarIcon,
    ChatIcon,
    HeartIcon,
    UploadIcon
} from "@heroicons/react/outline";
import Moment from "react-moment"
import { useDispatch } from "react-redux";

export default function Tweet({ data }) {

    const dispatch = useDispatch();

    return (
        <div className="border-b border-gray-200">
            <TweetHeader
                username={data?.username}
                name={data?.name}
                timestamp={data?.timestamp?.toDate()}
                text={data?.tweet}
                photoURL={data?.photoURL}
            />
            <div className="p-3 ml-16 text-gray-500 flex space-x-14">
                <div onClick={() => dispatch(openCommentModal())}>
                <ChatIcon className="w-5 cursor-pointer hover:text-[#1d9bf0]" />
                </div>
                <HeartIcon className="w-5 cursor-pointer hover:text-pink-500" />
                <ChartBarIcon className="w-5 cursor-not-allowed hover:text-green-400" />
                <UploadIcon className="w-5 cursor-not-allowed hover:text-[#1d9bf0]" />
            </div>
        </div>
    )
};

export function TweetHeader({ username, name, timestamp, text, photoURL }) {
    return (
        <div className="flex space-x-3 p-3 border-gray-200">
            <img
                className="w-11 h-11 rounded-full object-cover"
                src={photoURL}
            />
            <div>
                <div className="flex items-center space-x-2 text-gray-500 mb-1">
                    <h1 className="text-black font-bold">{name}</h1>
                    <span className="">@{username}</span>
                    <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
                    <Moment fromNow>
                        {timestamp}
                    </Moment>
                </div>

                <span>{text}</span>
            </div>
        </div>
    )
};