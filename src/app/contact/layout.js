import { Plus_Jakarta_Sans } from "next/font/google";



const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
      <html lang="en">  
    <head>     
<title>Contact Us at Gyanarthi Media College for Admissions & More</title>
        <meta
          name="description"
          content="With Gyanarthi Media College, you get the best education in Fashion, Media, Commerce, Fine Arts, Animation and Design. Contact Us for Queries and More Today!"
        /></head> 
          
          <body className={inter.className}>
        {children}</body>
    </html>
  );
}
