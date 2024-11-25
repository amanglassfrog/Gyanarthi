import { Plus_Jakarta_Sans } from "next/font/google";



const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });
// export const metadata = {
//   title: "Blogs - Rantra Academy",
//   description:"Looking for more? Read our blogs and check the news updates to know more about the National Defence Academy"
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">     
<title>Contact Us at Gyanarthi Media College for Admissions & More</title>
        <meta
          name="description"
          content="With Gyanarthi Media College, you get the best education in Fashion, Media, Commerce, Fine Arts, Animation and Design. Contact Us for Queries and More Today!"
        />
          
          <body className={inter.className}>
        {children}</body>
    </html>
  );
}
