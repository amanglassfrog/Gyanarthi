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
              <h2 className="text-xl font-bold chancelorheading">MA Animation and Design</h2>
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
                <h1 className="tpip">
                  Ace Your Career, Gyanarthi Way!
                </h1>
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
                      <p className='selectedcourse'>Animation is the art of bringing life to a lifeless item using special effects is called animation. The Master in Animation and Design provides artistic and technical training to prepare the students for future artistic 3D character animation, traditional animation, storyboarding, computer game art, motion graphics, or visual effects animation. In the era of the Internet, the trend of animation and VFX animation in the entertainment industry is expected to persist, demanding expertise in new-age software. Gyanarthi Media College’s M.A. Animation and Design, a two-year program equips students with essential skills for success in this field. Gyanarthi Media College aims to help students understand the fascinating world of animation, VFX and motion graphics for film, broadcast and other media. Basic understanding of story and design concepts related to pre-production for animation and VFX are taught. Special skill sets in the creation of artwork for production and post-production are also taught. The world of 3D Digital Art and VFX visualization are also introduced in our program to expose students to industry-relevant software. At the end of the programme, students are exposed to industrial training for real-world experience. essential aspects of art and design fundamentals, script development, and storyboard creation are also covered. Students get hands-on experience in both 2D and 3D animation techniques, mastering skills in 3D modelling, texturing, character rigging, and animation. Additionally, they learn about lighting, rendering, photography, and cinematography to enhance visual storytelling.</p>
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
                      <p className='selectedcourse'>MA Animation and Design program or animation master degree students can specialize in various areas for their careers. Skills like Character Animation are making characters look real by using special animation skills, visual effects (VFX) for making cool effects for movies and TV shows, and motion graphics for creating moving graphics for titles and ads. 3D modelling and Texturing is another skill for making digital 3D models and game design and development shows how animation works for games. The wide-ranging scope for Animation and Design exists in production houses, gaming developers and many others. In addition to introducing students to the world of 3D digital art and VFX visualization, this programme exposes students to industry-relevant software. At the end of the programme, Students are exposed to industrial training to know about real-world experience. Renowned Industry experts often make an appearance at GMC to share their experiences about the use of 3D and 2D animation in film making and design. Different workshops are also organized periodically to keep students abreast of the ongoing developments in the animation industry.</p>
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
                      <p className='selectedcourse'>Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Graduation from a recognized University. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.</p>
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
              <h3 className="text-2xl font-bold mb-4">Gyanarthi Gives You an Edge</h3>
              <p className="edgepara text-justify">
The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the domains of 3d animation courses in Animation and Design. The courses at the Gyanarthi Media College are affiliated with Kumaun University and the curriculum is curated with a vision to make it one of the prime options for best postgraduate courses in Animation and Design. Students can look at the Animation and Design undergraduate program to understand the specifics of all the professional programs offered to students at the university.
              </p>
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
