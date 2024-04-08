import React from 'react'
import Image from 'next/image';
import college from "../../../public/college.png"
import text from "../../../public/2010.png"
import Header from '../Header/Header';



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
                            Transforming Passion into Professions!
                        </h1>
                    </div>
                </div>




            </div>
            <div className=" py-8">
                <div className="container mx-auto px-24">
                    <div className=" mx-auto">
                        <p className="text-lg text-gray-800">
                            Gyanarthi Media College is located in the picturesque city of Kashipur and is affiliated with Kumaun University, Nainital. <br></br><br></br>GMC provides courses in Commerce, Fashion Designing, Animation, Fine Arts, Communication & Journalism, Filmmaking at undergraduate and postgraduate levels, and offers Postgraduate Programs in various verticals of the media such as Digital Marketing, Advertising and Communications, Animation, Event Management & Filmmaking. GMC goes beyond the traditional teaching method and focuses more on the self-discovery of students’ potential. Gyanarthi boasts of rich cultural engagement and academic excellence.
                        </p>
                    </div>
                </div>
            </div>
            <div >
                <div className="container mx-auto px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* First Column */}
                        <div className="p-4 flex justify-end">
                            <Image src={text} alt="Course 1" className="text2010" />
                        </div>
                        {/* Second Column */}
                        <div className="p-4 text2010border">
                            <ul>
                                <li className="text-lg text-gray-800">
                                    Gyanarthi Media College in Kashipur, affiliated to Kumaun University, provides a creative space where imagination meets ingenuity.
                                </li>
                                <li className="text-lg text-gray-800">
                                    With state-of-the-art resources, professional art equipment, intensive curriculum, and creative & visionary faculty, we guide budding artists in maximizing their potential.
                                </li><li className="text-lg text-gray-800">
                                    GMC is a premier Media & Fashion College in a state-of-the-art infrastructure, where students, researchers, and media professionals interact to facilitate dynamic career paths.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="container mx-auto px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Second Column */}
                        <div className="p-4">
                            <ul>
                                <li className="text-lg text-gray-800">
                                    Gyanarthi Media College in Kashipur, affiliated to Kumaun University, provides a creative space where imagination meets ingenuity.
                                </li>
                                <li className="text-lg text-gray-800">
                                    With state-of-the-art resources, professional art equipment, intensive curriculum, and creative & visionary faculty, we guide budding artists in maximizing their potential.
                                </li><li className="text-lg text-gray-800">
                                    GMC is a premier Media & Fashion College in a state-of-the-art infrastructure, where students, researchers, and media professionals interact to facilitate dynamic career paths.
                                </li>
                            </ul>
                        </div>
                        {/* First Column */}
                        <div className="p-4 text2010border">
                            <Image src={text} alt="Course 1" className="text2010" />
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="container mx-auto px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* First Column */}
                        <div className="p-4 flex justify-end">
                            <Image src={text} alt="Course 1" className="text2010" />
                        </div>
                        {/* Second Column */}
                        <div className="p-4 text2010border">
                            <ul>
                                <li className="text-lg text-gray-800">
                                    Gyanarthi Media College in Kashipur, affiliated to Kumaun University, provides a creative space where imagination meets ingenuity.
                                </li>
                                <li className="text-lg text-gray-800">
                                    With state-of-the-art resources, professional art equipment, intensive curriculum, and creative & visionary faculty, we guide budding artists in maximizing their potential.
                                </li><li className="text-lg text-gray-800">
                                    GMC is a premier Media & Fashion College in a state-of-the-art infrastructure, where students, researchers, and media professionals interact to facilitate dynamic career paths.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="container mx-auto px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Second Column */}
                        <div className="p-4">
                            <ul>
                                <li className="text-lg text-gray-800">
                                    Gyanarthi Media College in Kashipur, affiliated to Kumaun University, provides a creative space where imagination meets ingenuity.
                                </li>
                                <li className="text-lg text-gray-800">
                                    With state-of-the-art resources, professional art equipment, intensive curriculum, and creative & visionary faculty, we guide budding artists in maximizing their potential.
                                </li><li className="text-lg text-gray-800">
                                    GMC is a premier Media & Fashion College in a state-of-the-art infrastructure, where students, researchers, and media professionals interact to facilitate dynamic career paths.
                                </li>
                            </ul>
                        </div>
                        {/* First Column */}
                        <div className="p-4 text2010border">
                            <Image src={text} alt="Course 1" className="text2010" />
                        </div>
                    </div>
                </div>
            </div>
        </>)

}

export default Page