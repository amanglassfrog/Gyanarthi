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
export default function Home() {
    const GA_TRACKING_ID = 'G-FVZEWPFVML';


  return (
    <>
       <head>
        <title>Gyanarthi: Best Fashion, Media, and Arts College in Kashipur</title>       
        <meta
          name="description"
          content="Pursue your College Education at Gyanarthi Media College, Kumaun University, in Fashion, Media, Commerce, Fine Arts, and Animation Course in city of Kashipur."
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '293918380265545');
              fbq('track', 'PageView');
            `,
          }}
        />
       <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
        
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=293918380265545&ev=PageView&noscript=1"
          />
        </noscript>
        <meta name="google-site-verification" content="PZmEgTeoZGa19Mium6STqH0mEHf2dBvFjibQUxOm6wE" />
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
      
    </>
  );
}
