import React from 'react'
import Image from 'next/image';
import course from '../../../public/course.png';

const Courses = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center py-16 homebutton">
                <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
                <p className="text-center max-w-3xl ">
                    Gyanarthi’s academic departments and professional courses are backed by industrial insights and strong academic curriculum. We are affiliated with the Kumaon University, state institution, which adds to the accreditation of our courses.
                </p>
            </section>
            <section className="flex flex-col md:flex-row justify-center container">
                {/* Left Column */}
                <div className="w-full md:w-3/5 flex flex-col justify-center space-y-8">
                    {/* First Row */}
                    <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8">
                        {/* First Card */}
                        <div className=" p-6 flex flex-col items-center space-y-4">
                            <Image src={course} alt="Course 1" className="w-full " />
                            <div className='flex'>
                                <div><h3 className="text-lg font-semibold">School of Commerce</h3>
                                    <p className="text-gray-500">5+ Students Viewing this course</p></div>
                                <div><button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button></div>
                            </div>


                        </div>
                        {/* Second Card - Similar structure */}
                        <div className=" p-6 flex flex-col items-center space-y-4">
                            <Image src={course} alt="Course 1" className="w-full " />
                            <div className='flex'>
                                <div><h3 className="text-lg font-semibold">School of Commerce</h3>
                                    <p className="text-gray-500">5+ Students Viewing this course</p></div>
                                <div><button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button></div>
                            </div>


                        </div>
                    </div>
                    {/* Second Row - Similar structure */}
                    <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8">
                        {/* Third Card */}
                        <div className=" p-6 flex flex-col items-center space-y-4">
                            <Image src={course} alt="Course 1" className="w-full " />
                            <div className='flex'>
                                <div><h3 className="text-lg font-semibold">School of Commerce</h3>
                                    <p className="text-gray-500">5+ Students Viewing this course</p></div>
                                <div><button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button></div>
                            </div>


                        </div>
                        {/* Fourth Card - Similar structure */}
                        <div className=" p-6 flex flex-col items-center space-y-4">
                            <Image src={course} alt="Course 1" className="w-full " />
                            <div className='flex'>
                                <div><h3 className="text-lg font-semibold">School of Commerce</h3>
                                    <p className="text-gray-500">5+ Students Viewing this course</p></div>
                                <div><button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button></div>
                            </div>


                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="w-full md:w-2/5 mt-8 md:mt-0">
                    <form className=" p-8 form">
                        {/* First Row */}
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">Find Your Course:</h3>
                        </div>
                        {/* Second Row */}
                        <div className="mb-4">
                            <p>Pursue the Futuristic course of your choice. Select your Discipline and Program from the list below:</p>
                        </div>
                        {/* Third Row */}
                        <div className="mb-4">
                            <label htmlFor="discipline" className="block mb-2">Select Discipline:</label>
                            <select id="discipline" name="discipline" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                                {/* Options for Discipline */}
                            </select>
                        </div>
                        {/* Fourth Row */}
                        <div className="mb-4">
                            <label htmlFor="program" className="block mb-2">Select Programme:</label>
                            <select id="program" name="program" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                                {/* Options for Programme */}
                            </select>
                        </div>
                        {/* Fifth Row */}
                        <div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none">View Program</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Courses;
