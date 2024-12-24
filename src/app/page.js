"use client";
import Image from "next/image";
import Header from "@/Components/Header/Header";
import Main from "@/Components/Main/Main";
import Placement from "@/Components/Placement/Placement";
import Whygyanarthi from "@/Components/Whygyanarthi/Whygyanarthi";
import Ourvision from "@/Components/Ourvision/Ourvision";

import Footer from "@/Components/Footer/Footer";

import Homegallery from "@/Components/Homegallery/Homegallery";
import Courses from "@/Components/Courses/Courses";
import FloatingIcons from "@/Components/FloatingIcons/FloatingIcons";
import VideoPopup from "@/Components/VideoPopup";
import Feed from "@/Components/feed/feed";
import Head from "next/head";
import { useEffect } from "react";


export const metadata = {
  title: "Gyanarthi: Best Fashion, Media, and Arts College in Kashipur",
  description:
    "Pursue your College Education at Gyanarthi Media College, Kumaun University, in Fashion, Media, Commerce, Fine Arts, and Animation Course in city of Kashipur.",
 
};

export default function Home() {

useEffect(() => {
    const allHeads = document.getElementsByTagName("head");
    if (allHeads.length > 1) {
      console.warn("Found multiple head tags. Removing duplicates...");
      for (let i = 1; i < allHeads.length; i++) {
        allHeads[i].parentNode.removeChild(allHeads[i]);
      }
    }
  }, []);
  return (
    <>
      
      
           <VideoPopup />
          <Header />
          <Main />
          {/* <Feed /> */}
          <Placement />

          <Whygyanarthi />
          <Courses />
          <Ourvision />

          <Homegallery />
          <Footer />
          <FloatingIcons />
       
      
    </>
  );
}
