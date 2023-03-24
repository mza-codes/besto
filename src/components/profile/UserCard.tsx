import Image from "next/image";
import React from "react";
import Hr from "../assets/Hr";

export default function UserCard() {
    return (
        <div className="white-card p-4 space-y-4 py-14">
            <div className="min-w-[200px] md:min-w-[360px] row items-center justify-between gap-2 pb-4">
                <div className="row gap-2 center">
                    <Image
                        className="w-20 h-20 aspect-square"
                        src="/user.jpg"
                        alt="user_image"
                        width={260}
                        height={260}
                    />
                    <span className="h6">Alex Bill</span>
                </div>
                <span className="badge bg-red-600 text-white">6</span>
            </div>
            <Hr />
            <article className="col gap-4 py-4">
                <div className="row justify-between items-center gap-2">
                    <span>Inbox response rate: </span>
                    <div className="horizontal-bar-wrap flex-grow mx-2 min-w-[150px] md:min-w-[160px]">
                        <div style={{ width: `${60}%` }} className="bar"></div>
                    </div>
                    <b className="">60%</b>
                </div>

                <div className="row justify-between items-center gap-2">
                    <span>Order response rate: </span>
                    <div className="horizontal-bar-wrap flex-grow mx-2 min-w-[150px] md:min-w-[160px]">
                        <div style={{ width: `${50}%` }} className="bar"></div>
                    </div>
                    <b className="">50%</b>
                </div>

                <div className="row justify-between items-center gap-2">
                    <span>Delivered on time: </span>
                    <div className="horizontal-bar-wrap flex-grow mx-2 min-w-[150px] md:min-w-[160px]">
                        <div style={{ width: `${90}%` }} className="bar"></div>
                    </div>
                    <b className="">90%</b>
                </div>

                <div className="row justify-between items-center gap-2">
                    <span>Order Completion: </span>
                    <div className="horizontal-bar-wrap flex-grow mx-2 min-w-[150px] md:min-w-[160px]">
                        <div style={{ width: `${100}%` }} className="bar"></div>
                    </div>
                    <b className="">100%</b>
                </div>

                <div className="row justify-between items-center gap-2">
                    <span>Inbox response time: </span>
                    <b className="text-green-500">3 Hours</b>
                </div>
            </article>
            <Hr />
            <div className="row justify-between items-center gap-2">
                <span>Earned in March:</span>
                <b className="">$45.4 K</b>
            </div>
        </div>
    );
}
