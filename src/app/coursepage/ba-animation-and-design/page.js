"use client";

import React from 'react';
import Image from 'next/image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Homegallery from '@/Components/Homegallery/Homegallery';
import Footer from '@/Components/Footer/Footer';
import wp from "../../../../public/wp.png";
import apply from "../../../../public/apply.png";
import download from "../../../../public/download.png";
import FAQSection from '../../FAQ/FAQSection';
import Header from '@/Components/Header/Header';
import admisiions from '../../../../public/admissions.png';


const page = () => {
 

  return (
    <>
      <main>
        <Header/>
        <div className='flex justify-center'>
          <div className="flex flex-wrap py-8 container">
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-xl font-bold chancelorheading">BA Courses in Animation and Multimedia</h1>
              <p className="mt-2 chancelorparagraph pt-3">
                Session Starts – August 2024<br /><br />
                Duration – 3 Years (For UG Program),<br />
                2 Years (For PG Program)<br /><br />
                Residential Degree Program<br /><br />
                Applications Deadline: July 2024
              </p>
              <div className='flex pt-8'>
                <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/contact'>Apply Now</a></button>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <Image src={admisiions} alt="Image Description" className="max-w-full h-auto" />
              <div className="w-full inset-0 flex items-center justify-center">
                <span className="tpip">
                  Ace Your Career, Gyanarthi Way!
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='container'>
            <Tabs className="ctabs">
              <div>
                <TabList className="courselist">
                  <Tab className="ctab">Overview</Tab>
                  <Tab className="ctab">Specializations</Tab>
                  <Tab className="ctab">Eligibility</Tab>
                </TabList>
              </div>
              <div className='flex flex-col'>
                <TabPanel className="tabpanel futurevision">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-4">
                      <p className='selectedcourse'>One of the rapidly growing fields in the market is Animation. The demand for 3D Animators is growing day by day and this is fueling the demand for courses in animation and multimedia. The importance of graphic and design courses is extensively explored at the Gyanarthi Media College. We understand that students seeking to build a career in the animation field are more inclined towards absorbing techniques, best 2d animation programs, and graphic and design course. At Gyanarthi, our prime focus remains to deliver an understanding of the latest trends and technical assistance associated with the same. We believe in helping our students find their creativity in the right manner with limitless possibilities. Gyanarthi Media College aims to prepare students for the professional world where they can explore their creative sides while being intact with the traditional techniques and methods. For animation and design, there are rising trends and technical updates. We ensure that our students are prepped to take on any challenges in the most holistic way.</p>
                      <div className="pt-5">
                        <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/contact'>Apply Now</a></button>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <Image src={admisiions} alt="Image" className="max-w-full h-auto" />
                    </div>
                  </div>
                </TabPanel>

                <TabPanel className="tabpanel futurevision">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-4">
                      <p className='selectedcourse'>As far as the bachelor's degree in design and  animation is concerned at the Gynarthi Media College, the criteria are highly relaxed. Since we welcome students of nearly all backgrounds, we ensure that we move up in the most basic way and establish concepts. We lay the foundation for animation and design for the students beginning with colour theory to modeling and motion designing. We concentrate on illustrating to our students the best industry techniques in 2D hand-drawn, and 3D Modelling and Animation. Further, the prime software such as Adobe and Blender are explained to the students in a very thorough way. Techniques for visual storytelling, including scriptwriting and sequential art are well included in the course curriculum making the entire structure meticulously insightful. Further, the BA Animation and Design Course is one of the most pursued courses at the Gyanartjhi Media College. Our students proceed on to join bigger enterprises in the markets in order to kickstart their careers.</p>
                      <div className="pt-5">
                        <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/contact'>Apply Now</a></button>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <Image src={admisiions} alt="Image" className="max-w-full h-auto" />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="tabpanel futurevision">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-4">
                      <p className='selectedcourse'>Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for animation courses after 12th, at Gyanarthi a fine animation institute in india. All they need to do is pass class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.</p>
                      <div className="pt-5">
                        <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/contact'>Apply Now</a></button>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <Image src={admisiions} alt="Image" className="max-w-full h-auto" />
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className="flex flex-wrap py-8 container">
            <div className='py-8 px-6 md:px-12 sm:px-24'>
              <h2 className="text-2xl font-bold mb-4">Gyanarthi Gives You an Edge</h2>
              <p className="edgepara text-justify">
The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the relative domains of Animation. The course at Gyanarthi Media College, affiliated with the University of Kumaon, was established with the vision of making it one of the top choices for the best animation courses after 12thin Animation and Design. The students can check all the details of the course of Animation and Design to get a comprehension of what it has to offer to the students.</p>
              <Tabs className="cctabs pt-16">
                <TabList className="etablist pb-5">
                  <Tab className="etab">Fundamentals of Animation and Design </Tab>
                  <Tab className="etab">Animation and Modelling  </Tab>
                  <Tab className="etab">Cinematography and Photography Domains </Tab>
                  <Tab className="etab">Media Planning and Management</Tab>
                </TabList>
                <div>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>For an BA in Animation and Design, since the eligibility conditions are highly relaxed, the students are taught everything from the basics. Gradually at Gyanarthi Media College, we build the foundation for the Animation and Design course by introducing the students to the fundamentals of art and design. Further, we take them through the specifications of a Story and Storyboard. This prepares the students for the course.</p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>At Gyanarthi, we focus on equipping students with Animation and Modelling in Dimensions that expand beyond limitations. Our students are proficient in 2D and 3D Animation and well adept in 3D Modelling and Texturing. These concepts are furthered into Character Rigging and Animation which help our students build the right skillset as required for jobs in Animation and Design </p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>Students at Gyanarthi are made to go through the basics of lighting and rendering in order to understand the specifications of Cinematography and Photography. The students of Animation and Design need visual proficiency to thoroughly comprehend Photography and Cinematography, and the students are ensured with concepts of Motion Graphics. Further, Editing and Composting also form a relevant core for the understanding of this domain.</p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>For the students of Animation and Design, it is necessary that they get an idea of the arena of Media Planning and Management. As Bachelor’s students, it is necessary to understand how they must operate within the management domains such that they can get into the management profiles in the media planning studies. This shall help them get equipped with the required acumen for Management profiles.</p>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        <Homegallery />
        <div className='flex justify-center'>
          <div className='container flex justify-center'>
            {/* <FAQSection faqs={selectedCourse.faqs} /> */}
          </div>
        </div>
        <section className="py-12">
          <div className="container mx-auto px-2 md:px-2 sm:px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h3 className="text-3xl font-bold md:text-left text-center mb-4 md:mb-0">Start Your Gyanarthi Journey</h3>
            </div>
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
              <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out mb-4 md:mb-0">
                <div className="p-8">
                  <h3 className="text-center mb-4 text-white journeyheading">Apply</h3>
                  <p className="text-center mb-6 text-white journeypara">Fill out the Application Form for the upcoming session at Gyanarthi Media College for the year 2024!</p>
                  <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block"><a className='flex items-center gap-3' href='/contact'>Apply Now <Image src={apply} alt="Image Description" className="add" /></a></button>
                </div>
              </div>
              <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out mb-4 md:mb-0">
                <div className="p-8">
                  <h3 className="text-center mb-4 text-white journeyheading">Connect</h3>
                  <p className="text-center mb-6 text-white journeypara">Reach Out to Gyanarthi’s Admission Team to secure your place at the College for the upcoming session.</p>
                  <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block"><a className='flex items-center gap-3' href="https://wa.me/8755552552" target="_blank">Connect Now <Image src={wp} alt="Image Description" className="add" /></a></button>
                </div>
              </div>
              <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out mb-4 md:mb-0">
                <div className="p-8">
                  <h3 className="text-center mb-4 text-white journeyheading">Brochure</h3>
                  <p className="text-center mb-6 text-white journeypara">Download the 2024 Brochure of the Gyanarthi Media College and explore the Courses and College Life.</p>
                  <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block"><a href='#' download target="_blank" className='flex items-center gap-3'>Download Now<Image src={download} alt="Image Description" className="add" /></a></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default page;
