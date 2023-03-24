import { Righteous } from "next/font/google";

const righteous = Righteous({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    preload: true,
});

export default function AppLogo({ classes = "" }: AppLogoProps) {
    return (
        <div className={`p-4 ${classes} relative -top-2`}>
            <BrandName />
            <span className="text-xs text-sky-800 absolute bottom-1 right-1">Freelancing.</span>
        </div>
    );
}

type AppLogoProps = {
    classes?: string;
};

export const BrandName = () => (
    <span className={`text-4xl tracking-wider ${righteous.className}`}>
        <b className="text-green-700">B</b>
        <span className="text-fuchsia-7000">est</span>
        <b className="text-sky-7000">o</b>
    </span>
);
