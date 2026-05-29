import React from 'react'
import Image from 'next/image'
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="flex min-h-screen items-center justify-center -mt-16 pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-12 place-self-center text-center sm:text-left">

                    <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <div className="text text-center sm:text-left">Hello, I&apos;m </div>
                        <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-black text-5xl sm:text-[120px] lg:text-[140px] text-left sm:text-center">
                            John LaMair
                        </span>
                    </h1>

                    <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
                        I&apos;m a fourth year student at New York University studying computer science and its history.
                    </p>

                    <div className="flex items-center justify-center gap-4">

                        <a href="mailto:john.lamair@nyu.edu" className="p-[4px] flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
                            <span className="bg-black hover:bg-slate-800 rounded-full px-5 py-2 flex items-center justify-center">
                                <Image src="/email-icon.png" alt="Email" width={25} height={25} />
                            </span>
                        </a>

                        <Link href="/John_LaMair_Resume_CS_May28.pdf" target="_blank" rel="noopener noreferrer" className="p-[4px] flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
                            <span className="bg-black hover:bg-slate-800 rounded-full px-5 py-2 flex items-center justify-center">
                                <Image src="/resume-icon.png" alt="Resume" width={25} height={25} />
                            </span>
                        </Link>

                        <Link href="https://www.linkedin.com/in/johnlamair" target="_blank" rel="noopener noreferrer" className="p-[4px] flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
                            <span className="bg-black hover:bg-slate-800 rounded-full px-5 py-2 flex items-center justify-center">
                                <Image src="/linkedin-icon.png" alt="LinkedIn" width={25} height={25} />
                            </span>
                        </Link>

                        <Link href="https://www.github.com/johnlamair" target="_blank" rel="noopener noreferrer" className="p-[4px] flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
                            <span className="bg-black hover:bg-slate-800 rounded-full px-5 py-2 flex items-center justify-center">
                                <Image src="/github-icon.png" alt="GitHub" width={25} height={25} />
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection
