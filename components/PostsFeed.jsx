import { useEffect, useState } from "react";
import Tweet from "./Tweet";
import TweetInput from "./TweetInput";
import { db } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function PostsFeed() {

    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setTweets(snapshot.docs);
        });

        return unsubscribe;
    }, []);

    return (
        <div className="sm:ml-16 xl:ml-[400px] max-w-[550px] flex-grow border-x border-gray-200">
            <div className="px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-200 sticky top-0
            z-50 bg-white">
                Home
            </div>
            <TweetInput />
            {tweets.map(tweet => (
                <Tweet key={tweet.id} data={tweet.data()} />
            )
            )}
            <Tweet />
        </div>
    )
}