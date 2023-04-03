import Link from "next/link";
import { Righteous } from "next/font/google";

export const righteous = Righteous({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    preload: true,
});

export default function Header() {
    return (
        <header className="row justify-between items-center fixed h-20 py-2 text-center w-full z-40">
            <Link href="/meet-up" className="relative">
                <h1
                    className={`${righteous.className} font-normal underline underline-offset-2 ml-6 text-slate-800 text-4xl cursor-pointer`}>
                    Meet Up!
                </h1>
                <span className="text-xs absolute -bottom-4 left-6">Helping Society!</span>
            </Link>

            <Link
                href="/meet-up"
                className="py-2 px-4 text-sm cursor-pointer btn-hover rounded-lg mr-6 bg-orange-700 hover:bg-orange-800 text-white">
                Register
            </Link>
        </header>
    );
}
