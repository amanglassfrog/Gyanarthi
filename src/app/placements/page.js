import React from "react";
import Image from "next/image";
import college from "../../../public/college.png";
import Header from "../../Components/Header/Header";

import logo1 from "../../../public/placement1.png";
import logo2 from "../../../public/placement2.png";
import logo3 from "../../../public/placement3.png";
import logo4 from "../../../public/placement4.png";
import logo5 from "../../../public/placement5.png";
import logo6 from "../../../public/placement6.png";
import logo7 from "../../../public/placement7.png";
import logo8 from "../../../public/placement8.png";
import logo9 from "../../../public/placement9.png";
import logo10 from "../../../public/placement10.png";
import logo11 from "../../../public/placement11.png";
import logo12 from "../../../public/placement12.png";
import logo13 from "../../../public/placement13.png";
import logo14 from "../../../public/placement14.png";
import logo15 from "../../../public/placement15.png";
import logo16 from "../../../public/placement16.png";
import logo17 from "../../../public/placement17.png";
import logo18 from "../../../public/placement18.png";
import Footer from "@/Components/Footer/Footer";
import wp from "../../../public/wp.png";
import apply from "../../../public/apply.png";
import download from "../../../public/download.png";
import FloatingIcons from "@/Components/FloatingIcons/FloatingIcons";
import Head from "next/head";

