"use client"
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Image from 'next/image';
import kalakari from "../../../public/kalakari.png"
import kreeda from "../../../public/kreeda.png"
import literature from "../../../public/literature.png"
import photography from "../../../public/photography.png"
import social from "../../../public/social.png"
import culture from "../../../public/culture.png"
import edge from '../../../public/edge.png';

const Ourvision = () => {
    return (
        <main>
            <section className="py-12 px-4 md:px-0">
                <div className="max-w-6xl mx-auto vdiv container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 futurevision">
                        {/* First Column */}
                        <div>
                            {/* First Row */}
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold ourfutureheading">Learn Our Past, Join Our Future</h2>
                            </div>
                            {/* Second Row */}
                            <div className="mb-8">
                                <p className="text-lg ourfutureparagraph">
                                    Established in 2005 with an aim to empower students with best academic excellence, Gyanarthi Media College is affiliated with the Kumaun University and is one of the only colleges in Kashipur that provides courses in Media, Animation, Design, Fashion, Journalism, Banking, Taxation, and more.
                                </p>
                            </div>
                        </div>

                        {/* Second Column */}
                        <div>
                            <div>
                                <Tabs className="vtabs">
                                    <TabList className="tablist ">
                                        <Tab className="stab">Who Are We</Tab>
                                        <Tab className="stab">Our Vision</Tab>
                                        <Tab className="stab">Our Mission</Tab>
                                    </TabList>
                                    <div className='flex flex-col tablistpanel'>
                                        <TabPanel className="tabpanel futurevision">
                                            <p>University to build a strong community of professionals equipped with relevant academic insights. We are only college in the town that provides an intensive curriculum in fields such as Taxation, International Business, Banking and Finance, and Financial Accounting.<br></br><br></br>

                                                Our Media, Journalism, Design, Animation, and Mass Communication curriculum are supported by an experienced faculty that is competent in the respective fields.<br></br><br></br>

                                                Fashion Course at Gyanarthi inculcates  comprehensive insights into the Indian Textile Industries for relevant academic proficiency</p>

                                            <div className=' pt-5'>
                                                <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/vision'>Read More</a></button>
                                            </div>
                                        </TabPanel>
                                        <TabPanel className="tabpanel futurevision">
                                            <p>Our Vision is to contribute to the strong global community of media, arts, and culture through powerful collaborations and promote intellectual diversity through artistic innovations.<br></br><br></br>

                                                We envision to promote creativity and entrepreneurship within the student community in a balanced, comprehensive way so as to fuel careers that are inspired by true dedication for respective fields.<br></br><br></br>

                                                Our faculty is highly affirmative at delivering quality education in  the town of Kashipur to promote academia in most understandable and feasible manner.
                                            </p>
                                            <div className=' pt-5'>
                                                <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/vision'>Read More</a></button>
                                            </div>
                                        </TabPanel>
                                        <TabPanel className="tabpanel futurevision">
                                            <p>Gyanarthi Media College aims to inspire youngsters to turn into the leaders of tomorrow. We seek to create a strong sense of unity in the media and arts community by bridging gaps and creating incredible artistic experiences in film, fashion, television, print, radio, and digital media.<br></br><br></br>

                                                We aspire to create a pedagogical milestone by nurturing scholastic abilities in the arena of teaching, learning and research.<br></br><br></br>

                                                We train young professionals by inculcating sensitivity, encouraging intersectional approaches to media and management and diversifying entrepreneurial visions with the help of industry experts.</p>
                                            <div className=' pt-5'>
                                                <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/vision'>Read More</a></button>
                                            </div>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='max-w-6xl mx-auto container'>
                    <div className='py-8 '>
                        <h2 className="lifetime mb-4">Exposure that you can value for a Lifetime</h2>
                        <p className="lifetimepara">
                            Our student community is not only adept with academic brilliance, but they are also equipped with skills that extend beyond  education. We ensure an exposure that is valuable and create an environment where holistic growth of students are ensured. Our extracurricular clubs, constant workshops, trips, sports events,                     </p>
                        <Tabs className="etabs">
                            <TabList className="etablist">
                                <Tab className=" etab ">Kalakari: Art Club</Tab>
                                <Tab className="etab ">Kreeda: Sports Club</Tab>
                                <Tab className="etab ">Lekha Jokha: Accountancy Club</Tab>
                                <Tab className="etab ">Literati: Literature Club</Tab>
                                <Tab className="etab ">Photokari: Photography Club</Tab>
                                <Tab className="etab ">Shrijan: Social Club</Tab>
                                <Tab className="etab ">Tamasha: Cultural Club</Tab>

                            </TabList>
                            <div>

                                <TabPanel className="tabpanel">
                                    <Image src={kalakari} alt="amazon" />

                                    <p>The Kalakari Club at the Gyanarthi Media College promotes the artistic interests beyond just education. The students at the Art club have participated in and hosted an array of exhibitions which have garnered appreciation in all ways.
                                    </p>
                                </TabPanel>
                                <TabPanel className="tabpanel">
                                    <Image src={kreeda} alt="amazon" />

                                    <p>Physical Development of students often takes a backseat when they enter colleges but with Gyanarthi’s Kreeda Club, the students get to stay up to date with their sports interests. Our students engage in variety of games and sports and have won major internal and external competitions.
                                    </p>

                                </TabPanel>
                                <TabPanel className="tabpanel">
                                    <Image src={edge} alt="amazon" />

                                    <p>With brains flourishing in Commerce, Gyanarthi’s students have devised their way of channeling their accountancy skills through the Lekha Jokha Club. The students keep exploring their accuracies and financial competencies with each oher’s support through this community.
                                    </p>

                                </TabPanel>
                                <TabPanel className="tabpanel">
                                    <Image src={literature} alt="amazon" />

                                    <p>Words are mightier than the swords. This saying never dulls away, especially at the Gyanarthi Media College. We encourage students and their flair for verbosity as they take support of each other’s creativity in the Literati Club!
                                    </p>

                                </TabPanel>
                                <TabPanel className="tabpanel">
                                    <Image src={photography} alt="amazon" />

                                    <p>The passion for Pictorials has fueled the creativity of students at Gyanarthi for a long time. To set the frame straight beyond the curriculum, the Photokari club is always active with some great visuals and pictures to look at!
                                    </p>

                                </TabPanel>
                                <TabPanel className="tabpanel">
                                    <Image src={social} alt="amazon" />

                                    <p>Social activities and discussions have always flourished in the Gyanarthi Media College campus. To provide enhanced channels to relative events and activities within the premise, the Shrijan Club is run by the students round the clock!
                                    </p>

                                </TabPanel>
                                <TabPanel className="tabpanel">
                                    <Image src={culture} alt="amazon" />

                                    <p>Cultural Events is always a very interesting domain. For students at Gyanarthi, their drive to participation in cultural activities are provided a stage by the Tamasha Club. The students take ownership and display a memorable depiction in the most commendable ways!
                                    </p>

                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </section>
        </main>)
}

export default Ourvision