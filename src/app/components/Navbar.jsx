"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Portfolio", path: "#portfolio" },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border border-slate-200 border-l-transparent border-r-transparent top-0 left-0 right-0 z-10 bg-white bg-opacity-100">
            <div className="flex container lg:py-4 lg:px-2 flex-wrap items-center justify-between mx-auto px-4 py-4">
                <Link href={"/"} className="text-2xl md:text-5xl text-black font-semibold"></Link>
                <div className="mobile-menu block md:hidden">
                    <button onClick={() => setNavbarOpen(!navbarOpen)} className="flex items-center px-3 py-2 border rounded border-black text-black">
                        {navbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                    </button>
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}><NavLink href={link.path} title={link.title} /></li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen && (
                <div className="md:hidden bg-white border-t border-slate-200">
                    <ul className="flex flex-col items-center gap-0 py-2">
                        {navLinks.map((link, index) => (
                            <li key={index} className="w-full text-center">
                                <a href={link.path} onClick={() => setNavbarOpen(false)} className="block w-full py-4 text-lg font-medium text-black hover:bg-slate-100 transition-colors">{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar
