import SuggestionCard from "../SuggestionCard";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsStars } from "react-icons/bs";
import { GiBookCover } from "react-icons/gi";

export default function Suggestions() {
    return (
        <div className="space-y-6 pt-4">
            <div className="mx-2 pt-6 row items-center gap-2 w-full">
                <span className="h6 text-gray-600">Upgrade Your Business</span>
                <hr className={`h-[3px] hr mx-4 flex-grow my-2`} />
            </div>
            <main className="white-card w-full flex-grow">
                <article className="p-6 space-y-6">
                    <h4 className="h5">3 Step to become a top seller on Besto</h4>
                    <p style={{ maxWidth: `${500}px` }}>
                        The key to your success on Besto is the brand you build for yourself through your Besto
                        Reputaion. We gathered some tips and resources to help you become a leading seller on Besto.
                    </p>
                </article>
                <div
                    // className="grid grid-cols-4 gap-2"
                    className="mx-4 row gap-2 w-full flex-grow">
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
