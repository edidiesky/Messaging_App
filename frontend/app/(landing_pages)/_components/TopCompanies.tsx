import Image from 'next/image';

import React from 'react';
import AnimateTextWord from '@/components/common/AnimateTextWord';

const TopCompanies = () => {
    return (
        <div className='flex w-full py-8 items-center bg-[#fff] gap-8 justify-center'>
            <div className="max-w-custom mx-auto w-[90%] ">

                <div className="py-20 px-8 border flex flex-col gap-12 md:gap-16 w-full rounded-3xl bg-[#fcfcfd]">
                    <h2 className="text-3xl lg:text-5xl w-full lg:mx-auto max-w-[750px] leading-[1.3] md:text-center capitalize text-dark family2">
                        <AnimateTextWord type='bigtext_Center'>
                            Built for customer support, marketing, and sales. All together.
                        </AnimateTextWord>
                    </h2>
                    <div className="w-full grid md:grid-cols-3 gap-6">
                        <div className="py-6 px-4 bg-[#f6f6f6] border rounded-lg w-full flex flex-col gap-4">
                            <div className="w-[80px] h-[70px] relative rounded-[10px]">
                                <Image
                                    fill
                                    alt={'Photo Image Descriptioon'}
                                    src={'/images/icon_1.png'}
                                    className='w-full object-cover'
                                />
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <h3 className="text-2xl family2">Customer Support</h3>
                                <p className="text-base">
                                    Retarget customers by sending target emails and in-app messages

                                </p>
                            </div>
                        </div>
                        <div className="py-6 px-4 bg-[#f6f6f6] border rounded-lg w-full flex flex-col gap-4">
                            <div className="w-[80px] h-[70px] relative rounded-[10px]">
                                <Image
                                    fill
                                    alt={'Photo Image Descriptioon'}
                                    src={'/images/icon_2.png'}
                                    className='w-full object-cover'
                                />
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <h3 className="text-2xl family2">Inbound Sales</h3>
                                <p className="text-base">
                                    Retarget customers by sending target emails and in-app messages

                                </p>
                            </div>
                        </div>
                        <div className="py-6 px-4 bg-[#f6f6f6] border rounded-lg w-full flex flex-col gap-4">
                            <div className="w-[80px] h-[70px] relative rounded-[10px]">
                                <Image
                                    fill
                                    alt={'Photo Image Descriptioon'}
                                    src={'/images/icons_3.png'}
                                    className='w-full object-cover'
                                />
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <h3 className="text-2xl family2">Marketing</h3>
                                <p className="text-base">
                                    Cross-channel customer support experiences using modern messaging

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full p-4 bg-[#f6f6f6] rounded-2xl border">
                        <div className="w-full h-[380px] relative lg:h-[600px] rounded-2xl">
                            <Image
                                fill
                                alt={'Photo Image Descriptioon'}
                                src={'/images/image_1.jpeg'}
                                className='w-full object-cover rounded-2xl'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCompanies;