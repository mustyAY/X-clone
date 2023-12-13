import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function Trending() {
    return (
        <div className="hidden lg:flex flex-col items-center ml-7 mt-0.5">
            <div className="sticky top-0 bg-white z-100 pb-1 pt-1">
                <div className="flex space-x-3 w-[350px] h-[44px] bg-black bg-opacity-5 p-3 rounded-3xl">
                    <SearchIcon className="w-6 text-gray-400" />
                    <input
                        className="placeholder:text-gray-400 bg-transparent outline-none"
                        placeholder="Search"
                    />
                </div>
            </div>

            <div className="w-[350px] h-[500px] bg-black bg-opacity-5 rounded-3xl mt-3">
                <h1 className="font-bold text-xl p-3">Trends for you</h1>
                <div className="relative p-3">
                    <DotsHorizontalIcon className="absolute right-4 w-5 text-gray-400" />
                    <p className="text-xs text-gray-400">Trending in Nigeria</p>
                    <h1 className="text-[15px] font-bold">Petroleum Prices</h1>
                    <p className="text-xs text-gray-400">340k posts</p>
                </div>
                <div className="relative p-3">
                    <DotsHorizontalIcon className="absolute right-4 w-5 text-gray-400" />
                    <p className="text-xs text-gray-400">Trending in Nigeria</p>
                    <h1 className="text-[15px] font-bold">Petroleum Prices</h1>
                    <p className="text-xs text-gray-400">340k posts</p>
                </div>
                <div className="relative p-3">
                    <DotsHorizontalIcon className="absolute right-4 w-5 text-gray-400" />
                    <p className="text-xs text-gray-400">Trending in Nigeria</p>
                    <h1 className="text-[15px] font-bold">Petroleum Prices</h1>
                    <p className="text-xs text-gray-400">340k posts</p>
                </div>
                <div className="relative p-3">
                    <DotsHorizontalIcon className="absolute right-4 w-5 text-gray-400" />
                    <p className="text-xs text-gray-400">Trending in Nigeria</p>
                    <h1 className="text-[15px] font-bold">Petroleum Prices</h1>
                    <p className="text-xs text-gray-400">340k posts</p>
                </div>
                <div className="relative p-3">
                    <DotsHorizontalIcon className="absolute right-4 w-5 text-gray-400" />
                    <p className="text-xs text-gray-400">Trending in Nigeria</p>
                    <h1 className="text-[15px] font-bold">Petroleum Prices</h1>
                    <p className="text-xs text-gray-400">340k posts</p>
                </div>
            </div>
            <div className="w-[350px] h-[300px] bg-black bg-opacity-5 rounded-3xl mt-3">
                <h1 className="font-bold text-xl p-3">Who to follow</h1>
                <div className="flex justify-between items-center p-3">
                    <div className="flex space-x-3">
                        <img
                            className="w-11 h-11 object-cover rounded-full"
                            src="/assets/pfp.png" />
                        <div>
                            <div className="flex space-x-1">
                                <h1 className="font-bold">Elon Musk</h1>
                                <BadgeCheckIcon className="w-[18px] text-blue-400" />
                            </div>
                            <h1 className="text-[16px] text-gray-500">@Musk</h1>
                        </div>
                    </div>
                    <button className="bg-black rounded-3xl text-white text-sm w-20 h-8 font-bold">
                        Follow
                    </button>
                </div>
                <div className="flex justify-between items-center p-3">
                    <div className="flex space-x-3">
                        <img
                            className="w-11 h-11 object-cover rounded-full"
                            src="/assets/pfp.png" />
                        <div>
                            <div className="flex space-x-1">
                                <h1 className="font-bold">Elon Musk</h1>
                                <BadgeCheckIcon className="w-[18px] text-blue-400" />
                            </div>
                            <h1 className="text-[16px] text-gray-500">@Musk</h1>
                        </div>
                    </div>
                    <button className="bg-black rounded-3xl text-white text-sm w-20 h-8 font-bold">
                        Follow
                    </button>
                </div>
                <div className="flex justify-between items-center p-3">
                    <div className="flex space-x-3">
                        <img
                            className="w-11 h-11 object-cover rounded-full"
                            src="/assets/pfp.png" />
                        <div>
                            <div className="flex space-x-1">
                                <h1 className="font-bold">Elon Musk</h1>
                                <BadgeCheckIcon className="w-[18px] text-blue-400" />
                            </div>
                            <h1 className="text-[16px] text-gray-500">@Musk</h1>
                        </div>
                    </div>
                    <button className="bg-black rounded-3xl text-white text-sm w-20 h-8 font-bold">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    )
}