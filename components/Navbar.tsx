import Link from "next/link"
import { IoAddCircleSharp } from 'react-icons/io5'
import { IoMdNotifications } from 'react-icons/io'
import { FaUserFriends } from 'react-icons/fa'
import { BiWallet } from 'react-icons/bi'
import { GiMeshNetwork } from 'react-icons/gi'
export default function Navbar() {
    return (
        <>

            <nav className='grid lg:justify-center lg:align-center lg:flex gap-3 p-3 px-4 bg-stone-900'>
                <div className="grid w-full xl:justify-center xl:flex basis-5/12 text-2xl gap-2 divide-x">
                    {/* <button className="p-1 px-8 bg-rose-800 hover:bg-rose-900 rounded-2xl">Login</button>
                    <button className="p-1 px-8 bg-rose-800 hover:bg-rose-900 rounded-2xl">Signup</button> */}
                    <Link href="/">
                        <a className="flex align-center items-center">
                            <svg fill="none" viewBox="0 0 40 40" className="hover:opacity-80 w-12 m-2 h-12"><circle cx="20" cy="20" r="20" fill="#555" /><circle cx="20" cy="20" r="5" fill="#a0253c" /><path d="M5.23,33.38c-.14-.15-.23-.36-.23-.57,0-2.17,0-13.87,0-13.87,0,0,.26-13.05,14.06-14.06,11.65-.85,22.8,14.62,11.23,25.96-.02,.02-.03,.03-.04,.05-.27,.31-3.49,3.88-9.49,4.16-.46,.02-.84,.4-.83,.86l.06,3.27c0,.47-.14,.78-.61,.79-.74,.02-2.16-.05-3.77-.46-.36-.09-.6-.42-.6-.79v-8.86c0-.6,.6-1,1.16-.79,1.74,.68,5.19,1.51,8.66-.54,4.93-2.93,4.93-7.86,4.93-7.86,0,0,.31-10.44-10.44-10.44,0,0-8.31,.13-9.32,9.27,0,.03,0,.07,0,.1l.02,16.03c0,.68-.75,1.08-1.32,.71-.92-.61-2.21-1.59-3.48-2.94Z" fill="#333" /></svg>
                        </a>
                    </Link>
                    <Link href="/login">
                        <button className="flex items-center align-center gap-3 px-6">
                            <svg fill="none" viewBox="0 0 40 40" className="w-10 h-10"><circle cx="20" cy="20" r="20" fill="#555" /><circle cx="20" cy="20" r="5" fill="#a0253c" /><path d="M5.23,33.38c-.14-.15-.23-.36-.23-.57,0-2.17,0-13.87,0-13.87,0,0,.26-13.05,14.06-14.06,11.65-.85,22.8,14.62,11.23,25.96-.02,.02-.03,.03-.04,.05-.27,.31-3.49,3.88-9.49,4.16-.46,.02-.84,.4-.83,.86l.06,3.27c0,.47-.14,.78-.61,.79-.74,.02-2.16-.05-3.77-.46-.36-.09-.6-.42-.6-.79v-8.86c0-.6,.6-1,1.16-.79,1.74,.68,5.19,1.51,8.66-.54,4.93-2.93,4.93-7.86,4.93-7.86,0,0,.31-10.44-10.44-10.44,0,0-8.31,.13-9.32,9.27,0,.03,0,.07,0,.1l.02,16.03c0,.68-.75,1.08-1.32,.71-.92-.61-2.21-1.59-3.48-2.94Z" fill="#333" /></svg>
                            <span>test</span>
                        </button>
                    </Link>
                    <button className="flex items-center align-center gap-3 px-6">
                        <BiWallet />
                        <span className="">100.00</span>
                    </button>
                    <button className="flex items-center align-center gap-3 px-6">
                        <IoMdNotifications />
                        <span>Notifications</span>
                    </button>

                </div>

                <div className="flex gap-2 basis-8/12">
                    <div className="grid w-full xl:align-center xl:justify-center 2xl:flex gap-2 text-2xl">
                        <div className="flex align-center gap-2">
                            <button type="submit" className="flex align-center items-center p-1 hover:opacity-80 bg-stone-800 rounded px-4 focus:outline-none focus:shadow-outline">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                            <input className="text-normal sm:text-2xl hover:opacity-80 rounded-lg px-4 basis-full" placeholder="Discover Filipino creators!" />
                        </div>
                        <div className="grid lg:flex items-center align-center gap-4 lg:divide-x">
                            <button className="flex items-center align-center">
                                <span className="rounded flex items-center align-center px-2 mx-1">
                                    <IoAddCircleSharp />
                                </span>
                                Upload
                            </button>
                            <button className="flex items-center align-center">
                                <span className="rounded flex items-center align-center px-2 mx-1">
                                    <GiMeshNetwork />
                                </span>
                                Communities
                            </button>
                            <button className="flex items-center align-center">
                                <span className="rounded flex items-center align-center px-2 mx-1">
                                    <FaUserFriends />
                                </span>
                                Friends
                            </button>
                            <button className="flex items-center align-center">
                                <span className="rounded flex items-center align-center px-2 mx-1">
                                    <IoAddCircleSharp />
                                </span>
                                Messages
                            </button>
                        </div>
                    </div>
                </div>


            </nav>

        </>
    )
}