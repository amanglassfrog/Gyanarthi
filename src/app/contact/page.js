
"use client";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import phone from "../../../public/phone.png";
import email from "../../../public/email.png";
import lctn from "../../../public/lctn.png";
import axios from "axios";
import slogan from "../../../public/slogan.jpg";
import icon5 from "../../../public/twitter.png";
import icon6 from "../../../public/insta.png";
import FloatingIcons from "@/Components/FloatingIcons/FloatingIcons";
import Head from "next/head";


const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://sea-turtle-app-sm5l4.ondigitalocean.app/api/sendMail/gynarthi-web",
        formData
      );
      setSubmitted(true);
      // Reset form fields after successful submission
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert(
        "This phone number has already been used once, please try a different number.",
        error
      );
    }
  };
  return (
   
    <>
      {/* <head>
       
         <title>
          Contact Us at Gyanarthi  College for Admissions & More
        </title>
        <meta
          name="description"
          content="With Gyanarthi  College, you get the best education in Fashion, Media, Commerce, Fine Arts, Animation and Design. Contact Us for Queries and More Today!"
          key="desc"
        />
      </head> */}
       <main>
      <Header />
          <div className="container mx-auto py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column for contact information */}
              <div className="contact p-12">
                <Image className=" mr-2" src={slogan} alt="phone" />
              </div>
              {/* Right column for contact form */}
              <div className="flex items-center flex-col justify-center w-full">
                <h1 className="text-left font-bold chancelorheading pb-5">
                  Contact Us
              </h1>
              <h2 className="font-bold">Gyanarthi  College</h2>
                <form className="w-full" onSubmit={handleSubmit}>
                  <div className="flex  mb-4">
                    <div className="w-1/2 mr-2">
                      <label
                        htmlFor="name"
                        className="block text-md font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block h-12 w-full rounded-md border-gray-300   border border-solid
"
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label
                        htmlFor="lastName"
                        className="block text-md font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-1 block h-12 w-full rounded-md border-gray-300 border border-solid
"
                      />
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="w-1/2 mr-2">
                      <label
                        htmlFor="email"
                        className="block text-md font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full h-12 rounded-md border-gray-300 border border-solid
"
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label
                        htmlFor="phone"
                        className="block text-md font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        required
                        onChange={handleChange}
                        className="mt-1 block w-full h-12 rounded-md border-gray-300 border border-solid
"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-md font-medium text-gray-700"
                      required
                    >
                      Select Subject?
                    </label>
                    <div className="mt-1 flex items-center">
                      <input
                        id="subject1"
                        name="subject"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        value="General Inquiry"
                        onChange={handleChange}
                      />
                      <label htmlFor="subject1" className="ml-2 text-gray-700">
                        General Inquiry
                      </label>
                    </div>
                    <div className="mt-1 flex items-center">
                      <input
                        id="subject2"
                        name="subject"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        value="Admission Related"
                        onChange={handleChange}
                      />
                      <label htmlFor="subject2" className="ml-2 text-gray-700">
                        Admission Related
                      </label>
                    </div>
                    <div className="mt-1 flex items-center">
                      <input
                        id="subject3"
                        name="subject"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        value="Course"
                        onChange={handleChange}
                      />
                      <label htmlFor="subject3" className="ml-2 text-gray-700">
                        Course
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-md font-medium text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full h-12 rounded-md border-gray-300 border border-solid
"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white applycard focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                {submitted && (
                  <p className="text-green-600">Message sent successfully!</p>
                )}
              </div>
            </div>
          </div>
          <FloatingIcons />
        <Footer />
        </main>
      </>
  );
};

export default page;
