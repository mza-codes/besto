import Image from "next/image";
import React from "react";
import Hr from "../assets/Hr";
import Name from "./Name";

type UserProps = {
    name: string;
};

export default function UserCard({ name }: UserProps) {
    const data = {
        irr: Math.floor(Math.random() * 65 + 35),
        orr: Math.floor(Math.random() * 70 + 30),
        dot: Math.floor(Math.random() * 90 + 10),
        time: Math.floor(Math.random() * 16 + 1),
        order_completion: Math.floor(Math.random() * 85 + 15),
        earned: Math.floor(Math.random() * 22 + 2),
        works: Math.floor(Math.random() * 80 + 4),
    };
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
                    <Name name={name} />
                </div>
                <span className="badge bg-red-600 text-white">{data.works}</span>
            </div>
            <Hr />
            <article className="col gap-4 py-4">
                <div className="row justify-between items-center gap-2">
                    <span>Inbox response rate: </span>
                    <div className="horizontal-bar-wrap flex-grow mx-2 min-w-[150px] md:min-w-[160px]">
                        <div style={{ width: `${data.irr}%` }} className="bar"></div>
                    </div>
                    <b className="">{data.irr}%</b>
                </div>

                <div className="row justify-between items-center gap-2">
                    <span>Order response rate: </span>
                    <div className="horizontal-bar-wrap flex-grow mx-2 min-w-[150px] md:min-w-[160px]">
                        <div style={{ width: `${data.orr}%` }} className="bar"></div>
                    </div>
                    <b className="">{data.orr}%</b>
                </div>

                <div className="row justify-between items-center gap-2">
                    <span>Delivered on time: </span>
                    <div className="horizontal-bar-wrap flex-grow mx-2 min-w-[150px] md:min-w-[160px]">
                        <div style={{ width: `${data.dot}%` }} className="bar"></div>
                    </div>
                    <b className="">{data.dot}%</b>
                </div>

                <div className="row justify-between items-center gap-2">
                    <span>Order Completion: </span>
                    <div className="horizontal-bar-wrap flex-grow mx-2 min-w-[150px] md:min-w-[160px]">
                        <div style={{ width: `${data.order_completion}%` }} className="bar"></div>
                    </div>
                    <b className="">{data.order_completion}%</b>
                </div>

                <div className="row justify-between items-center gap-2">
                    <span>Inbox response time: </span>
                    <b className="text-green-500">{data.time} Hours</b>
                </div>
            </article>
            <Hr />
            <div className="row justify-between items-center gap-2">
                <span>Earned in March:</span>
                <b className="">
                    ${data.earned}.{data.irr} K
                </b>
            </div>
        </div>
    );
}
