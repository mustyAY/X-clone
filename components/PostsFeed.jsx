import Tweet from "./Tweet";
import TweetInput from "./TweetInput";

export default function PostsFeed() {
    return (
        <div className="sm:ml-16 xl:ml-[400px] max-w-[550px] flex-grow border-x border-gray-200">
            <div className="px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-200 sticky top-0
            z-50 bg-white">
                Home
            </div>
            <TweetInput />
            <Tweet />
        </div>
    )
}