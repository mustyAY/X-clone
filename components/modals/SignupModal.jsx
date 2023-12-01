import Modal from "@mui/material/Modal"
import { useState } from "react"

export default function SignupModal() {

    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => setIsOpen(false)


     return (
        <>
            <button className="bg-white border border-white
                 text-black w-[160px] h-[40px] rounded-full hover:bg-[#cbd2d7]">
                Sign Up
            </button>

            <Modal open={isOpen} onClose={handleClose}>
                <div className="w-[400px] h-[400px] bg-white">
                    Signup over here!
                </div>
            </Modal>
        </>
    )
}