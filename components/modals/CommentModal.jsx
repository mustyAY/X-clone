import { db } from "@/firebase";
import { closeCommentModal } from "@/redux/modalSlice";
import { CalendarIcon, ChartSquareBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import Modal from "@mui/material/Modal";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CommentModal() {

    const isOpen = useSelector(state => state.modals.commentModalOpen);
    const userImg = useSelector(state => state.user.photoURL);
    const tweetDetails = useSelector(state => state.modals.commentTweetDetails);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [comment, setComment] = useState("");

    const router = useRouter();

    async function sendComment() {

        const docRef = doc(db, "posts", tweetDetails.id);
        const commentDetails = {
            username: user.username,
            name: user.name,
            photoURL: user.photoURL,
            comment: comment
        }
        await updateDoc(docRef, {
            comments: arrayUnion(commentDetails)
        })

        dispatch(closeCommentModal());
        router.push(`/${tweetDetails.id}`);
    }

    return (
        <>
            <Modal
                open={isOpen}
                onClose={() => dispatch(closeCommentModal())}
                className="flex justify-center items-center"
            >
                <div className="bg-white w-full h-full sm:w-[600px] sm:h-[350px]
                rounded-xl outline-none px-4 pt-10 sm:py-10 relative">
                    <div className="absolute w-[2px] h-[60px] bg-gray-300 left-[40px] top-[112px]"></div>
                    <div
                        onClick={() => dispatch(closeCommentModal())}
                        className="absolute left-4 top-4 cursor-pointer 
                    hover:bg-black hover:bg-opacity-10 rounded-full p-1"
                    >
                        <XIcon className="w-5" />
                    </div>
                    <div className="mt-6">
                        <div className="flex space-x-3">
                            <img src={tweetDetails.photoURL} alt=""
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <div>
                                <div className="flex space-x-1.5">
                                    <h1 className="font-bold">{tweetDetails.name}</h1>
                                    <h1 className="text-gray-500">@{tweetDetails.username}</h1>
                                </div>
                                <p className="mt-1">{tweetDetails.tweet}</p>
                                <h1 className="text-gray-500 text-[15px] mt-2">
                                    Replying to
                                    <span className="text-[#1d9bf0] ml-1">
                                        @{tweetDetails.username}
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-11">
                        <div className="flex space-x-3">
                            <img src={userImg} alt=""
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <div className="w-full">
                                <textarea
                                    placeholder="Post your reply"
                                    onChange={e => setComment(e.target.value)}
                                    className="w-full outline-none resize-none text-lg" />
                                <div className="flex justify-between">
                                    <div className="flex sm:absolute sm:bottom-4 sm:left-2">
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
                                    <button
                                        onClick={sendComment}
                                        disabled={!comment}
                                        className="bg-[#1d9bf0] rounded-full px-4 py-1.5
                                     text-white font-bold disabled:opacity-50 sm:absolute sm:right-4 sm:bottom-4"
                                    >
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </>
    )
}
