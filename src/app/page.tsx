import StatusBar from "@/components/profile/StatusBar";
import Suggestions from "@/components/profile/Suggestions";
import UserCard from "@/components/profile/UserCard";

export default function Home() {
    return (
        <main className="pt-24 p-6">
            <div className="row items-start gap-6 w-full">
                <UserCard />
                <section className="col gap-2 flex-grow">
                    <StatusBar />
                    <Suggestions />
                </section>
            </div>
        </main>
    );
}
