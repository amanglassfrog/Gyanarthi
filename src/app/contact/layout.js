import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";



const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
      <html lang="en">  
    <Head>     
<title>Contact Us at Gyanarthi Media College for Admissions & More</title>
        <meta
          name="description"
          content="With Gyanarthi Media College, you get the best education in Fashion, Media, Commerce, Fine Arts, Animation and Design. Contact Us for Queries and More Today!"
        /></Head> 
          
          <body className={inter.className}>
        {children}</body>
    </html>
  );
}
