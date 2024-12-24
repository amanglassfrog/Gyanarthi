import { Plus_Jakarta_Sans } from "next/font/google";
import "../../public/globals.css";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

const GA_TRACKING_ID = 'G-FVZEWPFVML';

export const metadata = {
  title: "Gyanarthi: Best Fashion, Media, and Arts College in Kashipur",
  description:
    "Pursue your College Education at Gyanarthi Media College, Kumaun University, in Fashion, Media, Commerce, Fine Arts, and Animation Course in city of Kashipur.",
 
};
    

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>{children}</body>
    </html>
  );
}
