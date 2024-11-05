import React from "react";
import Image from "next/image";
import image1 from "../../../public/image1.png";
import image2 from "../../../public/image2.png";
import image3 from "../../../public/image3.png";
import image4 from "../../../public/image4.png";
import image5 from "../../../public/image5.png";
import image6 from "../../../public/image6.png";
import image7 from "../../../public/image7.png";
import image8 from "../../../public/image8.png";
import image9 from "../../../public/image9.png";

const Homegallery = () => {
  return (
    <main>
      <div className=" mx-auto p-3 md:p-6 sm:p-12 py-12">
        <div className="mb-8 text-center">
          <h2 className="galleryheading">
            Experience Campus Life: Inside Gyanarthi
          </h2>
        </div>

        {/* Second Row */}
        <div className="mb-8 text-center">
          <p className="gallerypara">
            Take a stroll through our pictorials that are all about our
            students, faculty, staff, moments to reminisce,<br></br> behind the
            scenes, and so much more!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:p-4 sm:p-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <Image
                src={image1}
                alt="Image 1"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="col-span-1">
              <Image
                src={image2}
                alt="Image 2"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="col-span-1">
              <Image
                src={image3}
                alt="Image 1"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="col-span-1">
              <Image
                src={image4}
                alt="Image 2"
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          <div>
            <Image
              src={image5}
              alt="Image 4"
              className="w-full h-full object-cover "
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <Image
                src={image6}
                alt="Image 5"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="col-span-1">
              <Image
                src={image7}
                alt="Image 6"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="col-span-1">
              <Image
                src={image8}
                alt="Image 5"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="col-span-1">
              <Image
                src={image9}
                alt="Image 6"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
        <div className="pt-5 flex justify-center">
          <button className="text-white px-4 py-2 vp focus:outline-none">
            <a href="/gallery">View More</a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Homegallery;
