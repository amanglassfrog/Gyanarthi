import { Plus_Jakarta_Sans } from "next/font/google";



const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">     
  <title>Gyanarthi Media College, Kashipur: Privacy Policy Details</title>
        <meta
          name="description"
          content="Check out the Privacy Policy Details of the Gyanarthi Media College, Kashipur, affiliated with the Kumaon University, Nainital. Connect for more details. "
        />
          
          <body className={inter.className}>
        {children}</body>
    </html>
  );
}
