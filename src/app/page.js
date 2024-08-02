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

export default function Home() {
  return (
    <>
      <head>
        <title>Gyanarthi</title>
        <meta
          name="title"
          content="Gyanarthi: Best Fashion, Media, and Arts College in Kashipur"
        />
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
          <Header />
          <Main />
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
