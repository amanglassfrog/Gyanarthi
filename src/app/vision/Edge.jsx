"use client"
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'next/image';
import edge from '../../../public/edge.png';
import image1 from "../../../public/international.png"
import image2 from "../../../public/banking.png"
import image3 from "../../../public/financial.png"
import image4 from "../../../public/taxation.png"
import image5 from "../../../public/finearts.png"
import image6 from "../../../public/animationdesign.png"
import image7 from "../../../public/fashiondesign.png"
import image8 from "../../../public/journalism.png"
const Edge = () => {
    return (
        <div className='py-8 p-6 md:p-12 sm:px-24'>
            <h2 className="lifetime mb-4">Education that Extends beyond Basics!</h2>
            <p className="lifetimepara">
                The specializations at Gyanarthi are very specific. Each industrial stream has been introduced into the courses with an intent of integrating excellence with education. Basic degrees impart knowledge but specific degrees impart skills. We aim at turning our students into professionals. The courses offered at the Gyanarthi Media College are not only traditionally educative but also modernly paced to ensure that the students get the best of the both worlds!             </p>
            <Tabs className="vtabs">
                <TabList className="etablist">
                    <Tab className=" etab ">International Business</Tab>
                    <Tab className="etab ">Banking and Finance</Tab>
                    <Tab className="etab ">Financial Accounting </Tab>
                    <Tab className="etab ">Taxation</Tab>
                    <Tab className="etab ">Fine Arts</Tab>
                    <Tab className="etab ">Animation and Design</Tab>
                    <Tab className="etab ">Fashion Design</Tab>
                    <Tab className="etab ">Mass Communication</Tab>


                </TabList>
                <div>

                    <TabPanel className="tabpanel">
                        <p>Gyanarthi's Bachelor in Commerce Degrees offer specialized tracks in International Business, providing students with the essential skills to navigate the complexities of global markets. Through a comprehensive curriculum, students gain a deep understanding of international trade, finance, and management, preparing them to excel in a rapidly evolving global economy. From analyzing market trends to devising strategic business plans, students develop the expertise needed to thrive in cross-border environments.

                            Moreover, Gyanarthi's International Business Specializations emphasize cultural fluency and cross-cultural communication, enabling students to effectively engage with diverse stakeholders from around the world. By fostering a global mindset and promoting intercultural understanding, the program equips graduates with the knowledge and tools to build meaningful connections across borders. With a focus on practical learning and real-world applications, Gyanarthi empowers students to become confident, ethical, and socially responsible leaders in the international business arena.






                        </p>
                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <p>Gyanarthi's B Com in Banking and Finance offers a comprehensive curriculum designed to equip students with the necessary skills and knowledge for a successful career in the financial sector. Through in-depth courses in financial analysis, risk management, and investment strategies, students gain a deep understanding of the principles and practices shaping the banking and finance industry. With a focus on practical application and real-world scenarios, students develop critical thinking and problem-solving abilities essential for navigating complex financial landscapes.

                            Furthermore, Gyanarthi's B Com in Banking and Finance opens doors to a wide range of rewarding career opportunities beyond traditional commerce roles. Whether pursuing roles in banking, investment management, or financial consulting, graduates are well-prepared to thrive in dynamic and competitive environments. By fostering a blend of academic rigor and practical experience, the program empowers students to become versatile professionals capable of making informed decisions and driving positive change in the world of banking and finance.</p>

                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <p>
                            Gyanarthi's Financial Accounting program offers students a comprehensive understanding of the language of business, focusing on principles and practices essential for informed decision-making and financial transparency. Through rigorous coursework, students delve into fundamental accounting concepts, learning to analyze financial data, prepare financial statements, and interpret key performance indicators. By mastering these skills, students gain the confidence and expertise to navigate complex financial landscapes and contribute effectively to organizational success.

                            Moreover, Gyanarthi's Financial Accounting domains provide students with a solid foundation for career advancement and professional growth. Whether aspiring to roles in accounting, finance, or business analysis, graduates emerge prepared to excel in diverse industries and sectors. With a focus on practical application and real-world scenarios, the program equips students with the skills and knowledge needed to thrive in dynamic and evolving business environments. By combining academic excellence with hands-on experience, Gyanarthi empowers students to achieve their career goals and make meaningful contributions to the world of finance and accounting.</p>

                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <p>
                            Gyanarthi's Taxation specializations within the B Com course offer students a deep dive into the complex world of tax laws and regulations. Through specialized coursework and hands-on learning experiences, students gain a comprehensive understanding of various tax systems, including income tax, corporate tax, and indirect taxes. By mastering the intricacies of tax planning, preparation, and compliance, students develop the expertise needed to navigate the ever-changing landscape of taxation effectively.

                            Furthermore, Gyanarthi's Taxation program prepares students for diverse career opportunities in tax advisory, consulting, and compliance roles. Graduates emerge equipped with the knowledge and skills to analyze tax implications, provide strategic tax advice to clients, and ensure compliance with relevant regulations. With a focus on practical application and real-world scenarios, the program empowers students to excel in a variety of tax-related professions, from public accounting firms to corporate tax departments. By combining academic rigor with experiential learning, Gyanarthi prepares students to thrive in the dynamic and challenging field of taxation.</p>

                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <p>Embark on a journey of artistic exploration with Gyanarthi Media College's Bachelor of Fine Arts program. Designed to ignite and nurture creative talents, this program offers students a platform to unleash their artistic vision across various mediums. From traditional forms like painting and sculpture to modern techniques in graphic design, students have the opportunity to explore a wide range of artistic expressions. Through hands-on projects, workshops, and studio sessions, students refine their skills, experiment with different techniques, and push the boundaries of creativity.

                            Moreover, Gyanarthi's Bachelor of Fine Arts program goes beyond technical proficiency to provide students with valuable industry insights and practical knowledge. With guidance from experienced faculty members and exposure to industry trends, students gain a comprehensive understanding of the creative landscape. Whether aspiring to become professional artists, designers, or educators, graduates emerge prepared to navigate the competitive realm of the arts with confidence. With a curriculum that balances artistic exploration with practical skills development, Gyanarthi Media College empowers students to embark on fulfilling and successful careers in the creative industries.</p>

                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <p>At Gyanarthi Media College, we invite you to bring your animation and design dreams to life through our comprehensive programs. Beginning with our Bachelor of Arts program, students acquire foundational skills essential for success in the dynamic world of animation and design. From mastering fundamental principles to exploring various techniques, students receive a solid grounding in the artistic and technical aspects of the field. Building upon this strong foundation, our Masters in Animation and Design program offers advanced training and specialization opportunities. Through intensive coursework, hands-on projects, and mentorship from industry professionals, students refine their expertise and develop a deep understanding of visual storytelling.

                            Upon graduation, our students emerge as creative powerhouses, equipped with the knowledge, skills, and confidence to shape the future of animation and design. Whether pursuing careers in film, television, gaming, advertising, or digital media, our graduates are prepared to make a significant impact in their chosen fields. With access to state-of-the-art facilities, experienced faculty, and a vibrant creative community, Gyanarthi Media College provides the perfect environment for aspiring animators and designers to thrive and realize their full potential. Join us and embark on a transformative journey towards becoming a visionary storyteller in the ever-evolving world of animation and design.</p>

                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <p>At Gyanarthi Media College, we invite you to elevate your passion for fashion through our comprehensive programs. Our Bachelor of Science in Fashion Design is designed to ignite your creativity and equip you with the skills needed to succeed in the dynamic world of fashion. From exploring design concepts to mastering garment construction techniques, students receive hands-on training that prepares them to excel in various roles within the industry. Building upon this strong foundation, our Masters of Science program offers advanced coursework and specialization opportunities to further refine your skills and knowledge. Through mentorship from industry professionals and access to cutting-edge resources, students graduate ready to make a mark as fashion leaders.

                            Upon graduation, our students emerge as innovative designers, poised to translate trends into stunning collections that captivate audiences worldwide. Whether pursuing careers in fashion design, merchandising, styling, or brand management, our graduates are equipped with the expertise and creativity needed to thrive in today's competitive fashion landscape. With a focus on innovation, sustainability, and inclusivity, Gyanarthi Media College prepares students to shape the future of fashion and make meaningful contributions to the industry. Join us and embark on a transformative journey towards becoming a fashion leader who leaves a lasting impact on the world of style and design.</p>

                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <p>Gyanarthi Media College empowers aspiring communicators to craft their voices and shape compelling narratives through our Journalism & Mass Communication programs. Our Bachelor's degree offers a comprehensive exploration of storytelling techniques across various platforms, including print, digital, and broadcast media. Students gain practical experience through hands-on projects, internships, and industry partnerships, allowing them to develop versatile skills that are essential for success in today's media landscape. Building upon this foundation, our Master's program delves deeper into advanced topics, equipping students with the expertise and insights needed to become media powerhouses. From investigative reporting to multimedia storytelling, students have the opportunity to refine their craft under the guidance of experienced faculty and industry professionals.

                            Upon completion of our programs, graduates emerge as skilled communicators equipped to thrive in diverse media environments. Whether pursuing careers in journalism, broadcasting, digital media, or public relations, our alumni are prepared to make meaningful contributions to the field. With a focus on ethical reporting, critical thinking, and innovation, Gyanarthi Media College prepares students to navigate the complexities of today's media landscape and drive positive change through their storytelling. Join us and embark on a transformative journey towards becoming a dynamic communicator who shapes the future of media.</p>

                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}

export default Edge