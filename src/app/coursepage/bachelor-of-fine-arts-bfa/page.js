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
              <h2 className="text-xl font-bold chancelorheading">Bachelor of Fine Arts BFA</h2>
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
                      <p className='selectedcourse'>The students at the Gyanarthi Media College are inspired to choose their fields of interest and build a career in the same. The domain of Fine Arts is one of the most creative fields. However, the options of courses that solely focus on the same are very limited. At Gyanarthi, we allow the students to explore the Fine Arts with finesse and comprehensive techniques. The Bachelor of Fine Arts course is supported by an intensive curriculum which is affiliated with the University of Kumaun, Nainital and is recognized by the University Grants Commission. For building a career in creative fields, a very supportive environment and structure of the course are required. This structure must be backed by thorough techniques and expertise that our experienced faculty brings to the table. The Bachelor of Fine Arts Course at the Gyanarthi Media College aims to assist students in building the careers they have always dreamt of. </p>
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
                      <p className='selectedcourse'>Bachelor of Fine Arts Courses are available with four specializations at the Gyanarthi Media College. These domains are very balanced and curated in order to build expertise in one of the four leading domains of the field. The students can either choose Painting, Sculpture, Applied Arts, or Photography in order to choose the course of their career. The curriculum in each of the specializations is highly specific while also providing a general idea of the basics of Fine Arts. The four specializations are more inclined towards equipping the students with the right amount of knowledge they need so as to build careers in different industries within the Fine Arts field. The students pursue Painting to take up fields that require intricate brush work while those who take up Sculpting are more adept in moulding. Applied Arts primarily focuses on the domain of Graphic Design and related artistical works while the Photography arena deals with a meticulous understanding of the frames and visual adjustments. </p>
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
Gyanarthi Media College, Kashipur's faculty strives to heighten student’s professional profiles. Our mission is to produce professionals armed with comprehensive expertise in painting, sculpture, Applied arts and photography.The courses at the Gyanarthi Media College are affiliated with Kumaun University and the curriculum is curated with a vision to make it one of the prime options for the best course after Class 12th in the field of Fine Arts. The students can check the Bachelor of Fine Arts Course subsequently to get a comprehension of the specifications of each specialization domain that the College has to offer to the students.</p>
              <Tabs className="cctabs pt-16">
                <TabList className="etablist pb-5">
                  <Tab className="etab">BFA in Painting </Tab>
                  <Tab className="etab">BFA in Sculpture </Tab>
                  <Tab className="etab">BFA in Applied Arts </Tab>
                  <Tab className="etab">BFA in Photography</Tab>
                </TabList>
                <div>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>Painting is one of the prime and most pursued specializations under the Bachelor of Fine Arts Course at the Gyanarthi Media College. The well-curated and structured curriculum enables students to refine their craft by employing better techniques. This is one of the best courses in the city of Kashipur and it not only hones the skills of the students but also helps them build careers in textiles, art studios, animation, production houses, and other such places of work. </p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>Integrating moulding, carving, welding, and modelling in Bachelor of Fine Arts, this specialization focuses on the holistic development of the students to grow their career in Sculpting. While the students are able to get an understanding of photography, fine arts, graphic designing, and other domains, this specialization helps them gain a closer understanding of the sculpting arena while repairing them more intricately for a career in the same field. </p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>The Applied Arts domain in the Bachelor of Fine Arts Courses is more inclined towards Calligraphy, Graphic Design, Advertising, Clay Modelling, and other such fields. This domain can be pursued by students who are interested in joining workspaces such as Animation Studios, Production Houses, Music Companies, Theatres and others. We prepare our students to work in exciting workspaces across the globe after they graduate from Gyanarthi.</p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>The Photography specialization in the Bachelor of Fine Arts Course brings forward opportunities for the students to explore visual aesthetics, photography frames, and relative specifications in the field.This course lays the foundation for students to pursue careers in cinematography, digital technologies, visual communication, and many more.We blend technology with talent to make our students compatible with modern trends in photography.</p>
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
              <h2 className="text-3xl font-bold md:text-left text-center mb-4 md:mb-0">Start Your Gyanarthi Journey</h2>
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
