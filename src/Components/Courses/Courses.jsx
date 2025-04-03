"use client";
import React, { useState } from "react";
import Image from "next/image";
import course from "../../../public/course.png";
import com from "../../../public/commerce.png";
import design from "../../../public/design.png";
import media from "../../../public/media.png";
import arts from "../../../public/arts.png";

import Link from "next/link";
import { slugify } from "@/utils";

const Courses = () => {
  // const viewersCount = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
  // const viewersCount1 = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
  // const viewersCount2 = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
  // const viewersCount3 = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const courseProgramMap = {
    Commerce: [
      "BCom (3 years)",
      "BCom Banking and Finance (3 years)",
      "BCom Financial Accounting (3 years)",
    ],
    Design: [
      " BFA (4 years)",
      "BA Animation and Design (3 years)",
      "BSc Fashion Designing (3 years)",
      "MA Animation and Design (2 years)",
      "MSc Fashion Designing (2 years)",
    ],
    MassMedia: ["BJMC (3 years)", "MJMC (2 years)"],
  };
  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    setSelectedProgram("");
  };
  const handleSelectProgram = (e) => {
    setSelectedProgram(e.target.value);
    setIsButtonDisabled(false);
  };

  return (
    <main>
      <section className="flex flex-col items-center justify-center py-16 homebutton">
        <h3 className="courses mb-4">Our Courses</h3>
        <p className="text-center coursespara max-w-3xl ">
          Gyanarthi’s academic departments and professional courses are backed
          by industrial insights and strong academic curriculum. We are
          affiliated with the Kumaun University, state institution, which adds
          to the accreditation of our courses.
        </p>
      </section>
      <section className="flex flex-col md:flex-row justify-center ">
        <div className="container flex flex-col md:flex-row sm:flex-row  justify-center">
          <div className="w-full md:w-3/5 flex flex-col justify-center space-y-8 ">
            <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8">
              <div className=" p-6 flex flex-col items-center space-y-4">
                <Image src={com} alt="Course 1" className="w-full " />
                <div className="flex w-full justify-between">
                  <div>
                    <h3 className="coursename">School of Commerce</h3>
                    <p className="text-gray-500 coursepara">
                      5+ Students Viewing this course
                    </p>
                  </div>
                  <div>
                    <a href="/coursepage/bcom">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none coursebutton">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" p-6 flex flex-col items-center space-y-4">
                <Image src={design} alt="Course 1" className="w-full " />
                <div className="flex w-full justify-between">
                  <div>
                    <h3 className="coursename">School of Design</h3>
                    <p className="text-gray-500 coursepara">
                      9+ Students Viewing this course
                    </p>
                  </div>
                  <div>
                    <a href="/coursepage/ba-journalism-and-mass-communication">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none coursebutton">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8">
              {/* Third Card */}
              <div className=" p-6 flex flex-col items-center space-y-4">
                <Image src={media} alt="Course 1" className="w-full " />
                <div className="flex w-full justify-between">
                  <div>
                    <h3 className="coursename">School of Media Studies</h3>
                    <p className="text-gray-500 coursepara">
                      3+ Students Viewing this course
                    </p>
                  </div>
                  <div>
                    <a href="/coursepage/ba-journalism-and-mass-communication">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none coursebutton">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" p-6 flex flex-col items-center space-y-4">
                <Image src={arts} alt="Course 1" className="w-full " />
                <div className="flex w-full justify-between">
                  <div>
                    <h3 className="coursename">School of Fine Arts</h3>
                    <p className="text-gray-500 coursepara">
                      11+ Students Viewing this course
                    </p>
                  </div>
                  <div>
                    <a href="/coursepage/bachelor-of-fine-arts-bfa">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none coursebutton">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-2/5 mt-8 md:mt-0 form">
            <form className=" p-8 ">
              <div className="mb-4">
                <h3 className="fc">Discover Your Perfect Career Path:</h3>
              </div>
              <div className="mb-4">
                <p className="fcpara">
                  Pursue the Futuristic course of your choice. Select your
                  Discipline and Program from the list below
                </p>
              </div>
              <div className="mb-4">
                <div className="flex flex-col gap-8 mb-2">
                  <div className="w-full pr-2">
                    <select
                      className="w-full p-2 border rounded-md"
                      onChange={handleCourseChange}
                      value={selectedCourse}
                    >
                      <option value="">Select Course</option>
                      {Object.keys(courseProgramMap).map((course, index) => (
                        <option key={index} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full pr-2">
                    <select
                      className="w-full p-2 border rounded-md"
                      onChange={handleSelectProgram}
                      value={selectedProgram}
                      disabled={!selectedCourse}
                    >
                      <option value="">Select Program</option>
                      {courseProgramMap[selectedCourse] &&
                        courseProgramMap[selectedCourse].map(
                          (program, index) => (
                            <option key={index} value={program}>
                              {program}
                            </option>
                          )
                        )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-center pt-5">
                {isButtonDisabled ? (
                  <button
                    className="text-white px-4 py-2 vp focus:outline-none disabled:bg-slate-400"
                    disabled
                  >
                    View Program
                  </button>
                ) : (
                  <Link href={`/coursepage/${slugify(selectedProgram)}`}>
                    <button className="text-white px-4 py-2 vp focus:outline-none">
                      View Program
                    </button>
                  </Link>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
