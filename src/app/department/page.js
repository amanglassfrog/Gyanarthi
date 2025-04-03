"use client"
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'next/image';
import edge from '../../../public/edge.png';
import college from "../../../public/college.png"
import Header from '../../Components/Header/Header';
import Courses from '../../Components/Courses/Courses';
import Homegallery from '../../Components/Homegallery/Homegallery';
import Footer from '../../Components/Footer/Footer';
import com from "../../../public/commerce.png"
import design from "../../../public/design.png"
import media from "../../../public/media.png"
import arts from "../../../public/arts.png"
import FloatingIcons from '@/Components/FloatingIcons/FloatingIcons';



const page = () => {
    return (
        <>
            <main>
                <Header />
                <div>
                    {/* Full-width image */}
                    <div className="relative pb-16">
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
                <div className='py-8 px-6 md:px-12 sm:px-24 '>
                    <h2 className="text-2xl font-bold mb-4">Get Placement with Gyanarthi! </h2>
                    <p className="text-gray-700">
                        The Gyanarthi  College is more about learning skills and understanding that placement is not about degrees but potential. We prepare our students in way that they are ready for all sorts of interviews and workspace commitments. So far, we have placed out students in more than 150 companies across the country. The students have turned out to be successful professionals and their practical as well as theoretical understanding has proven beneficial in corporate world.                 </p>
                    <Tabs className="vtabs pt-16">
                        <TabList className="etablist">
                            <Tab className=" etab ">Commerce</Tab>
                            <Tab className="etab ">Media and Journalism</Tab>
                            <Tab className="etab ">Fine Arts</Tab>
                            <Tab className="etab ">Animation and Design </Tab>



                        </TabList>
                        <div>

                            <TabPanel className="tabpanel">
                                <Image src={com} alt="amazon" />

                                <p>Commerce is more than just education. It is a concept and the devised courses in this arena at th Gyanarthi  College are all about providing that cutting edge to our students in emerging fields in this domain. With courses in International Business, Taxation, and more, we strive to elevate the B Com experience!
                                </p>
                            </TabPanel>
                            <TabPanel className="tabpanel">
                                <Image src={media} alt="amazon" />

                                <p>Media and Journalism courses at Gyanarthi are all focused on creating a strong community of media professionals who can support the spirit of journalism. Our faculty has thoroughly supported the budding dreams in this field and shall continue to do so!
                                </p>

                            </TabPanel>
                            <TabPanel className="tabpanel">
                                <Image src={arts} alt="amazon" />

                                <p>Fine Arts Courses are rarely available in the city of Kashipur. However, with the growing urge of creativity, they are inevitable. Gyanarthi  College brings forward a structured curriculum for the students to learn the techniques and concepts of Fine Arts while being true to their artistic selves!
                                </p>

                            </TabPanel>
                            <TabPanel className="tabpanel">
                                <Image src={design} alt="amazon" />

                                <p>The Animation and Design domain at the Gyanarthi  College is more than just a degree. We focus on the holistic development of the students and hone their skills. Students at Gyanarthi are able to explore the depths of their creativity through expert techniques.
                                </p>

                            </TabPanel>


                        </div>
                    </Tabs>
                </div>
                <Homegallery />
                <FloatingIcons />
                <Footer />
            </main>
        </>)

}

export default page