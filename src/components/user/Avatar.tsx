import Image from "next/image";

export default function Avatar() {
    return (
        <div className="relative w-11 h-11">
            <Image className="rounded-full shadow-md hover:shadow-lg" src="/user.png" alt="user_avatar" width={40} height={40} />
            <b className="absolute right-0 -bottom-1 text-green-500 text-6xl">.</b>
        </div>
    );
}
