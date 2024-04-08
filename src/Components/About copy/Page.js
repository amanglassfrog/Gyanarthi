"use client"
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'next/image';
import edge from '../../../public/edge.png';
import college from "../../../public/college.png"
import Header from '../Header/Header';
import Courses from '../Courses/Courses';



const Page = () => {
    return (
        <>
            <Header />
            <div>
                {/* Full-width image */}
                <div className="relative">
                    <div>
                        <Image src={college} alt="Course 1" className="w-full h-auto" /></div>
                    {/* Text overlay */}
                    <div className=" inset-0 flex items-center justify-center ">
                        <h1 className=" text-2xl md:text-4xl font-bold text-center tpip">
                            We’ve placed 10 k students, get you placement!                        </h1>
                    </div>
                </div>




            </div>
            <Courses />
            <div className='py-8 px-24'>
                <h2 className="text-2xl font-bold mb-4">Gyanarthi Give You an Edge</h2>
                <p className="text-gray-700">
                    Gyanarthi  has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation. Gyanarthi  has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation. Gyanarthi  has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation.
                </p>
                <Tabs className="vtabs">
                    <TabList className="etablist">
                        <Tab className=" etab ">BA</Tab>
                        <Tab className="etab ">B.Com</Tab>
                        <Tab className="etab ">MA</Tab>


                    </TabList>
                    <div>

                        <TabPanel className="tabpanel">
                            <Image src={edge} alt="amazon" />

                            <p>Gyanarthi  has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation. Gyanarthi  has contributed to students so that they can work in their dream company.</p>
                        </TabPanel>
                        <TabPanel className="tabpanel">
                            <Image src={edge} alt="amazon" />

                            <p>Gyanarthi  has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation. Gyanarthi  has contributed to students so that they can work in their dream company.</p>

                        </TabPanel>
                        <TabPanel className="tabpanel">
                            <Image src={edge} alt="amazon" />

                            <p>Gyanarthi  has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation. Gyanarthi  has contributed to students so that they can work in their dream company.</p>

                        </TabPanel>


                    </div>
                </Tabs>
            </div>
        </>)

}

export default Page