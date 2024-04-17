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
                        <Image src={image1} alt="amazon" />

                        <p>Equip yourself with the knowledge to analyze international markets, manage global operations, and build bridges across culture with Gyanarthi’s International Business Specializations in the Bachelor in Commerce Degrees.
                        </p>
                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <Image src={image2} alt="amazon" />

                        <p>Delve into financial analysis, risk management, and investment strategies, preparing you for a rewarding career in banking and finance with Gyanarthi’s B Com in Banking and Finance. Explore career options just beyond commerce!
                        </p>

                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <Image src={image3} alt="amazon" />

                        <p>Equip yourself with the language of business, using financial accounting principles to inform critical decisions and ensure financial transparency. Get your hands on Gyanarthi’s Financial Accounting domains and elevate your career now!
                        </p>

                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <Image src={image4} alt="amazon" />

                        <p>Master the intricacies of tax laws and regulations with Gyanarthi’s Taxation specialisations in the B Com course, equipping you to handle tax preparation, advise clients, and ensure tax compliance for individuals and businesses.
                        </p>

                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <Image src={image5} alt="amazon" />

                        <p>Unleash your creative vision at Gyanarthi Media College's Bachelor of Fine Arts program. Explore diverse mediums like painting, sculpture, and graphic design. Develop your artistic skills and gain industry insights to launch your creative career.
                        </p>

                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <Image src={image6} alt="amazon" />

                        <p>Bring your animation and design dreams to life at Gyanarthi Media College. Our Bachelor of Arts equips you with foundational skills, while the Masters in Animation and Design hones your expertise.  Graduate as a creative powerhouse ready to shape the future of visual storytelling.
                        </p>

                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <Image src={image7} alt="amazon" />

                        <p>Elevate your passion for fashion at Gyanarthi Media College. The Bachelor of Science in Fashion Design ignites your creativity, while the Masters of Science refines your skills.  Graduate as a fashion leader, ready to translate trends into stunning collections.
                        </p>

                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <Image src={image8} alt="amazon" />

                        <p>Craft your voice and shape the narrative with Gyanarthi Media College's Journalism & Mass Communication programs. Explore storytelling across platforms in our Bachelor's degree, then delve deeper with the Master's program to become a media powerhouse.
                        </p>

                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}

export default Edge