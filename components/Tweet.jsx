import { ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline"

export default function Tweet() {
    return (
        <div className="border-b border-gray-200">
            <TweetHeader />
            <div className="p-3 ml-16 text-gray-500 flex space-x-14">
                <ChatIcon className="w-5 cursor-pointer hover:text-[#1d9bf0]" />
                <HeartIcon className="w-5 cursor-pointer hover:text-pink-500" />
                <ChartBarIcon className="w-5 cursor-not-allowed hover:text-green-400" />
                <UploadIcon className="w-5 cursor-not-allowed hover:text-green-400" />
            </div>
        </div>
    )
}

export function TweetHeader() {
    return (
        <div className="flex space-x-3 p-3 border-gray-200">
            <img 
            className="w-11 h-11 rounded-full object-cover"
            src="/assets/pfp.png"
            />
            <div>
                <div className="flex items-center space-x-2 text-gray-500 mb-1">
                    <span className="">@Musk</span>
                    <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
                    <span>2 hours ago</span>
                </div>

                <span>Text</span>
            </div>
        </div>
    )
}