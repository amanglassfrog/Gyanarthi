import { Plus_Jakarta_Sans } from "next/font/google";



const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">     
 <title>Join Gyanarthi Media College and secure 100% Placements</title>
        <meta
          name="description"
          content="With Gyanarthi Media College’s curriculum-focused education and industry-best infrastructure, learn how to use your education to secure 100% placements."
        />
          
          <body className={inter.className}>
        {children}</body>
    </html>
  );
}
