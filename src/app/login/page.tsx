import InputIcon from "../_components/common/InputIcon";
import LockClosed from "../_components/icons/LockClosed";
import Envelope from "../_components/icons/Envelope";
import Image from "next/image";

export default function Page() {
    return <div className="h-full fixed top-0 left-0 right-0">
        <div className="h-full bg-[url('/Moon.svg')] bg-cover bg-right bg-no-repeat flex justify-center items-center">
            <div className="w-7/12">
                <div className="grid grid-cols-2 bg-white rounded-md overflow-hidden">
                    <div className="bg-slate-100 relative">
                        <h1 className="p-5 text-xl text-gray-600 font-bold">Flirt FLow App</h1>
                        <div className="flex items-center justify-center top-0 left-0 right-0 bottom-0 absolute">
                            <Image src={"/login-image.svg"} alt="login-image" className="w-3/4" width={0} height={0} />
                        </div>
                    </div>
                    <div className="py-12 px-10 space-y-5 text-gray-600">
                        <div>
                            <label htmlFor="email" className="text-sm font-semibold">Email</label>
                            <InputIcon type="email" name="email" id="email" placeholder="Enter your email" icon={<Envelope />} />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-semibold">Password</label>
                            <InputIcon type="password" email="password" id="password" icon={<LockClosed />} />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="bg-purple-500" />
                                <label htmlFor="" className="text-purple-500 text-xs font-bold">Rembember me</label>
                            </div>
                            <a className="text-purple-500 text-xs font-bold">Forgot Password?</a>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <button className="w-full border shadow-md rounded-md text-xs p-3 bg-white font-bold">Login with Goggle</button>
                            </div>
                            <div className="flex-1">
                                <button className=" active:bg-purple-400 w-full shadow-md text-white rounded-md text-xs p-3 bg-purple-500 font-bold">Login</button>
                            </div>
                        </div>
                        <div className="justify-center text-xs flex p-1">
                            Don&apos;t you have an account?. <a className="text-purple-500">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}