"use client";
import { useState, useEffect } from "react";

const VideoPopup = () => {
  const [isPopupVisible, setPopupVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(false);
    }, 15000); // Automatically hide popup after 15 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    isPopupVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
        <div className="relative w-2/3 h-2/3 flex justify-center items-center">
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
