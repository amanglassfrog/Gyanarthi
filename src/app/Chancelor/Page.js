import React from 'react'
import Image from 'next/image';
import chancelor1 from '../../../public/chancelor1.png';
import Header from '../../Components/Header/Header';
import Footer from '@/Components/Footer/Footer';

const Page = () => {
    return (
        <>
            <main>
                <Header />
                <div className="flex flex-wrap py-8 p-6 md:p-12 sm:px-24">
                    <div className="w-full md:w-1/2  p-0 md:p-2 sm:p-4">
                        <h2 className="text-xl font-bold chancelorheading">FROM THE CHANCELLOR'S DESK</h2>
                        <p className="mt-2 chancelorparagraph">
                            To create an educated and socially sensitive citizenry that is mindful
                            of their rich cultural heritage and also equipped to adopt and adapt
                            to a dynamic learning-ecosystem.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2  p-0 md:p-2 sm:p-4">

                        <Image src={chancelor1} alt="Image Description"
                            className="max-w-full h-auto" />

                    </div>
                </div>
                <div className="py-8 p-6 md:p-12 sm:px-24">
                    <p className="text-lg chancelorparagraph">
                        Gyanarthi Media College in Kashipur Affiliated to Kumaun University gives a creative space where imagination meets ingenuity. With our state-of-the-art resources, professional art equipment, intensive curriculum, and creative & visionary faculty, we guide budding artists in maximizing their potential. GMC is a premier Media & Fashion College in a state-of-the-art infrastructure, where students, researchers and media professionals interact to facilitate dynamic career paths.<br></br><br></br> GMC provides courses in Commerce, Fashion Designing, Animation, Fine Arts, Communication & Journalism Filmmaking at undergraduate and postgraduate levels, and offers Postgraduate Programs in various verticals of the media such as Digital Marketing, Advertising and Communications, Animation , Event Management & Filmmaking; GMC goes beyond the traditional teaching method and focuses more on the self-discovery of students’ potential. Gyanarthi boasts of rich cultural engagement and academic excellence.<br></br><br></br>
                        Gyanarthi Media College in Kashipur Affiliated to Kumaun University gives a creative space where imagination meets ingenuity. With our state-of-the-art resources, professional art equipment, intensive curriculum, and creative & visionary faculty, we guide budding artists in maximizing their potential. GMC is a premier Media & Fashion College in a state-of-the-art infrastructure, where students, researchers and media professionals interact to facilitate dynamic career paths. <br></br><br></br>GMC provides courses in Commerce, Fashion Designing, Animation, Fine Arts, Communication & Journalism Filmmaking at undergraduate and postgraduate levels, and offers Postgraduate Programs in various verticals of the media such as Digital Marketing, Advertising and Communications, Animation , Event Management & Filmmaking; GMC goes beyond the traditional teaching method and focuses more on the self-discovery of students’ potential. Gyanarthi boasts of rich cultural engagement and academic excellence.<br></br><br></br>
                        Gyanarthi Media College in Kashipur Affiliated to Kumaun University gives a creative space where imagination meets ingenuity. With our state-of-the-art resources, professional art equipment, intensive curriculum, and creative & visionary faculty, we guide budding artists in maximizing their potential. GMC is a premier Media & Fashion College in a state-of-the-art infrastructure, where students, researchers and media professionals interact to facilitate dynamic career paths. <br></br><br></br>GMC provides courses in Commerce, Fashion Designing, Animation, Fine Arts, Communication & Journalism Filmmaking at undergraduate and postgraduate levels, and offers Postgraduate Programs in various verticals of the media such as Digital Marketing, Advertising and Communications, Animation , Event Management & Filmmaking; GMC goes beyond the traditional teaching method and focuses more on the self-discovery of students’ potential. Gyanarthi boasts of rich cultural engagement and academic excellence.<br></br><br></br>

                    </p>
                </div>
                <div className="py-8 p-6 md:p-12 sm:px-24">
                    <h2 className="text-xl font-bold chancelorname">Name</h2>
                    <p className="mt-2 chancelorfounder">
                        Founder & Chancellor
                    </p>
                </div>
                <Footer />
            </main>
        </>
    )
}

export default Page