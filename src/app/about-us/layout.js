import { Plus_Jakarta_Sans } from "next/font/google";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });
export const metadata = {
    title: "About Us - Gyanarthi",
    description: "Expand your knowledge and learning experience at Gyanarthi Media College, Kashipur. Learn more about us, faculty, board members, curriculum and placements. ",
};
export default function RootLayout({ children }) {
    return (


        <html lang="en">
            <body className={inter.className}>{children}</body>

        </html>
    );
}
