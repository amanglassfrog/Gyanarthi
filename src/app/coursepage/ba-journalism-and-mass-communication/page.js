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
              <h2 className="text-xl font-bold chancelorheading">BA Journalism and Mass Communication</h2>
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
                      <p className='selectedcourse'>The Journalism and Mass Communication course at the Gyanarthi Media College at Kashipur is a dynamic undergraduate degree designed to help students with the skills necessary to navigate the fast-paced world of media. The mass communication course offers a structured education in an array of media domains such as print, digital, television, and radio. We focus on building a strong foundation in journalistic practices, ethics, and research techniques for our students. At Gyanarthi, the students learn to craft compelling news stories, conduct effective interviews, and formulate multimedia content.We ensure that they are able to gain a deep understanding of the impact of media on society and culture which shall assist them in curating a very specific career in the future.The coursework for the bachelor degree in journalism and mass communication at the Gyanarthi Media College integrates theoretical learning with practical application.Our students are prepared to work on practical projects as we provide them with real - time experience and internships.We ensure that the students are able to build professional networks and inculcate practical skills before they are all set to move to the market to move ahead with professional commitments.This degree not only prepares students for careers in journalism and communications but also helps them build critical thinking and communication skills.</p>
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
                      <p className='selectedcourse'>The students at Gyanarthi Media College are well-equipped to move forward and prepare themselves for the fields of mass communication and media studies. The curriculum at the Gyanarthi Media College is extensive and well-crafted for building careers in the right direction. Our students are thoroughly taught to navigate through the challenges in the Media and Communication world. At Gyanarthi, the faculty focuses on helping the students with domains such as Television Broadcasting and Radio Broadcasting. We make sure that our students are equipped with the appropriate knowledge in the domains of Print Journalism and even the basics of Photography. This helps the students gain ample acumen to practically test their knowledge in the domains of Journalism and Mass Communication. Gyanarthi Media College is a competent institute for mass communication that equips students with the right amount of knowledge to work in the fields of Advertising and Public Relations. We ensure that our students are up to date in subjects such as Social Sciences, Indian Polity and Society, Media Research, Media Law and Ethics, Functional Hindi, and Functional English as this shall assist them in going forward with activities in Media Planning, Management, and execution very smoothly. </p>
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
                      <p className='selectedcourse'>Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.</p>
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
The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the relative domains of Mass Communication and Media Studies. The courses at the Gyanarthi Media College are affiliated with Kumaun University and the curriculum is curated with a vision to make it one of the prime options for the best course after Class 12th in the field of Journalism and Mass Communication. The students can check all the details of the bachelor degree in journalism and mass communication to get a comprehension of what it has to offer to the students.</p>
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
