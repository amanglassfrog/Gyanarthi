"use client";

import React, { useState } from 'react';
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
 const faqs = [
    {
      question: "Explain BFA as a degree course.",
      answer: "Bachelor’s of Fine Arts Degree is an undergraduate program that offers courses in arts after 10th. This course focuses on design and visual arts. It's a degree program where students can explore creative expression. They have mediums like painting, sculpture, photography, graphic design, and many more."
    },
    {
      question: "What are the benefits of pursuing a BA in fine arts degree?",
      answer: "Pursuing a BA in fine arts offers the opportunity to develop creative learning & analytical thinking abilities. BFA also helps in providing a strong foundation in art history."
    },
    {
      question: "Why should I go for BFA Degree from Gyanarthi  College, Kashipur?",
      answer: "Gyanarthi  College, Kashipur, is one of the best fine arts colleges in India. The Bachelor of Fine Arts degree is one of the advanced courses it offers. We don't just provide academic learning, but our expert faculty provide students with valuable guidance to help them excel."
    },
    {
      question: "What are the career options students have after pursuing their Bachelor of Fine Arts degree?",
      answer: "A Bachelor of Fine Arts degree opens up numerous creative field careers in art therapy, animation, advertising, and marketing. Students who pursue a BFA degree can become professional artists, set designers, and photojournalists, among other options."
    }
  ];
const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <main>
        <Header/>
        <div className='flex justify-center'>
          <div className="flex flex-wrap py-8 container">
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-xl font-bold chancelorheading">Bachelor of Fine Arts Course</h1>
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
                      <p className='selectedcourse'>Gyanarthi believes in offering exciting courses. We aim at keeping our students engaged with their studies. To ensure that, we plan our curriculum interesting enough. Fine arts is a rising field in today’s times. The<a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '> Bachelor of Fine Arts course</a> is important in opening many creative fields. Bachelor of Fine Arts course is important in opening many creative fields.
 <br></br>
Our innovative program backs<a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '> Bachelor of Fine Arts Degree</a> Courses. The University of Kumaun, Nainital, affiliates it. Apart from that, the University Grants Commission recognizes it as well. We offer a supportive environment and a structured course. The structure of the BFA course at Gyanarthi  College is planned and executed by experts in the field. Experts in the field plan and execute the structure of the <a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '>BFA degree</a> course at Gyanarthi  College.
</p>
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
                      <p className='selectedcourse'>The<a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '> Bachelor in Fine Arts Courses</a> offer fine arts courses with four specializations. These specializations are curated to make our students excel in that particular art course. We offer painting, photography, sculpture, and applied arts under the <a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '>Bachelor of FIne Arts degree</a>.

The curriculum for each course provides a general idea of the basics of fine arts. Apart from that, the specialization part talks deeply about the subject. It ensures that students have a broad understanding of the specific techniques, styles, and historical context within the field of fine arts.

Our qualified faculty members ensure that students receive engaging lessons. They provide support to develop their creative abilities. These specializations are there to bring out the creative side of students.

Students in painting focus on brushwork. The ones who opt for sculpting excel at molding. Applied arts mainly emphasizes graphic design and related artistic work. The specialization of photography covers all aspects of the field.
</p>
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
                      <p className='selectedcourse'>Gyanarthi  College, Kashipur, is very peculiar about educational backgrounds. We help students build careers in the domains of media, communication, commerce, arts, and fashion. Students of nearly all backgrounds can opt for the<a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '> Bachelor of Arts courses after 12th</a>.
<br></br>
There are certain eligibility criteria for admissions in the <a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '>BFA courses</a> at Gyanarthi  College. So, the most important criteria is 40% marks in 12th grade. Basically, candidates must score 40% in the 12th grade in order to be considered for a <a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '>Bachelor in Fine Arts Courses</a>. It should have been recognized by an accredited board. 
<br></br>
The <a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '>Bachelor of Fine Arts  Course</a> selection criteria at Gyanarthi ensures students become professionals. As a top college in Kashipur, we aim to reach students who are passionate about their professions.
</p>
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
Gyanarthi encourages academic excellence along with skill development. The college provides a friendly environment for students. Helping students to grow as individuals and encouraging them to pursue their passions. Gyanarthi is well-known as one of the <a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '>best fine arts colleges in India</a>. Gyanarthi provides academic learning along with the overall growth of students. Therefore, several clubs and teams work to organize fun learning events.
              </p>
              <Tabs className="cctabs pt-16">
                <TabList className="etablist pb-5">
                  <Tab className="etab">BFA in Painting </Tab>
                  <Tab className="etab">BFA in Sculpture </Tab>
                  <Tab className="etab">BFA in Applied Arts </Tab>
                  <Tab className="etab">BFA in Photography</Tab>
                </TabList>
                <div>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>One of the four specializations that we offer under the<a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '> Bachelor of Fine Arts</a> is painting.
It offers our students the opportunity to learn about painting techniques, styles, & mediums to develop a unique artistic tone. 
Experienced faculty is there to guide painting students of the <a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '>BFA degree</a>. We also equip students with necessary guidance and resources to excel in the painting art field.
After doing BFA, students can go for career options including professional artists, art educators, set designers, and illustrators, among others.
</p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>The Bachelor of Fine Art's specialization in sculpture includes a curriculum regarding molding, carving, and modeling.
This specialization is about all-inclusive development of our students to excel in the sculpture field.
The <a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '>BFA degree</a> course's specialization in sculpture equips students with an in-depth learning of sculpture. 
Students can opt for a <a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '>Bachelor of Fine Arts Course</a>  if they plan to be professional sculptors, art instructors, gallery curators, or sculpture restorers.</p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>We offer applied arts under our <a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '>Bachelor of Fine Arts degree Courses</a>, teaching creative product packaging design.
Students can learn the art of calligraphy, graphic design, advertising, clay modeling, and other such fields in applied arts. 
Aspiring animation studio, production house, and theater professionals can opt for the applied arts specialization in the <a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '>Bachelor of Fine Arts Course</a>.
Students can choose from graphic design, illustrator, and many more after taking applied arts.
</p>
                  </TabPanel>
                  <TabPanel className="tabpanel">
                    <p className='kalakari'>Photography is the art of creativity. It allows individuals to capture moments, emotions, and beauty in a single frame. 
The <a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '>BA fine arts</a> photography course gives students the chance to understand relative specifications in the phototography field.
Photography studies in BFA lay the groundwork for a career in cinematography, digital technologies, visual communication, and many other fields.
The<a href='https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa '> Bachelor of FIne Arts degree</a> in photography art opens career options like curator, photographer, photojournalist, consultant, stylist, and more.
</p>
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
        <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left text-lg font-medium text-gray-900 focus:outline-none">
              {faq.question}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
        <Footer />
      </main>
    </>
  );
};

export default page;
