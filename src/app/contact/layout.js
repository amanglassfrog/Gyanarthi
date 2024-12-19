

import { Plus_Jakarta_Sans } from "next/font/google";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });
export const metadata = {
    title: "Contact Us at Gyanarthi Media College for Admissions & More",
    description: "With Gyanarthi Media College, you get the best education in Fashion, Media, Commerce, Fine Arts, Animation and Design. Contact Us for Queries and More Today!",
};
export default function RootLayout({ children }) {
    return (


        <html lang="en">
            <body className={inter.className}>{children}</body>

        </html>
    );
}

