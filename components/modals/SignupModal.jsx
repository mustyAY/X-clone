import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import { signInUser } from "@/redux/userSlice";
import { useRouter } from "next/router";

export default function SignupModal() {

    const isOpen = useSelector(state => state.modals.signupModalOpen);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    async function handleSignUp() {
        const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: `./assets/profilePictures/pfp${Math.ceil(Math.random() * 6)}.png`
        });

        router.reload();
    };

    async function handleGuestSignIn() {
        await signInWithEmailAndPassword(auth, "guest253363@gmail.com", "Oo14253363xa")
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) return;
            console.log(currentUser);

            dispatch(signInUser(
                {
                    username: currentUser.email.split("@")[0],
                    name: currentUser.displayName,
                    email: currentUser.email,
                    uid: currentUser.uid,
                    photoURL: currentUser.photoURL
                }
            ));

        });

        return () => {
            unsubscribe;
        }
    }, []);


    return (
        <>
            <button
                onClick={() => dispatch(openSignupModal())}
                className="bg-white border border-white
                 text-black w-[160px] h-[40px] rounded-full hover:bg-[#cbd2d7]">
                Sign Up
            </button>

            <Modal
                open={isOpen}
                onClose={() => dispatch(closeSignupModal())}
                className="flex justify-center items-center"
            >
                <div
                    className="w-[90%] h-[600px] border rounded-2xl bg-white md:w-[560px] md:h-[600px]
                    flex justify-center items-center">
                    <div className="w-[90%] flex flex-col">
                        <button
                            onClick={handleGuestSignIn}
                            className="bg-black text-white w-full rounded-full font-bold text-lg p-2">
                            Sign In as Guest
                        </button>
                        <h1 className="text-center mt-4 font-bold">or</h1>
                        <h1 className="text-center mt-4 font-bold text-4xl">Create your Account</h1>
                        <input
                            type="text"
                            placeholder="Full Name"
                            onChange={e => setName(e.target.value)}
                            className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                            className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                            className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
                        />
                        <button
                            onClick={handleSignUp}
                            className="bg-black text-white mt-8 w-full rounded-full font-bold text-lg p-2">
                            Create account
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
};