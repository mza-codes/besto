import { routes } from "@/contants";
import AppLogo from "./assets/AppLogo";
import Link from "next/link";
import { MdHelp, MdNotifications } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import Avatar from "./user/Avatar";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
    return (
        <header className="app-header">
            <div className="row items-center gap-2 mx-2">
                <Link href={"/"}>
                    <AppLogo />
                </Link>
                <div className="hidden lg:block">
                    <ul className="row items-center mx-2 gap-1">
                        {routes.map((link, i) => (
                            <li className="row items-center" key={link.name}>
                                <Link className="p-2 hover:text-opacity-50" href={link.path}>
                                    {link.name}
                                </Link>
                                {i != 0 && (
                                    <span className="text-xl">
                                        <MdKeyboardArrowDown />
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="hidden sm:block">
                <ul className="row items-center mx-4 gap-4">
                    <li className="text-2xl p-1 icon">
                        <MdNotifications />
                    </li>

                    <li className="text-2xl p-1 icon">
                        <FiMail />
                    </li>

                    <li className="text-2xl p-1 icon">
                        <MdHelp />
                    </li>
                    <Avatar />
                </ul>
            </div>
        </header>
    );
}
