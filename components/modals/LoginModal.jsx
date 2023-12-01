import { closeLoginModal, openLoginModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux"


export default function LoginModal() {

    const isOpen = useSelector(state => state.modals.loginModalOpen);
    const dispatch = useDispatch();
    console.log(isOpen)

    return (

        <>
            <button 
                onClick={() => dispatch(openLoginModal())}
            className="bg-transparent border border-white
                 text-white w-[160px] h-[40px] rounded-full hover:bg-[#cbd2d7]">
                Log In
            </button>

            <Modal
                open={isOpen}
                onClick={() => dispatch(closeLoginModal())}
                className="flex justify-center items-center"
            >
                <div
                    className="w-[90%] h-[600px] border rounded-2xl bg-white md:w-[560px] md:h-[600px]
                    flex justify-center items-center">
                    <div className="w-[90%] flex flex-col">
                        <h1 className="text-center font-bold text-4xl">Sign In to your account</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
                        />
                        <button className="bg-black text-white mt-8 w-full rounded-full font-bold text-lg p-2">
                            Sign In
                        </button>
                        <h1 className="text-center mt-4 font-bold">or</h1>
                        <button className="bg-black text-white mt-4 w-full rounded-full font-bold text-lg p-2">
                            Sign In as Guest
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
