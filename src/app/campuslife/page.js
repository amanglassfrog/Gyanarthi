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

const page = () => {
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
                            At Gyanarthi Media College, it is important the students get an equal opportunity. However, Finances can be hindrance in that cause. In order to mitigate the relevant financial pressures and constraints, the college offers hefty scholarships to th students. These scholarships can be availed on the basis of education criteria. Furthermore, students can also seek relaxations based on Financial Status. The College always  promotes education and growth. In order to do so, we conduct scholarship tests in schools all across the city. Based on the marks obtained in the tests, the students can avail scholarship aid. The test is based on general aptitude and students of all backgrounds can attempt them.

                        </p>


                    </div>
                </div>


                <section className=" py-12">
                    <div className="container mx-auto px-2 md:px-2 sm:px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold md:text-left text-center mb-4 md:mb-0">Start Your Gyanarthi Journey</h2>
                        </div>
                        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
                            <div className="w-full md:w-1/3 bg-blue-900 hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
                                <div className="p-8">
                                    <h3 className=" text-center mb-4 text-white journeyheading">Apply</h3>
                                    <p className="text-center mb-6 text-white journeypara">Fill out the Application Form for the upcoming session at Gyanarthi Media College for the year 2024!</p>
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
                                    <p className="text-center mb-6 text-white journeypara">Download the 2024 Brochure of the Gyanarthi Media College and explore the Courses and College Life.</p>
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

export default page