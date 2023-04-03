import UserForm from "./Form";
import { righteous } from "./Header";

export const metadata = {
    title: "Meet Up!",
};

export default function MeetUpHome() {
    return (
        <>
            <section className={`relative pb-6 flex justify-between items-center flex-wrap`}>
                <img
                    className="object-cover w-full lg:w-1/2 h-full max-h-screen aspect-auto"
                    src={"/hero.svg"}
                    alt="hero_image"
                />

                <article className="w-full lg:w-1/2">
                    <div className="px-4 flex flex-col gap-6 flex-wrap text-start justify-center">
                        <h1 className={`text-5xl ${righteous.className} leading-tight text-gray-800`}>
                            Need Help In Your Profession?
                        </h1>
                        <span className="text-2xl font-normal font-kanit leading-tight max-w-lg">
                            We help you by providing an opportunity to learn & adapt from the most experienced
                            professionals in various fields.
                        </span>
                        <button
                            type="button"
                            // onClick={ScrollToFrom}
                            className="py-3 px-6 font-medium text-xl font-kanit rounded-md active:scale-95 transition-all ease-in-out bg-green-600 hover:bg-green-700 text-white max-w-fit">
                            Book a 30 Minute Free Session
                        </button>
                        <span className="text-lg">
                            Meet Up Helps people from various professions to seek help from the professionals. <br />
                            Meet Up has a community of 2500+ Members. <br />
                            What's Stopping You ? Let's SignUp!
                        </span>
                    </div>
                </article>
            </section>
            <UserForm />
        </>
    );
};
