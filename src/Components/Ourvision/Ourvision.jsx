"use client"
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



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
                                            <p>Gyanarthi Media College, Kashipur is affiliated with the Kumaon University to build a strong community of professionals equipped with relevant academic insights. We are only college in the town that provides an intensive curriculum in fields such as Taxation, International Business, Banking and Finance, and Financial Accounting.<br></br><br></br>

                                                Our Media, Journalism, Design, Animation, and Mass Communication curriculum are supported by an experienced faculty that is competent in the respective fields.<br></br><br></br>

                                                Fashion Course at Gyanarthi inculcates  comprehensive insights into the Indian Textile Industries for relevant academic proficiency.</p>
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
                            Our student community is not only adept with academic brilliance, but they are also equipped with skills that extend beyond  education. We ensure an exposure that is valuable and create an environment where holistic growth of students are ensured.    </p>
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
                                    <p className='kalakari'>The Kalakari Club at Gyanarthi Media College serves as a hub for nurturing artistic passions that extend far beyond academic pursuits. It functions as a platform where students explore their creativity beyond the confines of traditional education. Through the club, students engage in a diverse range of artistic endeavors, from painting to sculpture, and even performance art. The club's activities go beyond mere artistic expression; they foster a sense of community and collaboration among students with shared interests.

                                        Within the vibrant atmosphere of the Art club, students not only showcase their talents but also actively participate in organizing exhibitions. These exhibitions serve as opportunities for students to display their creations to a wider audience, gaining recognition and appreciation for their artistic endeavors. The exhibitions hosted by the club have been met with acclaim, attracting attention from both within and outside the college community. Through these events, the Kalakari Club continues to inspire and uplift aspiring artists, creating a space where creativity knows no bounds.</p>
                                </TabPanel>
                                <TabPanel className="tabpanel">
                                    <p className='kalakari'>The physical development of students is a crucial aspect often overlooked upon entering college life. However, at Gyanarthi, the Kreeda Club ensures that students maintain a balance by actively participating in sports and games. By fostering a culture of physical activity, the club encourages students to prioritize their health and well-being alongside their academic pursuits. Through a diverse range of sports and games, students have the opportunity to stay active, build stamina, and develop essential life skills such as teamwork and leadership.

                                        Within the Kreeda Club, Gyanarthi students not only engage in regular sporting activities but also showcase their talents through participation in various competitions. Both internally and externally, our students have achieved remarkable success, emerging victorious in prestigious tournaments and championships. These achievements not only highlight the dedication and skill of our students but also reflect the supportive environment and quality coaching provided by the Kreeda Club. As a result, Gyanarthi continues to uphold its commitment to holistic development, ensuring that students excel not only academically but also athletically.</p>

                                </TabPanel>
                                <TabPanel className="tabpanel">
                                    <p className='kalakari'>In the realm of Commerce, Gyanarthi's students showcase exceptional intellectual capabilities, particularly in the field of accountancy, through the Lekha Jokha Club. Within this club, students actively refine their accounting skills and financial acumen, leveraging the support and camaraderie of their peers. Through collaborative efforts and mutual encouragement, members of the Lekha Jokha Club continually explore new avenues to enhance their accuracy and proficiency in financial matters. This vibrant community serves as a platform for students to exchange ideas, engage in discussions, and collectively pursue excellence in the realm of commerce.

                                        Furthermore, Gyanarthi's Lekha Jokha Club fosters an environment where students can delve deeper into the intricacies of financial management and accounting principles. By participating in various club activities and discussions, students gain practical insights and hands-on experience, preparing them for real-world challenges in the field of commerce. Through workshops, seminars, and interactive sessions organized by the club, students develop a strong foundation in financial literacy and analytical thinking. The Lekha Jokha Club not only nurtures individual talents but also cultivates a sense of teamwork and collaboration among its members, empowering them to excel in their academic and professional endeavors.</p>

                                </TabPanel>
                                <TabPanel className="tabpanel">
                                    <p className='kalakari'>The adage "Words are mightier than the swords" remains ever-relevant, finding particular resonance at Gyanarthi Media College. Here, we celebrate the power of language and expression, nurturing students' eloquence and creativity within the vibrant community of the Literati Club. Through engaging discussions, collaborative projects, and literary pursuits, students hone their writing skills and cultivate a deep appreciation for the written word. Within the welcoming embrace of the Literati Club, students find encouragement and support as they explore the nuances of language, literature, and communication.

                                        Moreover, at Gyanarthi Media College, the Literati Club serves as a haven for budding wordsmiths and storytellers to flourish. With a focus on fostering a love for literature and fostering a spirit of camaraderie, the club provides a platform for students to showcase their literary talents and share their unique voices with the world. Through workshops, poetry readings, and literary events, students not only refine their writing abilities but also forge meaningful connections with like-minded peers. The Literati Club embodies the belief that the pen holds immense power, inspiring students to wield their words with confidence and purpose.





                                    </p>

                                </TabPanel>
                                <TabPanel className="tabpanel">
                                    <p className='kalakari'>At Gyanarthi, the passion for Pictorials has long been a driving force behind students' creativity. Going beyond the confines of the curriculum, the Photokari Club thrives on capturing captivating visuals and images that captivate the imagination. Through a lens of artistic expression, students in the club explore the world around them, seeking beauty in the mundane and inspiration in the unexpected.

                                        The Photokari Club serves as a vibrant hub for budding photographers and visual storytellers to hone their craft and share their unique perspectives. With a focus on cultivating creativity and fostering a sense of community, the club provides a platform for students to showcase their photographic talents and engage in meaningful dialogue about the power of imagery. Through workshops, photo walks, and exhibitions, students not only refine their technical skills but also deepen their appreciation for the art of photography. The Photokari Club celebrates the transformative power of visual storytelling, empowering students to capture moments that inspire, provoke thought, and evoke emotion.</p>

                                </TabPanel>
                                <TabPanel className="tabpanel">
                                    <p className='kalakari'>Social activities and discussions have long been at the heart of the vibrant Gyanarthi Media College campus. Recognizing the importance of fostering a sense of community and promoting engagement among students, the Shrijan Club serves as a dynamic platform for organizing and facilitating various events and activities. From insightful panel discussions to engaging workshops, the club endeavors to create opportunities for students to explore diverse interests and perspectives.

                                        Driven by a passion for innovation and collaboration, the Shrijan Club empowers students to take an active role in shaping campus culture and promoting social cohesion. Through its tireless efforts, the club seeks to cultivate a vibrant and inclusive community where students feel inspired to express themselves, connect with others, and make a positive impact. With its commitment to fostering creativity and fostering meaningful connections, the Shrijan Club plays a vital role in enriching the collegiate experience and nurturing the holistic development of students at Gyanarthi Media College.</p>

                                </TabPanel>
                                <TabPanel className="tabpanel">
                                    <p className='kalakari'>
                                        Cultural events provide an enriching avenue for expression and celebration, and at Gyanarthi, students find a vibrant platform for their creative endeavors through the Tamasha Club. With a commitment to fostering a lively and inclusive cultural scene, the club empowers students to showcase their talents and immerse themselves in diverse artistic traditions. From captivating performances to immersive exhibitions, the Tamasha Club brings together students from all backgrounds to celebrate the rich tapestry of cultures and traditions.

                                        Driven by a passion for creativity and collaboration, the Tamasha Club serves as a catalyst for cultural exchange and dialogue. Through its diverse array of events and activities, the club seeks to promote cultural awareness, appreciation, and understanding among students. By providing a space for students to express themselves and engage with different cultural perspectives, the Tamasha Club plays a vital role in fostering a sense of community and belonging at Gyanarthi.</p>

                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </section>
        </main>)
}

export default Ourvision