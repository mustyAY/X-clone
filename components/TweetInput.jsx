import {
    CalendarIcon,
    ChartBarIcon,
    ChartSquareBarIcon,
    EmojiHappyIcon,
    GiftIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SelectorIcon
} from "@heroicons/react/outline";

export default function TweetInput() {
    return (
        <div className="flex space-x-3 p-3 border-b border-gray-200">
            <img
                className="w-11 h-11 rounded-full object-cover"
                src="/assets/pfp.png"
            />
            <div className="w-full">
                <textarea
                    className="bg-transparent resize-none outline-none w-full min-h-[50px] text-lg xl:text-xl"
                    placeholder="What is happening?!" />


                <div className="flex justify-between border-t border-gray-200 pt-4">
                    {/* ICONS DIV */}
                    <div className="flex">
                        <div className="iconAnimation">
                            <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
                        </div>
                        <div className="iconAnimation">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[22px] text-[#1d9bf0]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                        </div>
                        <div className="iconAnimation">
                            <ChartSquareBarIcon className="h-[22px] text-[#1d9bf0]" />
                        </div>
                        <div className="iconAnimation">
                            <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
                        </div>
                        <div className="iconAnimation">
                            <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
                        </div>
                        <div className="iconAnimation">
                            <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]" />
                        </div>
                    </div>

                    <button className="bg-[#1d9bf0] rounded-full px-4 py-1.5 text-white font-bold">
                        Post
                    </button>
                </div>
            </div>
        </div>
    )
}