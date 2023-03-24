import Image from "next/image";

export default function Avatar() {
    return (
        <div>
            <Image className="rounded-full" src="/user.png" alt="user_avatar" width={40} height={40} />
        </div>
    );
}
