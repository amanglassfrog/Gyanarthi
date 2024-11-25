import { Plus_Jakarta_Sans } from "next/font/google";
import "../../public/globals.css";
import Head from "next/head";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
