import { Plus_Jakarta_Sans } from "next/font/google";



const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">     
<title>Pictures and Behind the Scenes at Gyanarthi Media College</title>
        <meta
          name="description"
          content="Want to know how life is at Gyanarthi Media College, located in the picturesque city of Kashipur? Check out our Gallery for pictures and behind-the-scenes!"
        />
          
          <body className={inter.className}>
        {children}</body>
    </html>
  );
}
