import { Plus_Jakarta_Sans } from "next/font/google";



const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });
export const metadata = {
  title: "Blog: Read More about Gyanarthi Media College Kashipur",
  description:"Check out the Gyanarthi Blog for more information on the Courses, Curriculum, Infrastructure, Faculty, Life at the College, Media Studies, and more."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">     

{/* <!-- Facebook Meta Tags --> */}
<meta property="og:url" content="https://www.gyanarthimedia.com/blogs"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Read More about Gyanarthi Media College Kashipur"/>
<meta property="og:description" content="Check out the Gyanarthi Blog for more information on the Courses, Curriculum, Infrastructure, Faculty, Life at the College, Media Studies, and more"/>
<meta property="og:image" content="https://opengraph.b-cdn.net/production/images/1feb2971-8388-4a47-9406-a63ba404ba19.jpg?token=eZpSGk5upaDtXbUzablA8QFXP1gCv6jfLErchJyjITY&height=186&width=270&expires=33258587912"/>
{/* <!-- Twitter Meta Tags --> */}
<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="gyanarthimedia.com"/>
<meta property="twitter:url" content="https://www.gyanarthimedia.com/blogs"/>
<meta name="twitter:title" content="Read More about Gyanarthi Media College Kashipur"/>
<meta name="twitter:description" content="Check out the Gyanarthi Blog for more information on the Courses, Curriculum, Infrastructure, Faculty, Life at the College, Media Studies, and more"/>
<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/1feb2971-8388-4a47-9406-a63ba404ba19.jpg?token=eZpSGk5upaDtXbUzablA8QFXP1gCv6jfLErchJyjITY&height=186&width=270&expires=33258587912"/>
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
