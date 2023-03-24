import { routes } from "@/contants";
import AppLogo from "./assets/AppLogo";
import Link from "next/link";
import { MdNotifications } from "react-icons/md";
import { RiQuestionFill } from "react-icons/ri";
import { HiMail, HiMenuAlt3 } from "react-icons/hi";
import Avatar from "./user/Avatar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconType } from "react-icons";

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
                <ul className="row items-center mx-2 gap-3">
                    {icons.map((Icon, i) => (
                        <li key={i} className="text-2xl p-1 icon">
                            <Icon />
                        </li>
                    ))}
                    <Avatar />
                </ul>
            </div>
            <div className="block sm:hidden">
                <ul className="row items-center mx-2 gap-4">
                    <Avatar />
                    <span className="text-4xl icon">
                        <HiMenuAlt3 />
                    </span>
                </ul>
            </div>
        </header>
    );
}

var icons: IconType[] = [MdNotifications, HiMail, RiQuestionFill];
