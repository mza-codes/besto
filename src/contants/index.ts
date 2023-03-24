export const BRAND = `Fiverr`;

export const genTitle = (pre: string) => `${pre} | ${BRAND} - Freelancing`;

export const routes = [
    {
        path: "/",
        name: "Dashboard",
    },
    {
        path: "/login",
        name: "My Business",
    },
    {
        path: "/signup",
        name: "Growth & Marketing",
    },
    {
        path: "/profile",
        name: "Analytics",
    },
];
