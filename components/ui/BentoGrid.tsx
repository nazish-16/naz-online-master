'use client'

import { cn } from "@/utils/cn";
import Lottie from "react-lottie";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from '@/components/data/confetti.json'
import Button from './Button'
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number
    img?: string
    imgClassName?: string
    titleClassName?: string
    spareImg?: string
}) => {
    const [copied, setCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('realnazishahmed@gmail.com');
        setCopied(true);
    }
    return (
        <div
            className={cn(
                "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 overflow-hidden",
                className
            )}
            style={{
                background: 'rgb(4,7,29)',
                backgroundColor: 'gradient...'
            }}
        >
            <div className={`${id === 6} && flex justify-center h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'object-cover, object-center')}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5} && w-full opacity-80`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className={'object-cover, object-center, w-full, h-full'}
                        />
                    )}
                </div>
                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10'
                )}>
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:tex-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold tex-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>
                    {id === 2 && <GlobeDemo />}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 absolute w-fit -right-20 lg:-right-20">
                            <div className="flex flex-col relative top-10 gap-4 lg:gap-8">
                                {['React.js', 'Next.js', 'Typescript','Python'].map((item) => (
                                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e] w-full hover:bg-[#11153d]">
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-col relative top-10 gap-4 lg:gap-8">
                                {['Javascript', 'Html', 'CSS','Discord.js'].map((item) => (
                                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e] w-full hover:bg-[#11153d]">
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-col relative top-10 gap-4 lg:gap-8">
                                {['Tailwind', 'Bootstrap', 'Material UI','Figma'].map((item) => (
                                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e] w-full hover:bg-[#11153d]">
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-col relative top-10 gap-4 lg:gap-8">
                                {['Accentricity', 'Git', 'Node.js','Prompt'].map((item) => (
                                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e] w-full hover:bg-[#11153d]">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }} />
                            </div>
                            <Button
                                title={copied ? 'Email Copied' : 'Copy my Email'}
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="!bg-[#161a31]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
