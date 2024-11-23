"use client";
import { useState, useEffect } from "react";

const VideoPopup = () => {
  const [isPopupVisible, setPopupVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(false);
    }, 150000); // Automatically hide popup after 15 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    isPopupVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
        <div className="relative w-full h-full p-2 md:p-0 md:w-2/3 md:h-2/3 flex justify-center items-center">
          <button
            className="absolute top-4 right-4 bg-white text-black rounded-full px-4 py-2 hover:bg-gray-200"
            onClick={() => setPopupVisible(false)}
          >
            X
          </button>
          <video
            className="max-w-full max-h-full rounded shadow-lg"
            autoPlay
            controls
          >
            <source src="/test.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  );
};

export default VideoPopup;