const page = () => {
  return (
    <>
     
      
        <main>
          <Header />
          <div>
            {/* Full-width image */}
            <div className="relative -z-10">
              <div>
                <Image src={college} alt="Course 1" className="w-full h-auto" />
              </div>
              {/* Text overlay */}
              <div className=" inset-0 flex items-center justify-center ">
                <h1 className=" text-2xl md:text-4xl font-bold text-center tpip">
                  Placement backed by Potential!{" "}
                </h1>
              </div>
            </div>
          </div>
          <section className=" placement_comapny_slider">
            <div className="container mx-auto ">
              {/* First row new section*/}
              <div className="mb-8">
                <h2 className="text-xl md:text-3xl font-bold leading-tight md:text-center text-left">
                  Gyanarthi Offers Placements at Top Giants
                  <br className="hidden md:inline" /> in the Respective Fields
                </h2>
              </div>
              {/* Second row */}
              <div className="mb-8">
                <p className="text-gray-600 text-center">
                  Gyanarthi ensures that students can pursue professions in the{" "}
                  <br></br>courses of their choice and relative industries of
                  specializations they take up.
                </p>
              </div>
              {/* Third row */}
              <div className="container pt-4 px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-5 gap-28">
                  {/* Image 1 */}
                  <div className="relative ">
                    <Image
                      src={logo1} // Replace with your image URL
                      alt="Image 1"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 2 */}
                  <div className="relative ">
                    <Image
                      src={logo2} // Replace with your image URL
                      alt="Image 2"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 3 */}
                  <div className="relative ">
                    <Image
                      src={logo3} // Replace with your image URL
                      alt="Image 3"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 4 */}
                  <div className="relative ">
                    <Image
                      src={logo4} // Replace with your image URL
                      alt="Image 4"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 5 */}
                  <div className="relative ">
                    <Image
                      src={logo5} // Replace with your image URL
                      alt="Image 5"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  <div className="relative ">
                    <Image
                      src={logo6} // Replace with your image URL
                      alt="Image 1"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 2 */}
                  <div className="relative ">
                    <Image
                      src={logo7} // Replace with your image URL
                      alt="Image 2"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 3 */}
                  <div className="relative ">
                    <Image
                      src={logo8} // Replace with your image URL
                      alt="Image 3"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 4 */}
                  <div className="relative ">
                    <Image
                      src={logo9} // Replace with your image URL
                      alt="Image 4"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 5 */}
                  <div className="relative ">
                    <Image
                      src={logo10} // Replace with your image URL
                      alt="Image 5"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  <div className="relative ">
                    <Image
                      src={logo11} // Replace with your image URL
                      alt="Image 1"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 2 */}
                  <div className="relative ">
                    <Image
                      src={logo12} // Replace with your image URL
                      alt="Image 2"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 3 */}
                  <div className="relative ">
                    <Image
                      src={logo13} // Replace with your image URL
                      alt="Image 3"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 4 */}
                  <div className="relative ">
                    <Image
                      src={logo14} // Replace with your image URL
                      alt="Image 4"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 5 */}
                  <div className="relative ">
                    <Image
                      src={logo15} // Replace with your image URL
                      alt="Image 5"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  <div className="relative ">
                    <Image
                      src={logo16} // Replace with your image URL
                      alt="Image 1"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 2 */}
                  <div className="relative ">
                    <Image
                      src={logo17} // Replace with your image URL
                      alt="Image 2"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 3 */}
                  <div className="relative ">
                    <Image
                      src={logo18} // Replace with your image URL
                      alt="Image 3"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 4 */}
                  <div className="relative ">
                    <Image
                      src={logo1} // Replace with your image URL
                      alt="Image 4"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                  {/* Image 5 */}
                  <div className="relative ">
                    <Image
                      src={logo2} // Replace with your image URL
                      alt="Image 5"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg placementimage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" py-12">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl text-center font-bold mb-8">
                How does Gyanarthi turn Students into Professionals?
              </h3>
              <p className="text-lg text-center mb-8">
                Gyanarthi Media College promotes holistic development and growth
                of the students in potentials that go beyond the academics. In
                order to raise individuals who turn into adept professionals, we
                open the scope of exposure that can elevate the college
                experiences for our students. It is important that the
                workspace's that the students choose, they are fully prepared
                for it. The departments and domains in which education is
                offered at the Gyanarthi Media College are fully backed by
                practical understanding and experience. This helps the students
                bag placement in the companies they aim for. Each field is
                categorically structured to provide the students with the best
                curriculum.
              </p>

              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-yellow-200 p-8 rounded-lg proradius">
                    <h3 className="text-xl font-semibold mb-4 text-center protext">
                      Industry Specific Courses for Advanced Learning
                    </h3>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-green-200 p-8 rounded-lg proradius2">
                    <h3 className="text-xl font-semibold mb-4 text-center protext">
                      Expert Faculty keen on turning Education into Experience
                    </h3>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-red-200 p-8 rounded-lg proradius">
                    <h3 className="text-xl font-semibold mb-4 text-center protext">
                      Workshops and Visits for Practical Understanding
                    </h3>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-blue-200 p-8 rounded-lg proradius2">
                    <h3 className="text-xl font-semibold mb-4 text-center protext">
                      Events where Creativity of Students Flows
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" py-12">
            <div className="container mx-auto px-2 md:px-2 sm:px-4">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <h2 className="text-3xl font-bold md:text-left text-center mb-4 md:mb-0">
                  Start Your Gyanarthi Journey
                </h2>
              </div>
              <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
                <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
                  <div className="p-8">
                    <h3 className=" text-center mb-4 text-white journeyheading">
                      Apply
                    </h3>
                    <p className="text-center mb-6 text-white journeypara">
                      Fill out the Application Form for the upcoming session at
                      Gyanarthi Media College for the year 2024!
                    </p>
                    <button className="bg-transparent  hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block">
                      <a className="flex  items-center gap-3" href="/contact">
                        Apply Now{" "}
                        <Image
                          src={apply}
                          alt="Image Description"
                          className="add"
                        />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
                  <div className="p-8">
                    <h3 className=" text-center mb-4 text-white journeyheading">
                      Connect
                    </h3>
                    <p className="text-center mb-6 text-white journeypara">
                      Reach Out to Gyanarthi’s Admission Team to secure your
                      place at the College for the upcoming session.
                    </p>
                    <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block">
                      <a
                        className="flex  items-center gap-3"
                        href="https://wa.me/8755552552"
                        target="_blank"
                      >
                        Connect Now{" "}
                        <Image
                          src={wp}
                          alt="Image Description"
                          className="add"
                        />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
                  <div className="p-8">
                    <h3 className="text-center mb-4 text-white journeyheading">
                      Brochure
                    </h3>
                    <p className="text-center mb-6 text-white journeypara">
                      Download the 2024 Brochure of the Gyanarthi Media College
                      and explore the Courses and College Life.
                    </p>
                    <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block">
                      <a
                        href="#"
                        download
                        target="_blank"
                        className="flex items-center gap-3"
                      >
                        Download Now
                        <Image
                          src={download}
                          alt="Image Description"
                          className="add"
                        />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FloatingIcons />
          <Footer />
        </main>
      
    </>
  );
};

export default page;
