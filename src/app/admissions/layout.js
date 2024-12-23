import { Plus_Jakarta_Sans } from "next/font/google";



const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });
export const metadata = {
  title: "Gyanarthi Media College: Admissions Open Now, Apply Today!",
  description:"Gyanarthi Media College, affiliated with Kumaun University, Nainital, is offering admissions in courses like BJMC, BFA, BCom, Animation, and more. Apply Now."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">     

      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
