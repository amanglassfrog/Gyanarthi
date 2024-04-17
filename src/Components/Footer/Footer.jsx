// Footer.js

import React from 'react';
import Image from 'next/image';

import icon1 from '../../../public/whatsapp.png';
import icon2 from '../../../public/youtube.png';
import icon3 from '../../../public/lik.png';
import icon4 from '../../../public/fbsocial.png';
import icon5 from '../../../public/twitter.png';
import icon6 from '../../../public/insta.png';


// Footer.js

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <main>
            <footer className="footerbackground text-white py-8">
                <div className="container mx-auto flex flex-wrap pt-8">
                    {/* First column */}
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 items-start sm:items-center">
                        <h4 className="text-lg mb-4">Explore.  Discover.  Connect.</h4>
                        <div className="flex flex-wrap gap-20 pt-5">
                            {/* Social media icons */}
                            <div className="mb-4">
                                <a href="https://wa.me/8755552552" target="_blank" rel="noopener noreferrer"><Image className='icon1' src={icon1} alt="amazon" /></a>
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
                        <h4 className="copyright mb-4 pt-12">@Copyright {currentYear} - Gyanarthi College</h4>
                    </div>

                    {/* Second column */}
                    <div className='flex flex-col w-full sm:w-1/2 md:w-1/4 items-start sm:items-center'>
                        <div className=" px-4 mb-8">

                            <h4 className="text-lg mb-4 footerheading">About Us</h4>
                            <ul className='flex flex-col gap-6'>
                                <li><a href="#">Vision & Mission</a></li>
                                <li><a href="#">Milestone </a></li>
                                <li><a href="#">Accomplishments </a></li>
                                <li><a href="#">Milestones </a></li>

                                {/* Add more menu items */}
                            </ul>
                        </div>
                        <div className=" px-4 mb-8">

                            <h4 className="text-lg mb-4 footerheading">About Us</h4>
                            <ul className='flex flex-col gap-6'>
                                <li><a href="#">Vision & Mission</a></li>
                                <li><a href="#">Milestone </a></li>
                                <li><a href="#">Accomplishments </a></li>
                                <li><a href="#">Milestones </a></li>

                                {/* Add more menu items */}
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col w-full sm:w-1/2 md:w-1/4 items-start sm:items-center'>
                        <div className=" px-4 mb-8">

                            <h4 className="text-lg mb-4 footerheading">About Us</h4>
                            <ul className='flex flex-col gap-6'>
                                <li><a href="#">Vision & Mission</a></li>
                                <li><a href="#">Milestone </a></li>
                                <li><a href="#">Accomplishments </a></li>
                                <li><a href="#">Milestones </a></li>

                                {/* Add more menu items */}
                            </ul>
                        </div>
                        <div className=" px-4 mb-8">

                            <h4 className="text-lg mb-4 footerheading">About Us</h4>
                            <ul className='flex flex-col gap-6'>
                                <li><a href="#">Vision & Mission</a></li>
                                <li><a href="#">Milestone </a></li>
                                <li><a href="#">Accomplishments </a></li>
                                <li><a href="#">Milestones </a></li>

                                {/* Add more menu items */}
                            </ul>
                        </div>
                    </div>

                    {/* Fourth column */}
                    <div className='flex flex-col w-full sm:w-1/2 md:w-1/4 items-start sm:items-center'>
                        <div className=" px-4 mb-8">

                            <h4 className="text-lg mb-4 footerheading">Programs</h4>
                            <ul className='flex flex-col gap-6'>
                                <li><a href="/coursepage?course=Commerce&program=BCom">B.COM</a></li>
                                <li><a href="/coursepage?course=Commerce&program=BCom%20Taxation">B.COM (Taxation) </a></li>
                                <li><a href="/coursepage?course=Commerce&program=BCom%20Financial%20Accounting">B.COM (Financial Accounting) </a></li>
                                <li><a href="/coursepage?course=Commerce&program=BCom%20Banking%20and%20Finance">B.COM (Banking & Financial) </a></li>
                                <li><a href="/coursepage?course=Commerce&program=BCom%20International%20Business">BCom International Business</a></li>
                                <li><a href="/coursepage?course=Design&program=BA%20Journalism%20and%20Mass%20Communication">BA Journalism and Mass Communication</a></li>
                                <li><a href="/coursepage?course=Design&program=BSc%20Fashion%20Designing">BSc Fashion Designing</a></li>
                                <li><a href="/coursepage?course=Design&program=MSc%20Fashion%20Designing">MSc Fashion Designing</a></li>
                                <li><a href="/coursepage?course=Communication,%20and%20Arts&program=BA%20Journalism%20and%20Mass%20Communication">BA Journalism and Mass Communication</a></li>
                                <li><a href="/coursepage?course=Communication,%20and%20Arts&program=Bachelor%20of%20Fine%20Arts%20BFA">Bachelor of Fine Arts BFA</a></li>
                                <li><a href="/coursepage?course=Communication,%20and%20Arts&program=MA%20Journalism%20and%20Mass%20Communication">MA Journalism and Mass Communication</a></li>


                                {/* Add more menu items */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-wrap pt-8 mt-8 pvpolicy">
                    <ul className='flex w-full justify-center gap-6'>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#"> Terms & Conditions</a></li>
                        {/* <li><a href="#">Accomplishments </a></li>
                    <li><a href="#">Milestones </a></li> */}

                        {/* Add more menu items */}
                    </ul>
                </div>
            </footer>
        </main>
    );
};

export default Footer;
