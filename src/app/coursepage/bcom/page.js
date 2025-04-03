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
              <h1 className="text-xl font-bold chancelorheading">BCom Course Detail</h1>
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
                      <p className='selectedcourse'>Gyanarthi  College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi  College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.</p>
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
                      <p className='selectedcourse'>The Gyanarthi College offers eclectic education in the  domain with the Bachelor of Commerce course. Our courses are tailored to equip students for the professional world. Thus, we offer knowledge in domains that are highly relevant to the industrial demands. Gyanarthi  College is the first and only college in the city of Kashipur to offer such specialization in a Bachelor of Commerce degree. Our Bachelor of Commerce Course can be wither pursued generally or the students can opt for either the Taxation, International Business, Banking and Finance, or Financial Accounting domains. The students simply need to specify if they seek to opt for a curated curriculum course or simply a Bachelor of Commerce degree at the Gyanarthi  College.Irrespective of subject combination, they can seek admission in the course of their choice easily.</p>
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
                      <p className='selectedcourse'>Gyanarthi  College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi  College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.</p>
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
At Gyanarthi  College of Kashipur, our main goal as faculty members is to enhance students' professional profiles. Our aim is to produce graduates specialized in areas like Taxation, International Business, Banking & Finance and Financial Accounting. All courses at our College are affiliated with Kumaun University, with curriculum designed with students after 12 Commerce in mind - as a top option after graduating or to supplement another specialization domain such as BCom Course Details for further understanding each specialization domain.</p>
              <Tabs className="cctabs pt-16">
                <TabList className="etablist pb-5">
                  <Tab className="etab">Banking and Finance  </Tab>
                  <Tab className="etab">Financial Accounting  </Tab>
                  <Tab className="etab">Taxation </Tab>
                  <Tab className="etab">International Business</Tab>
                </TabList>
                <div>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>Gyanarthi's B.Com program offers a meticulously designed Banking and Finance specialization, aimed at providing students with comprehensive knowledge and skills in this field. Integrated seamlessly into the structured curriculum of the Bachelor of Commerce program, this specialization caters to the evolving demands of the banking sector. Students delve deep into topics such as financial analysis, risk management, investment strategies, and banking regulations, gaining a nuanced understanding of the intricacies of modern banking practices. Through a blend of theoretical insights and practical applications, the Banking and Finance specialization equips students with the expertise needed to excel in various roles within the banking industry. From understanding financial markets to navigating regulatory frameworks, students receive rigorous training that prepares them for the complexities of real- world banking operations.Whether aspiring to become financial analysts, investment bankers, or risk managers, graduates of this specialization emerge ready to make significant contributions to the financial sector.Join Gyanarthi's B.Com program with a specialization in Banking and Finance and embark on a rewarding journey towards a successful career in the dynamic world of banking.</p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>Financial Accounting stands as a distinct domain within the academic landscape, offering students a specialized skill set to navigate the complexities of financial reporting and analysis. At Gyanarthi  College, students delve deep into the principles of accounting, learning to interpret financial data, prepare accurate reports, and gain insights into investment strategies. Through a rigorous curriculum that blends theoretical foundations with practical applications, students acquire the knowledge and skills needed to excel in the field of financial accounting. Gyanarthi  College goes beyond theoretical teachings, emphasizing practical learning experiences that enable students to apply their knowledge effectively in real- world scenarios. From analyzing financial statements to developing investment plans, students are equipped with the tools and techniques necessary to make informed financial decisions. With a focus on hands - on learning and experiential activities, students graduate from Gyanarthi  College's Financial Accounting program with the confidence and competence to succeed in diverse professional settings. Join us and embark on a journey towards mastering the art and science of financial accounting, preparing yourself for a rewarding career in the dynamic world of finance.</p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>At Gyanarthi  College, students have the opportunity to delve into the intricacies of taxation through the specialized stream offered within the Bachelor of Commerce program. With a comprehensive curriculum, students are equipped with the knowledge and skills necessary to navigate various aspects of taxation, including financial accounting, direct taxation, indirect taxation, and auditing. Through a blend of theoretical learning and practical applications, students gain a deep understanding of tax laws and regulations, preparing them for roles in taxation consultancy, financial management, and auditing firms. While focusing on specialized areas of taxation, Gyanarthi  College ensures that students maintain a strong foundation in traditional commerce concepts. By integrating core principles of commerce into the taxation specialization, students develop a holistic understanding of business operations and financial management. With an emphasis on practical learning experiences and industry- relevant skills, students graduate with the expertise to excel in diverse career paths within the taxation field.Join us at Gyanarthi  College and embark on a journey to become a proficient tax professional, equipped to make significant contributions to the financial sector.</p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>The field of International Business is experiencing a surge in demand within the commercial market, making it an attractive domain for aspiring professionals. For students aiming to pursue careers in multinational corporations and global enterprises, Gyanarthi offers a specialized program - the B.Com in International Business. This program provides students with comprehensive insights into the dynamics of global markets, international trade, and cross-cultural management, equipping them with the knowledge and skills required to navigate the complexities of conducting business on a global scale.At Gyanarthi, we go beyond theoretical learning and emphasize practical application of concepts.Through industry- relevant case studies, real - world projects, and internship opportunities, students gain hands - on experience in dealing with the challenges and opportunities of international business operations.Gyanarthi's faculty consists of experienced professionals and experts in their respective fields who offer mentorship and guidance that allows our students to acquire in-depth knowledge of international business practices and strategies. When our program ends, students become highly competent professionals capable of making informed decisions across global business landscapes - join us at Gyanarthi and take an exciting journey towards an extraordinary International Business career path.</p>
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
                  <p className="text-center mb-6 text-white journeypara">Fill out the Application Form for the upcoming session at Gyanarthi  College for the year 2025!</p>
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
                  <p className="text-center mb-6 text-white journeypara">Download the 2025 Brochure of the Gyanarthi  College and explore the Courses and College Life.</p>
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
