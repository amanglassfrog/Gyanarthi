import { Plus_Jakarta_Sans } from "next/font/google";



const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Join Gyanarthi Media College and secure 100% Placements",
  description:"With Gyanarthi Media Colleges curriculum-focused education and industry-best infrastructure, learn how to use your education to secure 100% placements."
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">     
 
          
          <body className={inter.className}>
        {children}</body>
    </html>
  );
}
