import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ title, description, gitUrl }) => {
    return (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 flex flex-col flex-grow">
                <h5 className="text-xl font-bold text-black mb-3">{title}</h5>
                <p className="text-slate-600 text-sm flex-grow">{description}</p>
                <div className="mt-6 flex justify-center">
                    <Link href={gitUrl} target="_blank" rel="noopener noreferrer" className="p-[4px] flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
                        <span className="bg-black hover:bg-slate-800 rounded-full px-5 py-2 flex items-center justify-center gap-2 text-sm font-medium">
                            <CodeBracketIcon className="h-4 w-4" />
                            View on GitHub
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
