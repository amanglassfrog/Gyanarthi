import React from "react";

const Feed = () => {
  return (
    <section className=" p-8 bg-gray-100">
      {/* Right Side: Video */}
      <div className="w-full  mt-8 lg:mt-0 flex flex-col justify-center items-center text-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Our Achiever</h2>
          <p className="text-lg text-gray-600">
            Celebrate the stories of individuals who turned their ambitions into
            reality. From dreamers to doers, their journeys are proof that
            success is within reach when determination meets opportunity. Be
            inspired by their achievements and let them motivate you to achieve
            your own goals.
          </p>
        </div>
        <video
          className="w-full lg:w-3/4 rounded-lg shadow-lg"
          autoPlay
          loop
          controls
        >
          <source src="/test.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Feed;
