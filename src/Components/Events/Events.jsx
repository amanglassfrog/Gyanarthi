import React from 'react'
import Image from 'next/image';
import event1 from '../../../public/events1.png';
import event2 from '../../../public/events2.png';
import event3 from '../../../public/events3.png';



const Events = () => {
    return (
        <section className="py-12 px-4 md:px-0">
            <div className="max-w-6xl mx-auto">
                {/* First Row */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold">News and Events</h2>
                </div>

                {/* Second Row */}
                <div className="mb-8 text-center">
                    <p className="text-lg">
                        Graduate and Postgraduate levels of education are extremely crucial. At Gyanarthi, we ensure that students are able to gain an unmatchable experience that is supported by educative exposures. Events at our college provide the students with an opportunity to channel their creativity and learn life skills.
                    </p>
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Blog Post 1 */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <Image src={event1} alt="amazon" className="w-full h-auto rounded-md mb-4" />
                        <p className="text-gray-500 text-sm mb-2">August 15, 2023</p>
                        <h3 className="text-xl font-bold mb-2">Campus Fest</h3>
                        <p className="text-base mb-4">Gyanarthi has contributed to students so that they can work in their dream company.</p>
                        <p className="text-blue-500 cursor-pointer">Check More</p>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <Image src={event2} alt="amazon" className="w-full h-auto rounded-md mb-4" />
                        <p className="text-gray-500 text-sm mb-2">August 15, 2023</p>
                        <h3 className="text-xl font-bold mb-2">Campus Fest</h3>
                        <p className="text-base mb-4">Gyanarthi has contributed to students so that they can work in their dream company.</p>
                        <p className="text-blue-500 cursor-pointer">Check More</p>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <Image src={event3} alt="amazon" className="w-full h-auto rounded-md mb-4" />
                        <p className="text-gray-500 text-sm mb-2">August 15, 2023</p>
                        <h3 className="text-xl font-bold mb-2">Campus Fest</h3>
                        <p className="text-base mb-4">Gyanarthi has contributed to students so that they can work in their dream company.</p>
                        <p className="text-blue-500 cursor-pointer">Check More</p>
                    </div>
                </div>
            </div>
        </section>)
}

export default Events