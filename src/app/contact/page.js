"use client"
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React, { useState } from 'react';
import Image from 'next/image';
import phone from "../../../public/phone.png"
import email from "../../../public/email.png"
import lctn from "../../../public/lctn.png"
import axios from 'axios';
import icon4 from '../../../public/fbsocial.png';
import icon5 from '../../../public/twitter.png';
import icon6 from '../../../public/insta.png';



const page = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://sea-turtle-app-sm5l4.ondigitalocean.app/api/sendMail/gynarthi-web", formData);
            setSubmitted(true);
            // Reset form fields after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error("Form submission failed:", error);
        }
    };
    return (
        <>
            <Header />
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left column for contact information */}
                    <div className='contact p-12'>
                        <h2 className="text-xl font-bold mb-4 contactheading">Contact Information</h2>
                        <p className="mb-4 contactpara">Say something to start a live chat!</p>
                        <div className="flex items-center mb-4 pt-20">
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
                        <div className="flex flex-wrap gap-20 pt-5 items-start sm:items-center pt-24">
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
                    </div>
                    {/* Right column for contact form */}
                    <div className='flex items-center flex-col justify-center w-full'>
                        <form className='w-full' onSubmit={handleSubmit}>
                            <div className="flex  mb-4">
                                <div className="w-1/2 mr-2">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block h-12 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block h-12 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Select Subject?</label>
                                <div className="mt-1 flex items-center">
                                    <input id="subject1" name="subject" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" value="Subject 1" onChange={handleChange} />
                                    <label htmlFor="subject1" className="ml-2 text-gray-700">General Inquiry</label>
                                </div>
                                <div className="mt-1 flex items-center">
                                    <input id="subject2" name="subject" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" value="Subject 2" onChange={handleChange} />
                                    <label htmlFor="subject2" className="ml-2 text-gray-700">Admission Related</label>
                                </div>
                                <div className="mt-1 flex items-center">
                                    <input id="subject3" name="subject" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" value="Subject 3" onChange={handleChange} />
                                    <label htmlFor="subject3" className="ml-2 text-gray-700">Course</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                                <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white applycard focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
                            </div>
                        </form>
                        {submitted && <p className="text-green-600">Message sent successfully!</p>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default page;
