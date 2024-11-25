import { Plus_Jakarta_Sans } from "next/font/google";



const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">     
   <title>Terms and Conditions: Gyanarthi Media College, Kashipur</title>
        <meta
          name="description"
          content="Check out the Terms and Conditions for the best Media College in the city of Kashipur, Gyanarthi Media College, affiliated with the Kumaun University, Nainital."
        />
          
          <body className={inter.className}>
        {children}</body>
    </html>
  );
}
