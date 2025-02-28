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
              <h1 className="text-xl font-bold chancelorheading">Masters in Journalism and Mass Communication</h1>
              <p className="mt-2 chancelorparagraph pt-3">
                Session Starts – August 2025<br /><br />
                Duration – 3 Years (For UG Program),<br />
                2 Years (For PG Program)<br /><br />
                Residential Degree Program<br /><br />
                Applications Deadline: July 2025
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
                      <p className='selectedcourse'>Gyanarthi Media College's MA Journalism and Mass Communication course comprises of a two-year program comprised of four semesters. This program is tailored to provide students with an in-depth knowledge of all aspects of mass communication with particular attention to digital media and communications. Students will acquire key skills, including communication, electronic and digital production, media writing and other essential topics. One of this program's greatest assets is its emphasis on connecting theory with practice. Students actively engage with industry experts who share their knowledge and experience while giving theoretical as well as practical information to prepare them to face the challenges in digital media industry. Focusing the program around digital media is timely and strategic. Digital media offers rewarding careers to professionals with the necessary skill. Graduates will be well prepared for fulfilling careers in journalism, mass communication and media in the digital era thanks to a holistic curriculum which allows students to explore, challenge themselves and meet individual needs or interests while taking full advantage of the program's flexibility by specialising in one subject area and broadening their learning experience. Gyanarthi Media College's MA Journalism and Mass Communication program equips students with a solid grounding in digital media and communications, while developing creative thinking abilities. Graduates of this course are well equipped for success in the dynamic digital media industry thanks to their comprehensive education and access to practical experiences.</p>
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
                      <p className='selectedcourse'>A lot of career opportunities for aspirants are available after the MA Journalism and Mass Communication Course. Wide range of areas such as print journalism, digital journalism, public relations, advertising, media management, and international journalism including broadcast journalism, and feature writing. Broadcast journalism involves reporting news to television audiences while print journalism involves creating captivating articles for newspapers or magazines. Both specializations offer students the expertise and experience necessary for media and communications roles of all sorts. The Master’s Degree programme in Journalism and Mass communication aims to transform students into highly skilled media and communication professionals. The programme is carefully structured to offer the students a foundation for a strong career in the media industry as well as media research. After successfully completing their MA-J&MC, the students will be ready to grab job opportunities as Radio Jockeys, Anchors, TV Broadcasters, Reporters, Copy Editors, Creative/Script Writers, Advertising Executives and PR/Corporate Communication Professionals.</p>
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
                      <p className='selectedcourse'>Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Graduation from a recognized University. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. As one of Kashipur's premier colleges, our aim is to reach every student who exhibits empathy and enthusiasm towards creative professions.</p>
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
The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the domains of Journalism and Mass Communication. The courses at the Gyanarthi Media College are affiliated with Kumaun University and the curriculum is curated with a vision to make it one of the prime options for the best course after Graduation in the field of Animation and Design. The students can check the Bachelor of Arts in Journalism and Mass Communication Course subsequently to get a comprehension of the specifications of each specialization domain that the College has to offer to the students.</p>
              <Tabs className="cctabs pt-16">
                <TabList className="etablist pb-5">
                  <Tab className="etab">Television Journalism  </Tab>
                  <Tab className="etab">Radio Broadcasting </Tab>
                  <Tab className="etab">Advertising </Tab>
                  <Tab className="etab">PR and Corporate Communication</Tab>
                </TabList>
                <div>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>The students at Gyanarthi aim to be Journalists at established firms and companies in the Television Industry. Thus, in order to provide them with the right amount of knowledge in the arena of Data Journalism, Photography, Media Research, Media Laws and Ethics, Media Planning and Management, Advertising, and other sectors. This prepares students with the appropriate information to move forward in their careers.</p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>For the students of Journalism and Mass Communication, Gyanarthi Media College ensures that the students are prepared for the Radio domains as it forms a very necessary core for Journalism studies. Furthermore, as students who are studying mass communication, it is necessary that they understand the levels of communication and the application of tools in this sector. Gyanarthi prepares students for everything and Radio Broadcasting is one of them. </p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>It is necessary to understand for the students that the basics of advertising form a very important part of the journalism curriculum. Students at Gyanarthi are prepared for the journalism world while keeping them intact with the importance of Advertising. Starting from the basics to the core, the faculty at Gyanarthi ensures that the students know everything.</p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>The curriculum of Journalism and Mass Communication Courses at the Gyanarthi Media College is very balanced. It is intricately designed to keep up with the latest market requirements, and Public Relations is one of them. The students are prepared well to navigate through Corporate Communication and Public Relations roles while they study MA Journalism and Mass Communication. </p>
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
                  <p className="text-center mb-6 text-white journeypara">Fill out the Application Form for the upcoming session at Gyanarthi Media College for the year 2025!</p>
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
                  <p className="text-center mb-6 text-white journeypara">Download the 2025 Brochure of the Gyanarthi Media College and explore the Courses and College Life.</p>
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
