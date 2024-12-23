import { Plus_Jakarta_Sans } from "next/font/google";
import "../../public/globals.css";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });
    const GA_TRACKING_ID = 'G-FVZEWPFVML';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
