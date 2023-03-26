import StatusBar from "@/components/profile/StatusBar";
import Suggestions from "@/components/profile/Suggestions";
import UserCard from "@/components/profile/UserCard";
import Upgrade from "@/components/user/Upgrade";

export default function Home({ searchParams }: any) {
    const { name = "John Wander" } = searchParams;
    return (
        <main className="pt-28 p-6">
            
                <div className="row items-start gap-6 w-full justify-center">
                    <section className="col flex-shrink-1 max-w-md gap-6">
                        <UserCard name={name} />
                        <Upgrade />
                    </section>
                    <section className="col gap-2 flex-grow min-w-fit">
                        <StatusBar />
                        <Suggestions />
                    </section>
                </div>
        </main>
    );
}
