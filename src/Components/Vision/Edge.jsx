"use client"
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'next/image';
import edge from '../../../public/edge.png';

const Edge = () => {
    return (
        <div className='py-8 px-24'>
            <h2 className="text-2xl font-bold mb-4">Gyanarthi Give You an Edge</h2>
            <p className="text-gray-700">
                Gyanarthi  has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation. Gyanarthi  has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation. Gyanarthi  has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation.
            </p>
            <Tabs className="vtabs">
                <TabList className="etablist">
                    <Tab className=" etab ">Academic Excellence</Tab>
                    <Tab className="etab ">Academic Excellence</Tab>
                    <Tab className="etab ">Academic Excellence</Tab>
                    <Tab className="etab ">Academic Excellence</Tab>
                    <Tab className="etab ">Academic Excellence</Tab>
                    <Tab className="etab ">Academic Excellence</Tab>
                    <Tab className="etab ">Academic Excellence</Tab>

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
                    <TabPanel className="tabpanel">
                        <Image src={edge} alt="amazon" />

                        <p>Gyanarthi  has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation. Gyanarthi  has contributed to students so that they can work in their dream company.</p>

                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}

export default Edge