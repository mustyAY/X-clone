import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";

export default function BottomBanner() {
    return (
        <div className="fixed xl:space-x-[200px] flex justify-center items-center w-full h-[80px] bg-black bottom-0">
            <div className="hidden xl:inline text-white">
                <h1 className="text-2xl font-bold">Don't miss what is happening</h1>
                <span className="text-[18px] font-normal">People on X are the first to know.</span>
            </div>
            <div className="space-x-3">
                <LoginModal />
                <SignupModal />
            </div>
        </div>
    )
}