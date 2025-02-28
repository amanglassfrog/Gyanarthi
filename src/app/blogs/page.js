// src/app/bloglist/page.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import admissions from '../../../public/admissions.png';
import posts from '../data/posts';
import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer';
import { slugify } from '@/utils';
import parse from 'html-react-parser';
import FloatingIcons from '@/Components/FloatingIcons/FloatingIcons';
import Head from 'next/head';
import blog1img from "../../../public/gyan1.png";
import logo from "../../../public/GyanarthiLogo.png";
import blog21img from "../../../public/blog21.png"


const Bloglist = () => {
    return (
        <>
            
            <Header />
            <div className="flex flex-wrap py-8 px-0 md:px-12 sm:px-24 pr-0 items-center justify-center">
                <div className='container flex flex-col md:flex-row sm:flex-row items-center'>
                    <div className="w-full md:w-1/2 p-4">
                        <h1 className="text-xl font-bold chancelorheading">Latest News and Knowledge Base</h1>
                        <p className="mt-2 chancelorparagraph">
                            Seeking more information about our college and courses? Check out our blogs and knowledge base for all the details pertaining to courses such as Bachelor of Commerce, Bachelor in Journalism and Mass Communication, Bachelor of Science in Fashion Designing, Bachelor of Fine Arts, and more. Know about the college life, clubs, and more subsequently. </p>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <Image src={admissions} alt="Image Description" className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
            <div className="bg-white pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 container">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the Blog</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Learn more from our knowledge base and gain the Defence perspective!
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                       <Link  href="/8-upsides-of-mass-communication-and-journalism">
                                <div className="flex max-w-xl flex-col items-start justify-between blogcard">
                                    <div style={{height:"16rem"}}>
                                        <Image src={blog1img} alt="Gyanarthi" style={{height:"inherit"}}/>
                                    </div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time  className="text-gray-500">
                                           24 June 2025
                                        </time>
                                        <a
                                            href="#"
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
Course                                        </a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <span className="absolute inset-0" />
8 Upsides of Mass Communication and Journalism                                        </h3>
                                        {/* <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">                            {parse(post.description)}
                                        </p> */}
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        <Image src={logo} alt="Gyanarthi" className="h-12 rounded-full bg-gray-50" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <span className="absolute inset-0" />
Gyanarthi Media                                             </p>
                                            <p className="text-gray-600">College</p>
                                        </div>
                                    </div>
                                </div>
                        </Link>
                        

                        <Link  href="/how-does-bfa-boost-your-creativity">
                                <div className="flex max-w-xl flex-col items-start justify-between blogcard">
                                    <div style={{height:"16rem"}}>
                                        <Image src={blog21img} alt="Gyanarthi" style={{height:"inherit"}}/>
                                    </div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time  className="text-gray-500">
                                           24 June 2025
                                        </time>
                                        <a
                                            href="#"
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
Course                                        </a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <span className="absolute inset-0" />
HOW DOES BFA BOOST YOUR CREATIVITY?                                      </h3>
                                        {/* <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">                            {parse(post.description)}
                                        </p> */}
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        <Image src={logo} alt="Gyanarthi" className="h-12  rounded-full bg-gray-50" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <span className="absolute inset-0" />
Gyanarthi Media                                             </p>
                                            <p className="text-gray-600">College</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                    </div>
                    
                </div>
            </div>
            <Footer />
            <FloatingIcons />
        </>
    );
};

export default Bloglist;
