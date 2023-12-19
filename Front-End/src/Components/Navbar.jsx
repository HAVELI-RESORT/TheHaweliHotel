import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'
export default function Navbar() {
    return (
        <>
            <nav className="fixed top-0 z-30 w-full p-4 text-black bg-yellow-600 bg-opacity-70">
                <div className="container flex h-[40px] items-center justify-between font-semibold">
                    <Link to="/" className="flex flex-row items-center justify-center gap-2">
                        <img src={logo} className="w-12 h-12 rounded-full" alt="Logo" />
                        <p className="text-lg font-bold rounded-xl sm:text-xl">THE HAWELI RESORT</p>
                    </Link>
                    <div className="flex flex-row items-center justify-center space-x-4">
                        <div className="hidden space-x-4 sm:flex sm:flex-row sm:justify-center sm:items-center ">
                            <Link to="/about">
                                <p className="hover:underline">ABOUT</p>
                            </Link>
                            <Link to="/accommodation">
                                <p className="hover:underline">ACCOMMODATION</p>
                            </Link>
                            <Link to="/restaurant">
                                <p className="hover:underline">RESTAURANT</p>
                            </Link>
                            <Link to="/eventscomp">
                                <p className="hover:underline">EVENTS</p>
                            </Link>
                            <Link to="/facilities">
                                <p className="hover:underline">FACILITIES</p>
                            </Link>
                            <Link to="/specialoffers">
                                <p className="hover:underline">SPECIAL OFFERS</p>
                            </Link>
                            <Link to="/gallerycomp">
                                <p className="hover:underline">GALLERY</p>
                            </Link>
                            <Link to="/contact">
                                <p className="hover:underline">CONTACT</p>
                            </Link>
                            <Link to="/bookingcomp">
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground h-10 py-2 px-4 hover:bg-yellow-700 bg-black text-white">
                                    BOOK NOW
                                </button>
                            </Link>
                        </div>
                        <div className="block sm:hidden ">
                            <button
                                className="inline-flex bg-black items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 w-full text-center text-black  border-2 border-black"
                                type="button"
                                id="radix-:Rkm:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
