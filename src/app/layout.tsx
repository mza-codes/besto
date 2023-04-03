import "@/styles/index.css";

export const metadata = {
    title: "Home - Redirect",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
