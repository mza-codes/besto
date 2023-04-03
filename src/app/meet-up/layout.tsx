import { Kanit } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const kanit = Kanit({
    weight: ["400", "500", "600"],
    display: "swap",
    preload: true,
    subsets: ["latin"],
});

export const metadata = {
    title: "Meet Up!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className={`${kanit.className} bg-gradient-to-br from-[#fff0be] to-[#d8ffbe] min-h-screen`}>
            <Header />
            {children}
            <Footer />
        </section>
    );
}
