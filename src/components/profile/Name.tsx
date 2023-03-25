"use client";

export default function Name({ name }: { name: string }) {
    return <span className="h6 capitalize">{name?.length > 20 ? name.slice(0, 20) + " .." : name}</span>;
}
