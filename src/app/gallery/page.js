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
import image10 from "../../../public/image10.JPG";
import image11 from "../../../public/image11.JPG";
import image12 from "../../../public/image12.JPG";
import image13 from "../../../public/image13.JPG";
import image14 from "../../../public/image14.jpeg";
import image15 from "../../../public/image15.jpeg";
import image16 from "../../../public/image16.png";
import image17 from "../../../public/image17.png";
import image18 from "../../../public/image18.png";
import image19 from "../../../public/image19.png";
import image20 from "../../../public/image20.png";
import image21 from "../../../public/image21.JPG";
import image22 from "../../../public/image22.JPG";
import image23 from "../../../public/image23.jpeg";
import image24 from "../../../public/image24.jpeg";
import image25 from "../../../public/image25.jpeg";
import image26 from "../../../public/image26.JPG";
import image27 from "../../../public/image27.JPG";

import gallery from "../../../public/gallery.png";

import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import FloatingIcons from "@/Components/FloatingIcons/FloatingIcons";

const page = () => {
  return (
    <>
      <head>
        <title>Pictures and Behind the Scenes at Gyanarthi Media College</title>
        <meta
          name="description"
          content="Want to know how life is at Gyanarthi Media College, located in the picturesque city of Kashipur? Check out our Gallery for pictures and behind-the-scenes!"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-956907995"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-956907995');
              `,
          }}
        ></script>
      </head>
      <body>
        <main>
          <Header />
          <div>
            {/* Full-width image */}
            <div className="relative">
              <div>
                <Image src={gallery} alt="Course 1" className="w-full h-auto" />
              </div>
              {/* Text overlay */}
            </div>
          </div>
          <div className=" mx-auto p-3 md:p-6 sm:p-12 py-12">
            <div className="mb-8 text-center">
              <h2 className="galleryheading">Gallery and Behind the Scenes</h2>
            </div>

            {/* Second Row */}
            <div className="mb-8 text-center">
              <p className="gallerypara">
                Explore our visual galleries highlighting our students, faculty,
                and staff—capturing memorable moments and fostering nostalgia.{" "}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:p-4 sm:p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <Image
                    src={image10}
                    alt="Image 1"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={image11}
                    alt="Image 2"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={image12}
                    alt="Image 1"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={image13}
                    alt="Image 2"
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>

              <div>
                <Image
                  src={image14}
                  alt="Image 4"
                  className="w-full h-full object-cover "
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <Image
                    src={image15}
                    alt="Image 5"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={image16}
                    alt="Image 6"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={image17}
                    alt="Image 5"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={image18}
                    alt="Image 6"
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:p-4 sm:p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <Image
                    src={image19}
                    alt="Image 1"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={image20}
                    alt="Image 2"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={image21}
                    alt="Image 1"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={image22}
                    alt="Image 2"
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>

              <div>
                <Image
                  src={image23}
                  alt="Image 4"
                  className="w-full h-full object-cover "
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <Image
                    src={image24}
                    alt="Image 5"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={image25}
                    alt="Image 6"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={image26}
                    alt="Image 5"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={image27}
                    alt="Image 6"
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
          <FloatingIcons />
          <Footer />
        </main>
      </body>
    </>
  );
};

export default page;
