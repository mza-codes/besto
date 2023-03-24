export default function Suggestions() {
    // const width = window?.innerWidth ?? 800;
    return (
        <div className="space-y-6 pt-4">
            <div className="mx-2 row items-center gap-2 w-full">
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
            </main>
        </div>
    );
}
