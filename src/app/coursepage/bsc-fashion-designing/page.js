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
              <h1 className="text-xl font-bold chancelorheading">BSc Fashion and Designing Course</h1>
              <p className="mt-2 chancelorparagraph pt-3">
                Session Starts – August 2026<br /><br />
                Duration – 4 Years (For UG Program),<br />
                2 Years (For PG Program)<br /><br />
                Residential Degree Program<br /><br />
                Applications Deadline: July 2026
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
                      <p className='selectedcourse'>The Fashion and Designing Course at the Gyanarthi  College is well- curated to help students build their dream careers in the fashion world. In the city of Kashipur, Gyanarthi happens to be one of the top choices for the fashion course.The reason for the same is the kind of curriculum that the college provides to the students. The Bachelor of Science in Fashion Designing is very effectively structured to assist students beginning from the basics to the complexes of the Fashion World. At the Gyanarthi  College, the compounded concepts are explained to the students in the most simple world. The students are nurtured with knowledge in the domains of Indian Textiles, Fashion Trends, History of Clothing, and many much more. This enables the students gain a comprehensive knowledge of the important domains they must be aware of while they practice fashion professionally. Our students grow to be fashion designers, analysts, buyers, textile designers, and other major roles in many bcommendable workspaces across the nation.</p>
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
                      <p className='selectedcourse'>The BSc in Fashion Designing is a three- year undergraduate course. It is a course filled with creativity, innovation and endless opportunities. For aspiring fashion enthusiasts BSc in Fashion Designing is a perfect course. It is a foundation to explore the multifaceted world of designs, textiles and trends. The Gyanarthi  College’s Fashion Designing Course promises to give students an experience of industry’s technical aspects with its state - of - the - art infrastructure. The college provides variety of hands - on labs and access to specialised equipment for their training. Laboratory facilities provide students with practical experience for developing patterns and designs through practical application, using industrial machines, interlocking machine, and supporting equipmen, including industrial machines with interlocking functions that assemble patterns to form vibrant designs. Further, we make sure that our students are well - equipped with the knowledge of textiles such as Chikankari, Zardosi, Kalamkari, and many others. The faculty at Gyanarthi is highly conscientious of the information that they extend to the students as they believe that the students must be prepare for the corporate world while being constantly in touch with the traditional as well as the modern approaches. </p>
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
                      <p className='selectedcourse'>Gyanarthi  College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi  College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.</p>
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
                The prime objective of the faculty at the Gyanarthi  College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the relative domains of Fashion and Designing Course. Gyanarthi  College offers courses affiliated with Kumaun University, designed to be a premier choice for post-Class 12 education, with a meticulously crafted curriculum aimed at excellence in the field of Fashion. The students can check all the details of the fashion designing course to get a comprehension of what it has to offer to the students.
              </p>
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
                  <p className="text-center mb-6 text-white journeypara">Fill out the Application Form for the upcoming session at Gyanarthi  College for the year 2026!</p>
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
                  <p className="text-center mb-6 text-white journeypara">Download the 2026 Brochure of the Gyanarthi  College and explore the Courses and College Life.</p>
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
