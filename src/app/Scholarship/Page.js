import React from 'react'
import Header from '../../Components/Header/Header'
import Image from 'next/image';
import one from "../../../public/one.png"
import two from "../../../public/two.png"
import three from "../../../public/three.png"
import four from "../../../public/four.png"
import five from "../../../public/five.png"


import admisiions from "../../../public/admissions.png"
import Footer from '@/Components/Footer/Footer';
import FloatingIcons from '@/Components/FloatingIcons/FloatingIcons';

const Page = () => {
    return (
        <>
            <main>
                <Header />
                <div className="flex flex-wrap py-8 px-6 md:px-12 sm:px-24 pr-0">
                    <div className="w-full md:w-1/2  p-4">
                        <h2 className="text-xl font-bold chancelorheading">Find the Course that Charts Your Path of Success</h2>
                        <p className="mt-2 chancelorparagraph">
                            Pick the course that suits your desire to  build a career in Mass Communication, Animation, Design, Fashion, Fine Arts, Journalism, and Commerce, easily to turn your Passion into Profession!
                        </p>
                        <div className='flex pt-8'>
                            <button className="text-white px-4 py-2 vp focus:outline-none">Apply Now</button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">

                        <Image src={admisiions} alt="Image Description"
                            className="max-w-full h-auto" />
                        <div className="w-full inset-0 flex items-center justify-center ">
                            <h1 className="  tpip">
                                Ace Your Career, Gyanarthi Way!                        </h1>
                        </div>

                    </div>

                </div>

                <div className="flex flex-wrap py-8 px-6 md:px-12 sm:px-24 ">
                    <div className="w-full md:w-full container  p-0 md:p-2 sm:p-4">
                        <h2 className="lifetime mb-4">Funding and Financial Aid </h2>
                        <p className="lifetimepara">
                            At Gyanarthi  College, it is important the students get an equal opportunity. However, Finances can be hindrance in that cause. In order to mitigate the relevant financial pressures and constraints, the college offers hefty scholarships to th students. These scholarships can be availed on the basis of education criteria. Furthermore, students can also seek relaxations based on Financial Status. The College always  promotes education and growth. In order to do so, we conduct scholarship tests in schools all across the city. Based on the marks obtained in the tests, the students can avail scholarship aid. The test is based on general aptitude and students of all backgrounds can attempt them.

                        </p>
                        <ul className="list-none pt-16">
                            <li className="pb-12 relative">
                                <span className="absolute top-0 left-0 h-full linewidth bg-gray-400"></span>
                                <span className="absolute top-0 left-0 flex items-center justify-center w-4 h-4 transform -translate-x-1/2 rounded-full bg-white border-2 border-yellow-500">
                                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                </span>


                                {/* <span className='circle'></span> */}
                                <p className='ml-4'>Gyanarthi  College offers scholarships to top-performing students in the 12th board examinations, identifying and rewarding academic excellence.</p>
                            </li>
                            <li className="pb-12 relative">
                                <span className="absolute top-0 left-0 h-full linewidth bg-gray-400"></span>
                                <span className="absolute top-0 left-0 flex items-center justify-center w-4 h-4 transform -translate-x-1/2 rounded-full bg-white border-2 border-yellow-500">
                                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                </span>                            <p className='ml-4'>                            The college provides scholarships for students from Uttarakhand under state quota, supporting local talent and promoting education within the state.
                                </p>

                            </li>
                            <li className="pb-12 relative">
                                <span className="absolute top-0 left-0 h-full linewidth bg-gray-400"></span>
                                <span className="absolute top-0 left-0 flex items-center justify-center w-4 h-4 transform -translate-x-1/2 rounded-full bg-white border-2 border-yellow-500">
                                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                                </span>
                                <p className='ml-4'>                            Scholarships are available for physically challenged individuals, aiming to make education accessible and inclusive for all students.
                                </p>

                            </li>
                            <li className="pb-12 relative">
                                <span className="absolute top-0 left-0 h-full linewidth bg-gray-400"></span>
                                <span className="absolute top-0 left-0 flex items-center justify-center w-4 h-4 transform -translate-x-1/2 rounded-full bg-white border-2 border-yellow-500">
                                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                </span>
                                <p className='ml-4'>                            Single female children can benefit from scholarships at Gyanarthi  College, empowering them to pursue their educational goals independently.  </p>

                            </li>
                            <li className="pb-12 relative">
                                <span className="absolute top-0 left-0 h-full linewidth bg-gray-400"></span>
                                <span className="absolute top-0 left-0 flex items-center justify-center w-4 h-4 transform -translate-x-1/2 rounded-full bg-white border-2 border-yellow-500">
                                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                </span>
                                <p className='ml-4'>                            Students with BPL cards can access scholarships, ensuring financial constraints do not hinder their educational
                                    aspirations.</p>

                            </li>
                            <li className="pb-12 relative">
                                <span className="absolute top-0 left-0 h-full linewidth bg-gray-400"></span>
                                <span className="absolute top-0 left-0 flex items-center justify-center w-4 h-4 transform -translate-x-1/2 rounded-full bg-white border-2 border-yellow-500">
                                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                </span>
                                <p className='ml-4'>                           National-level sports players are eligible for scholarships, acknowledging their dedication and achievements in sports alongside academic pursuits.</p>

                            </li>
                            <li className="pb-12 relative">
                                <span className="absolute top-0 left-0 h-full linewidth bg-gray-400"></span>
                                <span className="absolute top-0 left-0 flex items-center justify-center w-4 h-4 transform -translate-x-1/2 rounded-full bg-white border-2 border-yellow-500">
                                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                </span>
                                <p className='ml-4'>                           State-level sports players can avail of scholarships, encouraging sportsmanship and academic excellence among talented individuals at the state level.</p>

                            </li>
                            <li className="pb-12 relative">
                                <span className="absolute top-0 left-0 h-full linewidth bg-gray-400"></span>
                                <span className="absolute top-0 left-0 flex items-center justify-center w-4 h-4 transform -translate-x-1/2 rounded-full bg-white border-2 border-yellow-500">
                                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                </span>
                                <p className='ml-4'>                           Scholarships are also extended to district-level sports players, recognising their athletic achievements and supporting their educational journey.</p>

                            </li>
                            {/* Add similar list items with connecting lines */}
                        </ul>

                    </div>
                </div>
                <div className="flex flex-wrap py-8 px-6 md:px-12 sm:px-24 ">
                    <div className="w-full md:w-full container p-0 md:p-2 sm:p-4">
                        <h2 className="lifetime mb-4">Channel Your Awareness, Get Upto
                            100% Scholarship! </h2>
                        <p className="lifetimepara">
                            The students are provided with opportunities at Gyanarthi in the most feasible and accessible way. We conduct a yearly scholarship test for the aspirants in the city of Kashipur for the Gyanarthi courses. All across the city, the students are encouraged to attempt the scholarship test. This scholarship test has been carefully devised for the students to test their general awareness which is highly beneficial for careers in media, commerce, communication, and design.
                        </p>
                        <p className="lifetimepara pt-8">  The test is of the objective kind where students need to attempt General Knowledge questions in Multiple Choice Questions MCQ format. The award for this scholarship test ranges up to 100% Scholarship at the Gyanarthi.

                        </p><p className="lifetimepara pt-8"> While the scholarship test is open to every student studying at a school in the city of Kashipur, other students can also express their willingness to grab a chance at the scholarship by contacting the Gyanarthi Admissions Team.

                        </p><p className="lifetimepara pt-8"> We offer students scholarships based on their performance on the Scholarship Test. Top scorers are awarded 100% scholarships and based on the results, the scholarships are offered to the other students in a manner where the students can get an aid of 80%, 60%, 40%, and 20% of their course fees.

                            Gyanarthi  College aims to provide education in a manner that the students are not hindered by financial constraints in their pursuit of their dream careers. Our scholarships and financial aid criteria are the same as the eligibility conditions for the courses. Students can ease their path to success with the Gyanarthi  College!

                        </p>
                    </div></div>


                <section className=" py-12">
                    <div className="container mx-auto px-2 md:px-2 sm:px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold md:text-left text-center mb-4 md:mb-0">Start Your Gyanarthi Journey</h2>
                        </div>
                        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
                            <div className="w-full md:w-1/3 bg-blue-900 hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
                                <div className="p-8">
                                    <h3 className=" text-center mb-4 text-white journeyheading">Apply</h3>
                                    <p className="text-center mb-6 text-white journeypara">Fill out the Application Form for the upcoming session at Gyanarthi  College for the year 2026!</p>
                                    <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block">Apply Now</button>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 bg-blue-900 hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
                                <div className="p-8">
                                    <h3 className=" text-center mb-4 text-white journeyheading">Connect</h3>
                                    <p className="text-center mb-6 text-white journeypara">Reach Out to Gyanarthi’s Admission Team to secure your place at the College for the upcoming session.</p>
                                    <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block">Talk Now</button>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 bg-blue-900 hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
                                <div className="p-8">
                                    <h3 className="text-center mb-4 text-white journeyheading">Brochure</h3>
                                    <p className="text-center mb-6 text-white journeypara">Download the 2026 Brochure of the Gyanarthi  College and explore the Courses and College Life.</p>
                                    <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block">Download Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FloatingIcons />
                <Footer />

            </main>
        </>)
}

export default Page