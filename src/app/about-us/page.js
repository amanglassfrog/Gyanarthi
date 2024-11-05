import React from 'react'
import Image from 'next/image';
import college from "../../../public/college.png"
import vision from "../../../public/vision.png"


import Header from '../../Components/Header/Header';
import Services from './Services';
import Edge from './Edge';
import Footer from '@/Components/Footer/Footer';
import FloatingIcons from '@/Components/FloatingIcons/FloatingIcons';

const page = () => {
  return (
    <>
      <main>
        <Header />
        <div>
          {/* Full-width image */}
          <div className="relative -z-10">
            <div>
              <Image src={college} alt="Course 1" className="w-full h-auto" /></div>
            {/* Text overlay */}
            <div className=" inset-0 flex items-center justify-center ">
              <h1 className=" text-2xl md:text-4xl font-bold text-center tpip">
                Advance You Career with Gyanarthi Approach!               </h1>
            </div>
          </div>




        </div>
        <Services />
        <div className="py-8  p-6 md:p-12 sm:px-24">
          <div className="container mx-auto flex flex-col md:flex-row">
            {/* First Column (Image) */}
            <div className="md:w-1/2">
              <Image src={vision} alt="Course 1" className="w-full h-auto" />
            </div>
            {/* Second Column (Text) */}
            <div className=" md:ml-4 vision">
              <div className="vis mx-auto">
                <h2 className="emx mb-4">Education Meets Expertise</h2>
                <p className="text-gray-700">
                  Gyanarthi Media College is a space where education meets expertise. Our Expert Faculty devises a highly personalized and specific curriculum for students. Teaching Methods at Gyanarthi are more about practical implications rather than theoretical practices. Teachers at Gyanarthi understand the particular requisites of the students and, accordingly, devise strategies to help them conceive the concepts. The relevant problems and solutions are backed by vital conceptual clearance, which reflects solid educative values.</p><br></br><br></br>
                <p className="text-gray-700 mt-4">
                  Students at Gyanarthi are prepared to work at enterprises that are best in their respective industries. They are accordingly provided with an education that supports this vision. The teachers are more inclined towards making learning insightful yet enjoyable. This is what sets Gyanarthi apart from all the other places of education. The college becomes home for students.   </p>

              </div>
            </div>
          </div>
        </div>
        <Edge />
        <Footer />
        <FloatingIcons />
      </main>
    </>)
}

export default page