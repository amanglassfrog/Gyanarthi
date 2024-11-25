import { Plus_Jakarta_Sans } from "next/font/google";



const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });
// export const metadata = {
//   title: "Blogs - Rantra Academy",
//   description:"Looking for more? Read our blogs and check the news updates to know more about the National Defence Academy"
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">     
<title>Gyanarthi Media College: Admissions Open Now, Apply Today!</title>
        <meta
          name="description"
          content="Gyanarthi Media College, affiliated with Kumaun University, Nainital, is offering admissions in courses like BJMC, BFA, BCom, Animation, and more. Apply Now."
        />
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
