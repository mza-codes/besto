import Image from "next/image";
import React from "react";
import Hr from "../assets/Hr";
import { MONTHS } from "@/contants";

export default function UserCard() {
    return (
        <div className="white-card p-4 space-y-4 py-14">
            <div className="min-w-[250px] md:min-w-[320px] row items-center justify-between gap-2 pb-4">
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
                <span className="h6">6</span>
            </div>
            <Hr />
            <article className="col gap-2">
                <div className="row justify-between items-center">
                    <span>Inbox response rate: </span>
                    <b className="text-green-500">80%</b>
                </div>

                <div className="row justify-between items-center">
                    <span>Inbox response time: </span>
                    <b className="text-sky-800">3 Hours</b>
                </div>

                <div className="row justify-between items-center">
                    <span>Order response rate: </span>
                    <b className="text-orange-600">50%</b>
                </div>

                <div className="row justify-between items-center">
                    <span>Delivered on time: </span>
                    <b className="text-green-600">90%</b>
                </div>

                <div className="row justify-between items-center">
                    <span>Order Completion: </span>
                    <b className="text-emerald-600">100%</b>
                </div>
            </article>
            <Hr />
            <div className="row justify-between items-center">
                <span>Earned in Mrach:</span>
                <b className="text-lime-500">$45.4 K</b>
            </div>
        </div>
    );
}
