import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import Tweet, { TweetHeader } from "@/components/Tweet";
import { db } from "@/firebase";
import { ArrowLeftIcon, ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";

export async function getServerSideProps(context) {
    const id = context.query.id;
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    const formattedData = {
        username: data.username,
        name: data.name,
        photoURL: data.photoURL,
        text: data.tweet,
        comments: data.comments || null,
        timestamp: JSON.stringify(data.timestamp.toDate()),
        image: data.image || null
    };

    return {
        props: {
            tweetData: formattedData
        }
    }
}

export default function commentsPage({ tweetData }) {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <div>
            <div className='min-h-screen max-w-[1400px] mx-auto flex'>
                <Sidebar />
                <div className="ml-16 xl:ml-[400px] w-[100%] max-w-[550px] flex-grow border-x border-gray-200">
                    <div className="flex space-x-3 px-3 py-2 text-lg sm:text-xl font-bold 
                    border-b border-gray-200 sticky top-0 z-50 bg-white">
                        <Link href={"/"}>
                            <ArrowLeftIcon className="w-7" />
                        </Link>
                        <h1>
                            Post
                        </h1>
                    </div>
                    <div className="border-b border-gray-200">
                        <div className="flex space-x-3 p-3 border-gray-200">
                            <img
                                className="w-11 h-11 rounded-full object-cover"
                                src={tweetData.photoURL}
                            />
                            <div>
                                <div className="flex items-center space-x-2 text-gray-500 mb-1">
                                    <h1 className="text-black font-bold">{tweetData.name}</h1>
                                    <span className="">@{tweetData.username}</span>
                                    <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
                                    <Moment fromNow>
                                        {JSON.parse(tweetData.timestamp)}
                                    </Moment>
                                </div>
                                <span className="xl:text-lg">{tweetData.text}</span>
                                {tweetData.image && <img src={tweetData.image}
                                    className="object-cover rounded-md mt-3 max-h-80 border border-gray-400" />}
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex justify-between border-b border-gray-200 items-center p-2">
                        <div className="flex justify-center items-center p-1 space-x-4">
                            <img src={user.photoURL}
                                alt=""
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <h1 className="text-2xl text-gray-400">Post your reply</h1>
                        </div>
                        <button
                            // onClick={sendTweet}
                            // disabled={!text}
                            className="bg-[#1d9bf0] rounded-full px-4 py-1.5
                            text-white font-bold disabled:opacity-50">
                            Reply
                        </button>
                    </div>
                    {tweetData.comments?.map(comment => (
                        <div key={comment.id} className="border-b border-gray-200">
                            <div className="flex space-x-3 p-3 border-gray-200">
                                <img
                                    className="w-11 h-11 rounded-full object-cover"
                                    src={comment.photoURL}
                                />
                                <div>
                                    <div className="flex items-center space-x-2 text-gray-500 mb-1">
                                        <h1 className="text-black font-bold">{comment.name}</h1>
                                        <span className="">@{comment.username}</span>
                                    </div>

                                    <span>{comment.comment}</span>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
                <Trending />
            </div>
        </div>
    )
}
