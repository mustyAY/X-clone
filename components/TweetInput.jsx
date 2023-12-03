import { db, storage } from "@/firebase";
import { openLoginModal } from "@/redux/modalSlice";
import {
    CalendarIcon,
    ChartSquareBarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SelectorIcon,
    XIcon
} from "@heroicons/react/outline";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TweetInput() {

    const user = useSelector(state => state.user);

    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false); 
    const filePickerRef = useRef(null);

    const dispatch = useDispatch();

    async function sendTweet() {
        if(!user.username) {
            dispatch(openLoginModal())
            return
        }
        setLoading(true);
        const docRef = await addDoc(collection(db, "posts"), {
            username: user.username,
            name: user.name,
            photoURL: user.photoURL,
            uid: user.uid,
            timestamp: serverTimestamp(),
            likes: [],
            tweet: text
        });

        if (image){
            const imageRef = ref(storage, `tweetImages/${docRef.id}`);
            const uploadImage = await uploadString(imageRef, image, "data_url");
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc(db, "posts", docRef.id), {
                image: downloadURL
            })
        }
        setText("");
        setImage(null);
        setLoading(false)
    }

    function addImageToTweet(e) {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.addEventListener("load", e => {
            setImage(e.target.result);
        });
    }; 

    return (
        <div className="flex space-x-3 p-3 border-b border-gray-200">
            <img
                className="w-11 h-11 rounded-full object-cover"
                src={user.photoURL || "/assets/Xpfp.jpeg"}
            />
            {
                loading && <h1 className="text-2xl text-gray-500">Uploading post...</h1>
            }
            {!loading && (<div className="w-full">
                <textarea
                    placeholder="What is happening?!"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className="bg-transparent resize-none outline-none w-full min-h-[50px] text-lg xl:text-xl"
                />
                {
                    image && (
                        <div className="relative mb-4">
                            <div
                                className="absolute top-1 left-1 rounded-full
                                w-8 h-8 flex justify-center items-center cursor-pointer
                                hover:bg-white bg-black"
                                onClick={() => setImage(null)}>
                                <XIcon className="h-5 text-white hover:text-black" />
                            </div>
                            <img src={image} alt=""
                                className="rounded-2xl max-h-80 object-contain" />
                        </div>
                    )
                }
                <div className="flex justify-between border-t border-gray-200 pt-4">
                    {/* ICONS DIV */}
                    <div className="flex">
                        <div className="iconAnimation"
                        onClick={() => filePickerRef.current.click()}>
                            <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
                        </div>
                        <input type="file"
                        ref={filePickerRef}
                        onChange={addImageToTweet}
                        className="hidden" />
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
                        onClick={sendTweet}
                        disabled={!text && !image}
                        className="bg-[#1d9bf0] rounded-full px-4 py-1.5
                     text-white font-bold disabled:opacity-50">
                        Post
                    </button>
                </div>
            </div>)}
        </div>
    )
}