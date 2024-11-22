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
export default function Home() {
  return (
    <>
      <head>
        <title>Gyanarthi: Best Fashion, Media, and Arts College in Kashipur</title>       
        <meta
          name="description"
          content="Pursue your College Education at Gyanarthi Media College, Kumaun University, in Fashion, Media, Commerce, Fine Arts, and Animation Course in city of Kashipur."
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
        </main>
      </body>
    </>
  );
}
