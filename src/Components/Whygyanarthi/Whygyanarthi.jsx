import React from "react";
import Image from "next/image";

import Vector1 from "../../../public/Vector1.png";
import Vector2 from "../../../public/Vector2.png";
import Vector3 from "../../../public/Vector3.png";
import Vector4 from "../../../public/Vector4.png";

const Whygyanarthi = () => {
  return (
    <main>
      <section className="py-12 px-4 md:px-0 ">
        <div className="mx-auto container">
          {/* First Row */}
          <div className="mb-8 text-center">
            <h2 className="whygyan">Why Gyanarthi?</h2>
          </div>

          {/* Second Row */}
          <div className="mb-8 text-center">
            <p className="whygyanpara">
              Its courses are tailored to the needs of the business and are
              characterised by modern values ​​and expertise. Affiliated with
              the Kumaun University, the college is home to top faculty and has
              a state-of-the-art infrastructure. Providing best education in
              mass communication, animation, design, and commerce, Gyanarthi
              Media College elevates the academia experience for the students in
              Kashipur and beyond!
            </p>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <div className="mb-4">
                <Image className="vector1" src={Vector1} alt="amazon" />
              </div>
              <h3 className="urban mb-2">Urban Infrastructure</h3>
              <p className="urbanpara">
                Equipped with the best facilities, the campus of Gyanarthi Media
                College is widespread in the beautiful city of Kashipur.
              </p>
            </div>

            <div>
              <div className="mb-4">
                <Image className="vector2" src={Vector2} alt="amazon" />
              </div>
              <h3 className="urban mb-2">Diverse Faculty</h3>
              <p className="urbanpara">
                The teachers at Gyanarthi belong to diverse academic
                backgrounds. Their experience and expertise ensures quality
                education.{" "}
              </p>
            </div>
            <div>
              <div className="mb-4">
                <Image className="vector3" src={Vector3} alt="amazon" />
              </div>
              <h3 className="urban mb-2">Professional Streams</h3>
              <p className="urbanpara">
                Bachelor of Commerce at Gyanarthi has professional streams such
                as Taxation, International Business, and more.{" "}
              </p>
            </div>
            <div>
              <div className="mb-4">
                <Image className="vector4" src={Vector4} alt="amazon" />
              </div>
              <h3 className="urban mb-2">Academic Workshops</h3>
              <p className="urbanpara">
                Gyanarthi collaborates with Industry Experts to provide the
                students with constant insights to boost their career.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Whygyanarthi;
