"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const creativeData = [
    {
        id: 1,
        title: "Type III Fun",
        description: "A skate video I filmed and edited during sophomore year, featured by Quartersnacks and viewed over 180,000 times",
        preview: "/thumbnails/type-3-fun-thumbnail.jpg",
        url: "https://youtu.be/Rr1wfxNYkjk?si=4PKkM676RwtKtOyh",
        linkLabel: "Watch on YouTube",
    },
    {
        id: 2,
        title: "THAT SUCKS",
        description: "A skate photography collection from my senior year of high school, with all 50 copies sold on opening night",
        preview: "/thumbnails/that-sucks-thumbnail.jpg",
        url: "/zines/that-sucks-portfolio.pdf",
        linkLabel: "Read Zine",
    },
    {
        id: 3,
        title: "Bricollage Magazine",
        description: "The inaugural print magazine for NYU Paris, created by a 15-person team under my direction as Editor-in-Chief",
        preview: "/thumbnails/bricollage-thumbnail.jpg",
        url: "/zines/bricollage-portfolio.pdf",
        linkLabel: "Read Zine",
    },
];

const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

const CreativeSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="portfolio" className="pt-20 pb-20">
            <h2 className="text-black mb-12 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center">
                Creative Work
            </h2>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {creativeData.map((item, index) => (
              <motion.li
                key={item.id}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-48 bg-slate-100">
                <Image src={item.preview} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h5 className="text-xl font-bold text-black mb-3">{item.title}</h5>
                <p className="text-slate-600 text-sm flex-grow">{item.description}</p>
                <div className="mt-6 flex justify-center">
                  <Link href={item.url} target="_blank" rel="noopener noreferrer" className="p-[4px] flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
                    <span className="bg-black hover:bg-slate-800 rounded-full px-5 py-2 flex items-center justify-center gap-2 text-sm font-medium">
                      {item.linkLabel}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default CreativeSection;
