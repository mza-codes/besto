import { genTitle } from "@/contants";
import "@/styles/index.css";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";

const inter = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: "500",
});

export const metadata = {
    title: genTitle("Home"),
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <Header />
                {children}
                {/* <ThemeBtn /> */}
            </body>
        </html>
    );
}
