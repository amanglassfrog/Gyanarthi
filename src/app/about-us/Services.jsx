import React from 'react'
import Image from 'next/image';

import Vector1 from '../../../public/Vector1.png';
import Vector2 from '../../../public/Vector2.png';
import Vector3 from '../../../public/Vector3.png';
import Vector4 from '../../../public/Vector4.png';



const Services = () => {
    return (
        <section className="py-12 px-4 md:px-0 ">
            <div className="max-w-6xl mx-auto container">
                <div className=" p-2 md:p-4 sm:py-8 ">
                    <p className="text-lg chancelorparagraph">
                        Gyanarthi Media College, located in the picturesque city of Kashipur, is an institution that is affiliated with the Kumaun University, Nainital. With an aim of making creative professions accessible for the students with an envisage of building a community of scholars driven by passion. The college is established in the Industrial City of Uttarakhand with an envision to empower the dreams of students while providing them with the best opportunities. We focus on amplifying the craft of our students in their respective domains as we continue to improvise on turning education journeys into an experience at the Gyanarthi Media College. Our diverse faculty works on a specifically curated curriculum to deliver results that outshine the present scenarios in the industry in locations near by.
                        <br></br><br></br>
                        Established  in the year 2015, Gyanarthi Media College has always paced on the path to expand knowledge in domains of Mass Communication, Fashion Design, Animation, and Commerce with an edge of niche specific learning. The college has been strategically set in the city of Kashipur to intensify on the prime opportunities that the city brings forth as the Industrial Center of the State of Uttarakhand. Our Courses are affiliated with the Kumaun University in Nainital and have received recognition from the University Grants Commission. The Board of Directors and Faculty is hinged on building a valuable environment for the students where their creativity can grow as at Gyanarthi, imagination meets ingenuity! <br></br><br></br>
                        So far, Gyanarthi has successfully placed its students across the nation by providing them with a skill-concentric learning experience. Students at Gyanarthi are constantly provided with insights from Industry Experts through the means of Workshops and Industrial Visits. Additionally, the teachers at Gyanarthi are keen on letting the students take ownership of their activities and events that are specific to their course curriculum. This helps the students build a structured experience in learning supported by practical implications which widens the range of their skills. More than 150 companies have visited the Gyanarthi Media College so far only to get impressed by the incredible body of work and cognizance that our students display and further offer them a placement. Firms such as Reliance, NEWS15, IIM Kashipur, ABPL News, The Social Management, and many others have added our students to their valuable teams! <br></br><br></br>

                    </p>
                </div>
                {/* First Row */}
                <div className="mb-8 text-center">
                    <h2 className="whygyan">Why is Gyanarthi the Best Option for you?</h2>
                </div>

                {/* Second Row */}
                <div className="mb-8 text-center">
                    <p className="whygyanpara">
                        Gyanarthi Media College has proved to be one of the best colleges in Kashipur for fields of Animation, Design, Mass Communication, and Commerce. Our expert faculty is supported by industry specific curriculum and standard equipment which helps the students gain all kinds of insight into their fields.                     </p>
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1 */}
                    <div >
                        <div className="mb-4 flex ">
                            <Image className='vector1' src={Vector1} alt="amazon" />
                        </div>
                        <h3 className="whygyanoptions mb-2">Expert Faculty</h3>
                        <p className='whygyanoptionspara'>The faculty at Gyanarthi Media College bring forward eclectic knowledge and comprehends the needs of each students very carefully in order to provide them with the best education. </p>
                    </div>

                    <div >
                        <div className="mb-4 flex ">
                            <Image className='vector2' src={Vector2} alt="amazon" />
                        </div>
                        <h3 className="whygyanoptions mb-2">Modern Infrastructure</h3>
                        <p className='whygyanoptionspara'>The College is built widely in the city of Kashipur, equipped with all facilities to compose a state of the art infrastructure that expands beyond the realms of basic education. </p>
                    </div>
                    <div >
                        <div className="mb-4 flex ">
                            <Image className='vector3' src={Vector3} alt="amazon" />
                        </div>
                        <h3 className="whygyanoptions mb-2">Industrial Specifications</h3>
                        <p className='whygyanoptionspara'>Gyanarthi Media College is the first in the city of Kashipur to offer specializations in fields such as Taxation, Banking and Finance, International Business, and Financial Accounting in B Com. </p>
                    </div>
                    <div >
                        <div className="mb-4 flex ">
                            <Image className='vector4' src={Vector4} alt="amazon" />
                        </div>
                        <h3 className="whygyanoptions mb-2">Workshops and Visits</h3>
                        <p className='whygyanoptionspara'>Students at Gyanarthi are offered with the most insightful educative experience. The college offers constant workshops by Industrial Experts and Visits to real time work spaces for competent study.   </p>
                    </div>
                </div>
            </div>
        </section>)
}

export default Services