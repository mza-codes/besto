import { routes } from "@/utils";
import AppLogo from "./assets/AppLogo";
import Link from "next/link";

export default function Header() {
    return (
        <header className="app-header">
            <Link href={"/"}>
                <AppLogo classes="mx-2" />
            </Link>
            <ul className="row items-center mx-2 gap-1">
                {routes.map((link) => (
                    <li key={link.name}>
                        <Link className="header-link" href={link.path}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    );
}
