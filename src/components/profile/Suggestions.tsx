import SuggestionCard from "../SuggestionCard";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsStars } from "react-icons/bs";
import { GiBookCover } from "react-icons/gi";
import { BRAND } from "@/contants";

export default function Suggestions() {
    return (
        <div className="space-y-6 pt-4">
            <div className="mx-2 pt-6 row items-center gap-2">
                <span className="text-lg text-gray-600">Upgrade Your Business</span>
                <hr className={`h-[3px] hr mx-4 flex-grow my-2`} />
            </div>
            <main className="white-card flex-shrink py-6">
                <article className="p-6 space-y-6">
                    <h4 className="text-3xl font-black">3 Steps to become a top seller on {BRAND}</h4>
                    <p className="text-gray-500 max-w-none lg:max-w-[800px]" 
                    // style={{ maxWidth: `${90}vw` }}
                    >
                        The key to your success on {BRAND} is the brand you build for yourself through your {BRAND}
                        Reputaion. We gathered some tips and resources to help you become a leading seller on {BRAND}.
                    </p>
                </article>
                <div className="mx-4 row flex-shrink gap-2">
                    {suggestions.map((topic, i) => (
                        <SuggestionCard Icon={topic.icon} description={topic.description} title={topic.title} key={i} />
                    ))}
                </div>
            </main>
        </div>
    );
}

var suggestions = [
    {
        title: "Get Noticed!",
        icon: TfiAnnouncement,
        description: (
            <>
                Tap into the power of social media by <b>sharing your Gig,</b> and get expert help to grow your impact.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus laudantium aperiam repellendus
                perferendis accusantium ipsa repellat a.
            </>
        ),
    },
    {
        title: "Get More Skills & Exposure!",
        icon: GiBookCover,
        description: (
            <>
                THone your skills and expand your knowledge with <b>Online Courses</b> and get expert help to grow your
                impact. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus laudantium.
            </>
        ),
    },
    {
        title: "Become a Successful Seller!",
        icon: BsStars,
        description: (
            <>
                Watch this online course to learn how to create <b>an outstanding service experience</b> and get expert
                help to grow your impact. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </>
        ),
    },
];
