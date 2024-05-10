import { Plus_Jakarta_Sans } from "next/font/google";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });
export const metadata = {
    title: "About Us - Gyanarthi",
    description: "At Gyanarthi, the first question we ask you is ‘Do you have it in you’?",
};
export default function RootLayout({ children }) {
    return (


        <html lang="en">
            <body className={inter.className}>{children}</body>

        </html>
    );
}
