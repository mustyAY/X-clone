import { db } from "@/firebase";
import { openCommentModal, openLoginModal, setCommentTweet } from "@/redux/modalSlice";
import {
    ChartBarIcon,
    ChatIcon,
    HeartIcon,
    TrashIcon,
    UploadIcon
} from "@heroicons/react/outline";
import { HeartIcon as FilledHeart } from "@heroicons/react/solid";
import { arrayRemove, arrayUnion, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Moment from "react-moment"
import { useDispatch, useSelector } from "react-redux";

export default function Tweet({ data, id }) {

    const dispatch = useDispatch();
    const router = useRouter();

    const user = useSelector(state => state.user);

    const [likes, setLikes] = useState([]);
    const [comments, setComments] = useState([]);

    async function likeComment(e) {
        e.stopPropagation();

        if (!user.username){
            dispatch(openLoginModal());
            return
        };

        if (likes.includes(user.uid)) {
            await updateDoc(doc(db, "posts", id), {
                likes: arrayRemove(user.uid)
            });
        } else {
            await updateDoc(doc(db, "posts", id), {
                likes: arrayUnion(user.uid)
            });
        };

    };

    async function deleteTweet(e) {
        e.stopPropagation();
        await deleteDoc(doc(db, "posts", id))
    }

    useEffect(() => {
        if (!id) return
        const unsubscribe = onSnapshot(doc(db, "posts", id), (doc) => {
            setLikes(doc.data()?.likes);
            setComments(doc.data()?.comments);
        });
        return unsubscribe;
    }, []);

    return (
        <div
            onClick={() => router.push(`/${id}`)}
            className="border-b border-gray-200 cursor-pointer hover:bg-black hover:bg-opacity-5">
            <TweetHeader
                username={data?.username}
                name={data?.name}
                timestamp={data?.timestamp?.toDate()}
                text={data?.tweet}
                photoURL={data?.photoURL}
                image={data?.image}
            />
            <div className="p-3 ml-16 text-gray-500 flex space-x-14">
                <div
                className="flex space-x-1.5 items-center"
                    onClick={
                        (e) => {
                            e.stopPropagation();
                            if (!user.username){
                                dispatch(openLoginModal());
                                return
                            };
                            dispatch(setCommentTweet({
                                id: id,
                                tweet: data?.tweet,
                                photoURL: data?.photoURL,
                                name: data?.name,
                                username: data?.username
                            }));
                            dispatch(openCommentModal());
                        }
                    }>
                    <ChatIcon className="w-5 cursor-pointer hover:text-[#1d9bf0]" />
                    {comments?.length > 0 && <span>{comments.length}</span>}
                </div>
                <div onClick={likeComment} className="flex space-x-1.5 items-center">
                    {
                        likes.includes(user.uid) ? <FilledHeart className="w-5 cursor-pointer text-pink-500"/>
                        :
                        <HeartIcon className="w-5 cursor-pointer hover:text-pink-500" />
                    }
                    {likes.length > 0 && <span>{likes.length}</span>}
                </div>
                {user.uid === data?.uid && (<div onClick={deleteTweet}>
                    <TrashIcon className="w-5 hover:text-red-600"/>
                </div>) }
                <ChartBarIcon className="w-5 cursor-not-allowed hover:text-green-400" />
                <UploadIcon className="w-5 cursor-not-allowed hover:text-[#1d9bf0]" />
            </div>
        </div>
    )
};

export function TweetHeader({ username, name, timestamp, text, photoURL, image }) {
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
                <span className="xl:text-lg">{text}</span>
                {image && <img src={image}
                className="object-cover rounded-md mt-3 max-h-80 border border-gray-400" />}
            </div>
        </div>
    )
};