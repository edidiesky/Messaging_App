import Link from 'next/link';
import React from 'react';
import AnimateTextWord from '@/components/common/AnimateTextWord';

const Footer = () => {
    return (
        <div
            className="relative"
        >
            <div className="h-full py-20 pb-12 flex flex-col gap-8 items-center justify-center w-full bg-[#f8f9f7]">
                <div className="w-full px-4 flex flex-col lg:items-center lg:justify-center gap-4">
                    <h2 className="text-7xl md:text-[150px] lg:text-[290px] family2 lg:text-center">
                        <AnimateTextWord type='bigtext'>
                            NexChat
                        </AnimateTextWord>

                    </h2>
                    <div className="md:w-[90%] mx-auto max-w-custom grid md:grid-cols-custom_2 gap-8">
                        <div className="w-[300px] flex flex-col gap-4">
                            <h4 className="text-base px-4 family2">Get started</h4>
                            <ul className="flex flex-col">
                                <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">Sign In</li>
                                <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">Sign Up</li>
                            </ul>
                        </div>

                        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-base px-4 family2">Product</h4>
                                <ul className="flex flex-col">
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">Overview</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">
                                        Startup Jobs</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">
                                        Web3 Jobs
                                    </li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">
                                        Featured
                                    </li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">
                                        Startup Hiring Data</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">
                                        Tech Startups
                                        Remote</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4 className="text-base px-4 family2">Company</h4>
                                <ul className="flex flex-col">
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">Overview</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">
                                        Curated</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">
                                        Recruit Pro
                                    </li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">
                                        RecruiterCloud
                                    </li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">Hire Developers</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">Pricing</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4 className="text-base px-4 family2">Resources</h4>
                                <ul className="flex flex-col">
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">Read Our Blog</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]"> Help Center</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">
                                        Security
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4 className="text-base px-4 family2">Legal</h4>
                                <ul className="flex flex-col">
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]">Terms Of Use</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#fff]"> Privacy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Footer;


