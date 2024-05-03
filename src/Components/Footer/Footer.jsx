// Footer.js

import React from 'react';
import Image from 'next/image';

import icon1 from '../../../public/whatsapp.png';
import icon2 from '../../../public/youtube.png';
import icon3 from '../../../public/lik.png';
import icon4 from '../../../public/fbsocial.png';
import icon5 from '../../../public/twitter.png';
import icon6 from '../../../public/insta.png';
import phone from "../../../public/phone.png"
import email from "../../../public/email.png"
import lctn from "../../../public/lctn.png"


// Footer.js

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <main>
            <footer className="footerbackground text-white py-8">
                <div className="container mx-auto flex flex-wrap pt-8">
                    {/* First column */}
                    <div className=" sm:w-1/2 md:w-1/4 px-4 mb-8 items-start sm:items-center">
                        <h4 className="text-lg mb-4">Explore,  Discover,  Connect.</h4>
                        <div className="flex flex-wrap gap-20 pt-5">
                            {/* Social media icons */}
                            <div className="mb-4">
                                <a href="//api.whatsapp.com/send?phone=+918755552552&text=Hello" target="_blank" rel="noopener noreferrer"><Image className='icon1' src={icon1} alt="amazon" /></a>
                            </div>
                            <div className="mb-4">
                                <a href='https://www.youtube.com/@Gyanarthimediacollege' target='_blank'><Image className='icon1' src={icon2} alt="amazon" /></a>
                            </div>
                            <div className="mb-4">
                                <a href='https://in.linkedin.com/company/gyanarthi-media-college-%E2%80%93-approved-by-govt-of-uttarakhand' target='_blank'><Image className='icon1' src={icon3} alt="amazon" /></a>
                            </div>
                            {/* Add more social media icons */}
                        </div>
                        <div className="flex flex-wrap gap-20 pt-5 items-start sm:items-center">
                            {/* Social media icons */}
                            <div className="mb-4">
                                <a href='https://www.facebook.com/gyanarthimedia1' target='_blank'><Image className='icon1' src={icon4} alt="amazon" /></a>
                            </div>
                            <div className="mb-4">
                                <a href='https://twitter.com/gyanarthimedia?lang=en' target='_blank'><Image className='icon1' src={icon5} alt="amazon" /></a>
                            </div>
                            <div className="mb-4">
                                <a href='https://www.instagram.com/gyanarthimediacollege_kashipur/' target='_blank'><Image className='icon1' src={icon6} alt="amazon" /></a>
                            </div>
                            {/* Add more social media icons */}
                        </div>
                        <h4 className="copyright mb-4 pt-12">@ Copyright {currentYear} - Gyanarthi College</h4>
                        <div className=" flex flex-wrap pt-8 mt-8 pvpolicy">
                            <ul className='flex w-full justify-center gap-6'>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <li><a href="/terms-condition"> Terms & Conditions</a></li>

                            </ul>
                        </div>
                    </div>

                    {/* Second column */}
                    <div className='flex flex-col  sm:w-1/2 md:w-1/4 items-start sm:items-center'>
                        <div className=" px-4 mb-8">

                            <h4 className="text-lg mb-4 footerheading">Important Links</h4>
                            <ul className='flex flex-col gap-6'>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/admissions">Admissions </a></li>
                                <li><a href="/placements">Placement </a></li>
                                <li><a href="/gallery">Campus Life </a></li>
                                <li><a href="/contact">Contact Us </a></li>
                                <li><a href="https://kuntl.net/kumaunLinks/Result/2021?page=1">Results </a></li>


                                {/* Add more menu items */}
                            </ul>
                        </div>

                    </div>

                    <div className='flex flex-col  sm:w-1/2 md:w-1/4 items-start sm:items-center'>
                        <div className=" px-4 mb-8">

                            <h4 className="text-lg mb-4 footerheading">Programs</h4>
                            <ul className='flex flex-col gap-6'>
                                <li><a href="/coursepage?course=Design&program=BSc%20Fashion%20Designing">BSc Fashion Designing</a></li>
                                <li><a href="/coursepage?course=Design&program=MSc%20Fashion%20Designing">MSc Fashion Designing</a></li>
                                <li><a href="/coursepage?course=Design&program=BA%20Animation%20and%20Design">BA Animation & Design</a></li>
                                <li><a href="/coursepage?course=Design&program=MA%20Animation%20and%20Design">MA Animation & Design</a></li>

                                <li><a href="/coursepage?course=Communication,%20and%20Arts&program=Bachelor%20of%20Fine%20Arts%20BFA">Bachelor of Fine Arts BFA</a></li>
                                <li><a href="/coursepage?course=Communication,%20and%20Arts&program=MA%20Journalism%20and%20Mass%20Communication">MA Journalism and Mass Communication</a></li>

                                {/* Add more menu items */}
                            </ul>
                        </div>

                    </div>

                    {/* Fourth column */}
                    <div className='flex flex-col  sm:w-1/2 md:w-1/4 items-start sm:items-center'>
                        <div className=" px-4 mb-8">

                            <h4 className="text-lg mb-4 footerheading opacity-0">Programs</h4>
                            <ul className='flex flex-col gap-6'>
                                <li><a href="/coursepage?course=Commerce&program=BCom">B.com</a></li>

                                <li><a href="/coursepage?course=Commerce&program=BCom%20Taxation">B.com (Taxation) </a></li>
                                <li><a href="/coursepage?course=Commerce&program=BCom%20Financial%20Accounting">B.com (Financial Accounting) </a></li>
                                <li><a href="/coursepage?course=Commerce&program=BCom%20Banking%20and%20Finance">B.com (Banking & Financial) </a></li>
                                <li><a href="/coursepage?course=Commerce&program=BCom%20International%20Business">B.com International Business</a></li>
                                <li><a href="/coursepage?course=Design&program=BA%20Journalism%20and%20Mass%20Communication">BA Journalism and Mass Communication</a></li>



                                {/* Add more menu items */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='footercontact  px-4'>

                        <div className="flex items-center mb-4 pt-5">
                            <Image className="h-6 w-6 mr-2" src={phone} alt='phone' />
                            <span>+91 8755552552, +91 8630274038, +91 8171220333</span>
                        </div>
                        <div className="flex items-center mb-4 pt-8">
                            <Image className="h-6 w-6 mr-2" src={email} alt='phone' />

                            <span>gyanarthimedia@gmail.com</span>
                        </div>
                        <div className="flex items-center pt-8">
                            <Image className="h-6 w-6 mr-2" src={lctn} alt='phone' />

                            <span>Opp. Old Galla Mandi, Ahead of Spectrum Mall, Kashipur, Uttarakhnad 244713</span>
                        </div>

                    </div>
                </div>

            </footer>
        </main >
    );
};

export default Footer;
