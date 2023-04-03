export const metadata = {
    title: "Form Submitted Successfully!",
};

export default function SuccessMsg({ searchParams }: any) {
    const { email = "abc@def.com" } = searchParams;
    return (
        <main className="col center text-center h-[90dvh] pt-6 px-2 gap-3">
            <h2 className="text-4xl font-semibold pb-3">Form Submitted Successfully!</h2>
            <span className="text-xl">
                The link to registration will be emailed to {" "}<i className="font-bold break-all">"{email?.slice(0,50)}"</i> {"  "}shortly
                and will be valid for 24 hours!
            </span>
            <span>Thanks for being a valued member!</span>
        </main>
    );
};
