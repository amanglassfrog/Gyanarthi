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
              <h1 className="text-xl font-bold chancelorheading">Masters Degree in Fashion Design Course</h1>
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
                      <p className='selectedcourse'>Master of Science MSc in Fashion Design is the postgraduate course after completing bachelors. Fashion Design is the art of creating clothes and accessories that reflect cultural influences, individual expression, and the latest trends. This course focuses on the design, development, and production of clothes, footwear and accessories. Gyanarthi Media College in Kashipur offers Fashion and design courses in bachelors as well as postgraduate courses. The MSc Fashion Designing course of two years at Gyanarthi Media College provides a basic understanding of the fashion industry, various fashion segments like women, kids and men etc.Additionally, the course provides the basics of the fashion industry like working on different machines like sewing machines and overlock machines. The MSc program also teaches you basic pattern-making, textile art and draping techniques. The college has state-of-the-art infrastructure and equipment, such as pattern-making labs, drafting labs, draping labs and industrial sewing machines for a better experience in the industry.The key benefits of pursuing an MSc in Fashion design are that it provides an opportunity to specialize in a particular area of field and work with some of the best professionals in the fashion industry. Gyanarthi College also provides student workshops like Chitkala Workshops, and Kashmir Embroidery Workshops to get first-hand experience of the latest trends in the fashion industry.  </p>
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
                      <p className='selectedcourse'>In an MSC Fashion Designing Course, students have the opportunity to choose from a variety of specializations depending on their interests. The specializations include fashion technology, textile design, accessory design, fashion marketing and merchandizing, and fashion technology. These specializations help students to focus on specific domains of the fashion world. They learn how to make clothes, design fabrics, sell fashion products or use technology in fashion.By studying these specializations, students get the expertise of their field and work with professionals in the outside world. Doing an MSc in Fashion Designing provides students with adequate abilities and skills for the course and improves their abilities and methods to construct a portfolio. </p>
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
                      <p className='selectedcourse'>Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Graduation from a recognized University. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into professionals. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.</p>
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
The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the domains of Fashion. The courses at the Gyanarthi Media College are affiliated with Kumaun University and the curriculum is curated with a vision to make it one of the prime options for the best course after Graduation in the field of Fashion Design. The students can check the Bachelor of Science in Fashion Designing Course subsequently to get a comprehension of the specifications of each specialization domain that the College has to offer to the students.              </p>
              <Tabs className="cctabs pt-16">
                <TabList className="etablist pb-5">
                  <Tab className="etab">Pattern-Making Labs</Tab>
                  <Tab className="etab">Pattern Drafting Labs </Tab>
                  <Tab className="etab">Interior Drafting Labs </Tab>
                  <Tab className="etab">Draping Labs</Tab>
                </TabList>
                <div>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>At Gyanarthi, we have specific pattern-making labs which help students develop a specific understanding of the fashion industry and its pertinence with pattern-making. The students gain proficiency in the art of designing patterns. Further, they are able to nurture their comprehension of factors such as the type of fabric, intended silhouette, and many other things that they require to build a successful career in fashion.</p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>Equipped with top equipment for Pattern drafting, the Pattern Drafting Lab at Gyanarthi is focused on giving the students the right environment to carefully frame the basis of their fashion design journey. Pattern drafting is a very meticulous process as it inculcates an understanding of personalities, forms, models, and other specifications in order to draft the right pattern.</p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>To compose the 2D model of the designs that the students are willing to draft, it is necessary that they are able to get spaces such as Interior Drafting Labs. They help the students clearly understand the way they have to employ the types of equipment and how they must use the tools in order to complete the respective jobs. The students are further encouraged to take up the latest trends and get an understanding of the latest trends and market requirements. </p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>Draping forms the core of fashion design studies. Thus it is necessary that the students have the exact understanding of every technique. This is a very tedious job for which absolute concentration is much needed. The students must be able to work with the exact equipment in the needed direction to go through the steps of the intricate draping process.</p>
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
