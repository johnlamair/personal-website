"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="text-black sm:pt-10" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-0 sm:px-4 sm:py-12 xl:px-12">
                <div className="flex justify-center">
                    <div className="relative border-[10px] bg-white border-white rounded-lg">
                        <Image
                            src="/images/hero-image.png"
                            width={350}
                            height={350}
                            alt="profile image"
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>

                <div className="mt-6 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black text-left">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg">
                        I'm interested in computer science and the historical forces that have shaped it. Alongside
                        coursework in computer science and a minor in math, I’ve studied the history of science, data,
                        and technology, with a particular interest in how computing shapes society and inequality.
                        <br /><br />
                        Outside of school, I enjoy skateboarding, filming and editing videos, watching movies, and
                        going to live music shows in NYC and my hometown, Austin.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
