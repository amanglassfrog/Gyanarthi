import { Plus_Jakarta_Sans } from "next/font/google";
import "../../public/globals.css";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });
const GA_TRACKING_ID = 'G-FVZEWPFVML';
    

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>{children}</body>
    </html>
  );
}
