import React from "react";

export default function Hr({ classes = "" }: HrProps) {
    return <hr className={`h-[0.5px] hr w-full my-2 ${classes}`} />;
}

type HrProps = {
    classes?: string;
};
