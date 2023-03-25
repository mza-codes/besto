"use client";

import { BRAND } from "@/contants";
import { useRef, useState } from "react";

export default function Upgrade() {
    const msg = useRef<HTMLParagraphElement | null>(null);
    const [show, setShow] = useState(false);
    return (
        <div className="white-card py-6 space-y-2 px-4 flex-grow max-w-[inherit]">
            <span className="text-xl text-gray-600">Upgrade to Premium !</span>
            <p className="text-sm text-gray-600">
                Our Premium Membership allows you to get access to top most works in {BRAND}.
            </p>

            <button
                onClick={() => setShow(true)}
                disabled={show}
                className="btn-hover w-full py-2 px-4 text-lg font-semibold bg-green-600 hover:bg-green-500 text-white">
                Join Now!
            </button>
            {show && (
                <p ref={msg} className="text-slate-800 text-center font-medium">
                    This feature will be available soon!
                </p>
            )}
        </div>
    );
}
